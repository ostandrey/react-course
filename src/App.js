import React from 'react';
import './styles/app.css'
import {BrowserRouter as Router, Redirect, Route, Routes, Navigate} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import Error from "./pages/Error";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/about' element={<About />}/>
                <Route path="/posts"  element={<Posts />}/>
                <Route path="/error"  element={<Error />}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </Router>
    )
}

export default App;
