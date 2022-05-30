import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: ''});

    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({ title: '', body: ''});
    }

    return (
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
    );
};

export default PostForm;