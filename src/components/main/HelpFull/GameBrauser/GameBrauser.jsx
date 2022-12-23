import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Badge from 'react-bootstrap/Badge';
import { v4 as uuid } from "uuid";

export default function GameBrauser() {
    const [massives, setMassive] = useState([
        {
            id: uuid(),
            title: 'Сломаный телефон',
            text: 'Суть игры проста. В игре много режимов, один из них я вам расскажу. Вы придумываете текст например "Елка растет на дереве". Следующему участнику нужно будет нарисовать это, а вы рисуете то что придумал он.',
            button: 'Перейти',
            img: 'https://mi-tech.co.uk/wp-content/uploads/2021/06/Untitled-design-4-1.jpg',
            href: 'https://garticphone.com/ru',
            free: 'Бесплатная'
        },
        {
            id: uuid(),
            title: 'Бункер',
            text: 'В игре ты получаешь уникального персонажа, которым постараешься доказать всем, что именно ты должен попасть в бункер, чтобы спастись! Остальные игроки, пытающиеся выжить, будут доказывать обратное...',
            button: 'Перейти',
            img: 'https://avatars.mds.yandex.net/i?id=f5107681afc5a918b1eef373449e5677_l-4565320-images-thumbs&ref=rim&n=13&w=959&h=959',
            href: 'https://bunker-online.com/',
            free: 'Бесплатная'
        },
        {
            id: uuid(),
            title: 'Монополия',
            text: '«Монополия» — настольная игра в жанре экономической стратегии для двух и более человек. Цель игры — рационально используя стартовый капитал, добиться банкротства других игроков и остаться единственным.',
            button: 'Перейти',
            img: 'https://wums.ru/wp-content/uploads/2021/11/sa-6.jpg',
            href: 'https://monopoly-one.com/',
            free: 'Бесплатная'
        },
        {
            id: uuid(),
            title: 'Мем полиция',
            text: 'Можно играть парами, можно командами. Объясняющий меняется каждый ход, за минуту необходимо объяснить как можно больше слов',
            button: 'Перейти',
            img: 'https://xakep.ru/wp-content/uploads/2020/12/334415/Swatting.jpg',
            href: 'https://meme-police.ru/',
            free: 'Бесплатная'
        },
        {
            id: uuid(),
            title: 'ДжекБокс',
            text: 'Игры в серии предназначены для игр с друзьями, семьёй и на стримах (не все режимы), онлайн. Для того, чтобы играть, требуется одна копия игры.',
            button: 'Перейти',
            img: 'https://sun9-3.userapi.com/impf/nJkFvmszyyr4jd2-bEse8Fm46Exqx0xXxmU_0w/5wOUGe_5D5s.jpg?size=0x0&quality=90&proxy=1&sign=9c07face11c7a837e8ced1995cad8c1b&c_uniq_tag=0hmtCY_vECczx5HUgcGcGdMFN-mBNFUCo_alWUyQLIw&type=video_thumb',
            href: 'https://www.jackboxgames.com/what-is-jackbox/',
            free: 'Платная'
        },
        {
            id: uuid(),
            title: 'Своя игра',
            text: 'Правила «Своей Игры» достаточно просты. Перед вами есть табло из тем. Музыка, фильмы, игры, картины, спорт, книги — это может быть что угодно (даже аниме!).',
            button: 'Перейти',
            img: 'https://i.ytimg.com/vi/u9JsMYQa3HE/maxresdefault.jpg',
            href: 'https://vladimirkhil.com/si/online/',
            free: 'Бесплатная'
        },
    ]
    );

    return (
        <div className='GameBrauser'>
            <h1 className='GameBrauser_h1'>
                Браузерные игры</h1>
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

