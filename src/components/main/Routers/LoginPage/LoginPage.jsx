import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../../HelpFull/Header/HeaderBar';
import { Link } from 'react-router-dom';
import { Login } from '../../HelpFull/Login/Login';

export default function LoginPage() {
    return (
        <div>
            <div className='Block_Header'>
                <Outlet></Outlet>
                <HeaderBar />
            </div>
            <h1 className='auth'>Логин</h1>
            <Login></Login>
            <p className='auth_button'>
                Войдите или <Link to='/Регистрация'> Зарегестрируйтесь</Link>
            </p>
        </div>
    )
}
