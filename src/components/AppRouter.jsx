import React, {useContext} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
        ?
            <Routes>
                {/*{privateRoutes.map(route =>*/}
                {/*    <Route*/}
                {/*        path={route.path}*/}
                {/*        element={route.component}*/}
                {/*        exact={route.exact}*/}
                {/*key={route.path}*/}
                {/*    />*/}
                {/*)}*/}
                <Route path='/about' element={<About />}/>
                <Route exact path="/posts"  element={<Posts />}/>
                <Route exact path="/posts/:id"  element={<PostIdPage />}/>
                <Route path="/error"  element={<Error />}/>
                <Route path='*' element={<Navigate replace to="/posts" />}/>
            </Routes>
            :
            <Routes>
                {/*{publicRoutes.map(route =>*/}
                {/*    <Route*/}
                {/*        path={route.path}*/}
                {/*        element={route.component}*/}
                {/*        exact={route.exact}*/}
                {/*key={route.path}*/}
                {/*    />*/}
                {/*)}*/}
                <Route path='/login' element={<Login />}/>
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>

    );
};

export default AppRouter;