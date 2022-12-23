import React from 'react'
import { HelpRegister } from '../Register/HelpRegister';
import { useDispatch } from 'react-redux'
import { setUser } from '../../../../Store/slices/slices';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then()
            .catch()
    }

    return (
        <div>
            <HelpRegister
                title="Войдите"
                handleClick={handleLogin}
            >
            </HelpRegister>
        </div>
    )
}

export { Login }
