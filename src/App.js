import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Main from './components/main/Routers/Main/Main';
import { Routes, Route } from 'react-router-dom';
import Discord from './components/main/Routers/Discord/Discord';
import ScreenShot from './components/main/Routers/ScreenShot/ScreenShot'
import Youtube from './components/main/Routers/Youtube/Youtube'
import Minecraft from './components/main/Routers/Minecraft/Minecraft'
import Valheim from './components/main/Routers/Valheim/Valheim'
import Games from './components/main/Routers/Games/Games'
import NotFould from './components/main/Routers/NotFould/NotFould';
import RegisterPage from './components/main/Routers/RegisterPage/RegisterPage'
import LoginPage from './components/main/Routers/LoginPage/LoginPage'


const App = () => {

    return (
        <div className='app_fon'>

            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Box className="App_box">

                        <Routes>
                            <Route path='Главная' element={<Main />}></Route>
                            <Route path='Игры' element={<Games />}></Route>
                            <Route path='Дискорд' element={<Discord />}></Route>
                            <Route path='Майнкрафт' element={<Minecraft />}></Route>
                            <Route path='Скриншоты' element={<ScreenShot />}></Route>
                            <Route path='Валхейм' element={<Valheim />}></Route>
                            <Route path='Видео' element={<Youtube />}></Route>
                            <Route path='Вход' element={<LoginPage />}></Route>
                            <Route path='Регистрация' element={<RegisterPage />}></Route>
                            <Route path='*' element={<NotFould />}></Route>
                        </Routes>

                    </Box>
                </Container>
            </React.Fragment>
        </div>


    );
}

export default App;