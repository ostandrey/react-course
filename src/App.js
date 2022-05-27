import React, {useState} from 'react';
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
    const [title, setTitle] = useState()

    const addNewPost = () => {
        console.log(title)
    }

  return (
    <div className="App">
        <form>
            <MyInput
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <MyInput type="text" placeholder="Description"/>
            <MyButton onClick={addNewPost}/>
        </form>
        <PostList posts={posts} title='List of posts JS'/>
        {/*<ClassCounter/>*/}
        {/*<Counter/>*/}
    </div>
  );
}

export default App;
