import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Badge from 'react-bootstrap/Badge';
import { v4 as uuid } from "uuid";

export default function GameCommunication() {
    const [massives, setMassive] = useState([
        {
            id: uuid(),
            title: 'Общение',
            text: 'Это сеть для общение в анонимном режиме. Найди себе партнера для общения.',
            button: 'Перейти',
            img: 'https://images4.alphacoders.com/572/572749.jpg',
            href: 'https://nekto.me/audiochat#/searching',
            free: 'Бесплатная'
        },
        {
            id: uuid(),
            title: 'Чат рулетка',
            text: 'Сайт для общения, в которой вы можете общаться как анонимно так и при включенной видеокамере',
            button: 'Перейти',
            img: 'https://videochatru.com/images/og_image.png',
            href: 'https://videochatru.com/',
            free: 'Бесплатная'
        },
    ]
    );

    return (
        <div className='GameSteamFree'>
            <h1 className='GameBrauser_h1'>Общение</h1>
            <div className='GameBrauser_block'>
                {massives.map((massive, i) => (
                    <Card sx={{ maxWidth: 280 }} key={massive.id} className='GameBrauser_card'>
                        <CardActionArea >
                            <CardMedia
                                component="img"
                                height="140"
                                image={massive.img}
                                alt="green iguana"
                            />
                            <CardContent className='GameBrauser_text'>
                                <Typography gutterBottom variant="h5" component="div">
                                    {massive.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {massive.text}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className='GameSteamFree_CardActions'>
                            <Button size="small" color="primary" href={massive.href} className='GameBrauser_button' target="_blank">
                                {massive.button}
                            </Button>
                            <Badge bg="primary">
                                {massive.free}
                            </Badge>
                        </CardActions>
                    </Card>
                ))
                }
            </div >
        </div>
    )
}
