import React, {useRef, useState} from 'react';
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState( [
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'}
    ]);
    const [post, setPost] = useState({ title: '', body: ''});
    // const bodyInputRef = useRef();

    const addNewPost = (event) => {
        event.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({ title: '', body: ''});
    }

  return (
    <div className="App">
        <form>
            {/*Controlled component*/}
            <MyInput
                type="text"
                placeholder="Title"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            {/*Uncontrolled component*/}
            <MyInput
                // ref={bodyInputRef}
                type="text"
                placeholder="Description"
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
        <PostList posts={posts} title='List of posts JS'/>
        {/*<ClassCounter/>*/}
        {/*<Counter/>*/}
    </div>
  );
}

export default App;
