import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '../constans/routes';
import { useAppSelector } from '../hooks';
import Home from '../Scenes/Home';
import Login from '../Scenes/Login';

function RootRoute() {

    const isUserLogin = useAppSelector(state => state.user.isLogged);
    console.log(isUserLogin);

    const renderedForGuest = (scene) => {
        if(isUserLogin) {
            return scene;
        }
        else {
            return <Navigate to={ROUTES.loginPage}/>
        }

    }

    return (
        <Routes>
            <Route path={ROUTES.homePage} element={renderedForGuest(<Home />)}></Route>
            <Route path={ROUTES.loginPage} element={<Login />}></Route>
            <Route path='*' element={<h2 className='erorr--not-found'>Ресурс не найден!</h2>}></Route>
        </Routes>
    )
}

export default RootRoute;