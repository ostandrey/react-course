import React, {useEffect, useReducer, useRef, useState} from 'react';
import {usePosts} from "../hooks/usePost";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import PostService from "../API/PostService";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";

function Posts() {
    const [posts, setPosts] = useState( []);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();
    console.log(lastElement)
    const observer = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    });

    useEffect(() => {
        if(isPostsLoading) return;
        if(observer.current) observer.current.disconnect();
        const callback = function (entries, observer) {
            if (entries[0].isIntersecting && page < totalPages) {
                setPage(page + 1)
            }
        };
        console.log(lastElement)
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [isPostsLoading])

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page]);

    // const bodyInputRef = useRef();
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    }

    return (
        <div className="App">
            <MyButton
                style={{marginTop: 30}}
                onClick={() => setModal(true)}
            >
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {
                postError && <h1>Error: ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='List of posts JS'/>
            <div ref={lastElement} style={{height: 20, background: "teal", margin: "10 0"}}/>
            { isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
            {/*<ClassCounter/>*/}
            {/*<Counter/>*/}
        </div>
    );
}

export default Posts;
