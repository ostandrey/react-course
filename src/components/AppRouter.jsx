import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/Login";

const AppRouter = () => {
    const isAuth = true
    return (
        isAuth
        ?
            <Routes>
                {/*{privateRoutes.map(route =>*/}
                {/*    <Route*/}
                {/*        path={route.path}*/}
                {/*        element={route.component}*/}
                {/*        exact={route.exact}*/}
                {/*    />*/}
                {/*)}*/}
                <Route path='/about' element={<About />}/>
                <Route exact path="/posts"  element={<Posts />}/>
                <Route exact path="/posts/:id"  element={<PostIdPage />}/>
                <Route path="/error"  element={<Error />}/>
                <Route path='*' element={<Posts/>}/>
            </Routes>
            :
            <Routes>
                {/*{publicRoutes.map(route =>*/}
                {/*    <Route*/}
                {/*        path={route.path}*/}
                {/*        element={route.component}*/}
                {/*        exact={route.exact}*/}
                {/*    />*/}
                {/*)}*/}
                <Route path='/login' element={<Login />}/>
            </Routes>

    );
};

export default AppRouter;