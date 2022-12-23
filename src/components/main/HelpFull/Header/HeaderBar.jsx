import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
    return (
        < div className='HeaderBar_block'>


            <div className='HeaderBar_media_button'>
                <ListItem button variant="primary" component={Link} to="/Главная">
                    <ListItemText primary="Главная" className='text_p' />
                </ListItem>
            </div>

            <div className='HeaderBar_media_button'>
                <ListItem button variant="primary" component={Link} to="/Игры" >
                    <ListItemText primary="Игры" className='text_p' />
                </ListItem>
            </div>


            <div className='HeaderBar_media_button'>
                <ListItem button variant="primary" component={Link} to="/Дискорд" >
                    <ListItemText primary="Discord" className='text_p' />
                </ListItem>
            </div>

            <div className='HeaderBar_media_button'>
                <ListItem button variant="primary" component={Link} to="/Видео" >
                    <ListItemText primary="Youtube" className='text_p' />
                </ListItem>
            </div>


            <div className='HeaderBar_media_button'>
                <ListItem button variant="primary" component={Link} to="/Валхейм" >
                    <ListItemText primary="Valheim" className='text_p' />
                </ListItem>
            </div>

            <div className='HeaderBar_media_button'>
                <ListItem button variant="primary" component={Link} to="/Майнкрафт" >
                    <ListItemText primary="Minecraft" className='text_p' />
                </ListItem>
            </div>


            <div className='HeaderBar_media_button'>
                <ListItem button variant="primary" component={Link} to="/Скриншоты" >
                    <ListItemText primary="Скриншоты" className='text_p' />
                </ListItem>
            </div>

            <div className='HeaderBar_media_button'>
                <ListItem button variant="primary" component={Link} to="/Вход" >
                    <ListItemText primary="Вход" className='text_p' />
                </ListItem>
            </div>

            <div className='HeaderBar_media_button'>
                <ListItem button variant="primary" component={Link} to="/Регистрация" >
                    <ListItemText primary="Регистрация" className='text_p' />
                </ListItem>
            </div>

        </div>
    )
}

export default HeaderBar
