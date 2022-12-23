import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { HelpRegister } from '../Register/HelpRegister';
import { setUser } from '../../../../Store/slices/slices';


const HelpSignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then()
        // .then(({ user }) => {
        //     console.log(user);
        //     dispatch(setUser({
        //         email: user.email,
        //         id: user.uid,
        //         token: user.accessToken,
        //     }));
        navigate("/Главная")
            // })
            .catch()
    }

    return (
        <div>
            <HelpRegister
                title="Зарегестрироваться"
                handleClick={handleRegister}
            >
            </HelpRegister>
        </div>
    )
}

export { HelpSignUp }