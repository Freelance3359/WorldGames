import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Badge from 'react-bootstrap/Badge';
import { v4 as uuid } from "uuid";

export default function GameSteamFree() {
    const [massives, setMassive] = useState([
        {
            id: uuid(),
            title: 'Саспектс',
            text: 'Suspects - это игра на выживание, в которой вы становитесь либо гостем, либо убийцей. Задача гостя - определить всех убийц и проголосовать против них. Задача убийцы - устранить всех гостей, необходимые для победы.',
            button: 'Перейти',
            img: 'https://android-phones.ru/wp-content/uploads/2021/12/maxresdefault.jpg',
            href: 'https://www.bluestacks.com/ru/apps/action/suspects-mystery-mansion-on-pc.html',
            free: 'Платная'
        },
        {
            id: uuid(),
            title: 'Пико парк',
            text: 'Игра-головоломка с элементами экшена. Поддерживается как одиночный, так и многопользовательский режим, где участники взаимодействуют между собой для решения общих задач и трудностей.',
            button: 'Перейти',
            img: 'https://i.ytimg.com/vi/_JEeGDuTttA/maxresdefault.jpg',
            href: 'https://store.steampowered.com/app/1509960/PICO_PARK/',
            free: 'Платная'
        },
        {
            id: uuid(),
            title: 'Гусь гусь дак',
            text: 'Это ролевой экшен в жанре социальной дедукции ,  где шумная группа гусей пытается выявить в своих рядах шпионов и замаскированных кряков, и изгнать уток из своих пернатых рядов . Утята к бою!',
            button: 'Перейти',
            img: 'https://volsiz.ru/wp-content/uploads/2021/10/goose-goose-duck.jpg',
            href: 'https://store.steampowered.com/app/1568590/Goose_Goose_Duck/',
            free: 'Бесплатно'
        },
        {
            id: uuid(),
            title: 'Фазмафобия',
            text: 'Phasmophobia — это психологический онлайн-хоррор для четырёх игроков, в котором вы и члены вашей команды исследователи паранормальных явлений попадете в локации, и собираете доказательства.',
            button: 'Перейти',
            img: 'https://pic.rutubelist.ru/video/cd/33/cd3340e01d5d3f13bdc09aa04afb2ed3.jpg',
            href: 'https://store.steampowered.com/app/739630/Phasmophobia/',
            free: 'Платная'
        },
        {
            id: uuid(),
            title: 'Гост вотчерс',
            text: 'GhostWatchers — это психологический онлайн-хоррор для четырёх игроков, в котором вы и члены вашей команды исследователи паранормальных явлений попадете в локации, и собираете доказательства.',
            button: 'Перейти',
            img: 'https://i.ytimg.com/vi/j7DqsaLraqM/maxresdefault.jpg?7857057827',
            href: 'https://store.steampowered.com/app/1850740/Ghost_Watchers/',
            free: 'Платная'
        },
        {
            id: uuid(),
            title: 'Вич ит',
            text: 'Witch It — игра в прятки по сети. Ведьмы прячутся, отважные охотники их ищут, а вокруг царит веселье и волшебство. Прячьтесь и охотьтесь в полном красок и волшебства. В миреЧего только нет в мире Witch It',
            button: 'Перейти',
            img: 'https://gametrex.com/wp-content/uploads/2019/02/Witch-It-Free-Download.png',
            href: 'https://store.steampowered.com/app/559650/Witch_It/',
            free: 'Платная'
        },
        {
            id: uuid(),
            title: 'З мортуари асистент',
            text: 'The Mortuary Assistant — приключенческий хоррор с элементами исследования и демонами. Получив степень в области моргов, вам предстоит отгадать в ком находится демон, не совершите ошибку!',
            button: 'Перейти',
            img: 'https://pic.rutubelist.ru/video/fa/a9/faa96fe187ab6bfad05c60df179b2e3a.jpg',
            href: 'https://store.steampowered.com/app/1295920/The_Mortuary_Assistant/',
            free: 'Платная'
        },
        {
            id: uuid(),
            title: 'Арк',
            text: 'Будучи выброшенным голым на берег таинственного острова вам придется заниматься ремеслом, строительством. Используйте опыт и ловкость, чтобы приручать, разводить и ездить на первобытных существах, живущих в ARK',
            button: 'Перейти',
            img: 'https://i.playground.ru/p/yVPJULMkwv026NZOFcowEw.jpeg',
            href: 'https://store.steampowered.com/app/346110/ARK_Survival_Evolved/',
            free: 'Платная'
        },
        {
            id: uuid(),
            title: 'В райсинг',
            text: 'V Rising — это одновременно симулятор строительства и выживания в открытом мире. Игрок начинает как только что возродившийся вампир. Ему нужно собирать материалы чтобы построить свой собственный замок.',
            button: 'Перейти',
            img: 'https://i.playground.ru/e/_oVYnfc5DTnC61UydnAmng.png',
            href: 'https://store.steampowered.com/app/1604030/V_Rising/',
            free: 'Платная'
        },
        {
            id: uuid(),
            title: 'Нью ворлд',
            text: 'New World была анонсирована в 2016 году Amazon Game Studios вместе с двумя другими играми: Breakaway и Crucible. Из них только New World дожила до релиза. Это массовая онлайновая ролевая игра в сеттинге колонизации Америки',
            button: 'Перейти',
            img: 'https://i.playground.ru/e/vgwNa5vDAOgqp9usupgxoQ.jpeg',
            href: 'https://store.steampowered.com/app/1063730/New_World/',
            free: 'Платная'
        },
        {
            id: uuid(),
            title: 'Валхейм',
            text: 'Valheim — это экшен-песочница с элементами выживания, события которой происходят в одном из миров нордической мифологии, куда попадают павшие викинги Задача игрока — бороться со злом, угрожающему этому измерению.',
            button: 'Перейти',
            img: 'https://i.playground.ru/p/1DGOdmue2GVHZrVFpeJb6Q.jpeg',
            href: 'https://store.steampowered.com/app/892970/Valheim/',
            free: 'Платная'
        },
        {
            id: uuid(),
            title: 'Висаж',
            text: 'Visage — приключенческий хоррор, вдохновленный творением Хидэо Кодзимы (Hideo Kojima) – P.T. Основные действия игры происходят в 80-ых годах прошлого столетия, в котором погибло большое количество семей',
            button: 'Перейти',
            img: 'https://newxboxone.ru/wp-content/uploads/2021/10/wccfvisage1-1480x833-1.jpg',
            href: 'https://store.steampowered.com/app/594330/Visage/',
            free: 'Платная'
        },
    ]
    );

    return (
        <div className='GameSteamFree'>
            <h1 className='GameBrauser_h1'>Топ Steam игры</h1>
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
