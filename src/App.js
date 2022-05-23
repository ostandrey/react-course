import React from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/app.css'
import PostItem from "./components/PostItem";

function App() {

  return (
    <div className="App">
        {/*<ClassCounter/>*/}
        {/*<Counter/>*/}
        <PostItem post={{id: 1, title: 'Javascript', body: 'Description'}} />
    </div>
  );
}

export default App;
