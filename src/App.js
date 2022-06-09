import React from 'react';
import './styles/app.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/about' element={<About />}/>
                <Route path="/posts"  element={<Posts />}/>
            </Routes>
        </Router>
    )
}

export default App;
