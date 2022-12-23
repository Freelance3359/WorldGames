import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const HelpRegister = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className='container'>
            <form>

                <div className="group">
                    <input type="email" required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>
                </div >

                <div className="group">
                    <input type="password" required
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Пароль</label>
                </div >

            </form>

            <br />
            <Button variant="outline-dark" onClick={() => handleClick(email, pass)}>
                {title}
            </Button>
        </div>
    )
}

export { HelpRegister }