import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../../HelpFull/Header/HeaderBar';
import { Link } from 'react-router-dom';
import { HelpSignUp } from '../../HelpFull/SignUp/HelpSignUp';

export default function RegisterPage() {
    return (
        <div>
            <div className='Block_Header'>
                <Outlet></Outlet>
                <HeaderBar />
            </div>

            <div>
                <h1 className='auth'>Регистрация</h1>
                <HelpSignUp />
                <p className='auth_button'>
                    Если вы уже проходили регистрацию то <Link to='/Вход'>Войдите</Link>
                </p>
            </div>

        </div>
    )
}
