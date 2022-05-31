import React, {useRef, useState} from 'react';
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState( [
        {id: 1, title: 'aa', body: 'tt'},
        {id: 2, title: 'sss 2', body: 'iii'},
        {id: 3, title: 'ppppp 3', body: 'qqqqq'}
    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    function getSortedPosts() {
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts
    }
    const sortedPosts = getSortedPosts();

    // const bodyInputRef = useRef();
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    
    const sortPosts = (sort) => {
      setSelectedSort(sort);
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder='Search...'
            />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Sort"
                option={[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By description'}
                ]}
            />
        </div>
        {posts.length
            ?
            <PostList remove={removePost} posts={sortedPosts} title='List of posts JS'/>
            :
            <h1 style={{textAlign: 'center'}}>No posts not found!</h1>
        }

        {/*<ClassCounter/>*/}
        {/*<Counter/>*/}
    </div>
  );
}

export default App;
