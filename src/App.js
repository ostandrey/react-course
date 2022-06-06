import React, {useEffect, useMemo, useRef, useState} from 'react';
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import {usePosts} from "./hooks/usePost";
import axios from "axios";
import PostService from "./API/PostService";

function App() {
    const [posts, setPosts] = useState( []);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostsLoading, setIsPostsLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    // const bodyInputRef = useRef();
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        const posts = await PostService.getAll();
        setPosts(posts)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <button onClick={fetchPosts}>Get posts</button>
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
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='List of posts JS'/>
        {/*<ClassCounter/>*/}
        {/*<Counter/>*/}
    </div>
  );
}

export default App;
