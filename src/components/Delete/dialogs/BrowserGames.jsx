import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import DialogWrapper from './dialog_wrapper';
import GameDescription from '../helpfull.jsx/GameDescription';
import HoverRating from '../helpfull.jsx/Rating';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import chunk from '../utils/chunk.js';
import "bootstrap/dist/css/bootstrap.min.css";

class BrowserGames extends Component {

    data = [
        {
            gameTitle: 'Сломаный телефон',
            url: 'https://garticphone.com/ru',
            imgUrl: 'https://www.telegramitalia.it/wp-content/uploads/2021/10/IMG_20211022_090929_433.jpg',
            description: 'Суть игры проста. В игре много режимов, один из них я вам расскажу. Вы придумываете текст например "Елка растет на дереве". Следующему участнику нужно будет нарисовать это, а вы рисуете то что придумал он.'
        },
        {
            gameTitle: 'Мем полиция',
            url: 'https://meme-police.ru/',
            imgUrl: 'https://s.tcdn.co/ab3/206/ab3206b5-83bd-3553-bf6f-1a1572e744ec/16.png',
            description: 'За основу игры взяты Шляпа и Alias. Можно играть парами, можно командами. Объясняющий меняется каждый ход, за минуту необходимо объяснить как можно больше слов, каждое отгаданное слово даёт одно очко команде. В конце каждого раунда игроки вручную выставляют очки по каждому слову, так что правила засчитывания слов могут быть произвольными.'
        },
        {
            gameTitle: 'Бункер',
            url: 'https://bunker-online.com/',
            imgUrl: 'https://avatars.mds.yandex.net/i?id=f5107681afc5a918b1eef373449e5677_l-4565320-images-thumbs&ref=rim&n=13&w=959&h=959',
            description: 'В игре ты получаешь уникального персонажа, которым постараешься доказать всем, что именно ты должен попасть в бункер, чтобы спастись! Ты должен быть готов к любым препятствиям. Остальные игроки, пытающиеся выжить, будут доказывать обратное...'
        },
        {
            gameTitle: 'Монополия',
            url: 'https://monopoly-one.com/',
            imgUrl: 'https://wums.ru/wp-content/uploads/2021/11/sa-6.jpg',
            description: '«Монополия» — настольная игра в жанре экономической стратегии для двух и более человек. Цель игры — рационально используя стартовый капитал, добиться банкротства других игроков. Фактически «Монополия» представляет собой игровое поле, состоящее из квадратов, которые проходят по кругу все игроки по очереди. Квадраты разделяются на активы (предприятие, ценная вещь) и события. Когда игроку выпадает очередь ходить, то броском кубика он определяет, какое количество шагов он должен совершить на игровом поле за этот ход (каждый шаг соответствует одному очку на кубике и одному квадрату на игровом поле).'
        },
        {
            gameTitle: 'ДжекБокс',
            url: 'https://www.jackboxgames.com/what-is-jackbox/',
            imgUrl: 'https://sun9-3.userapi.com/impf/nJkFvmszyyr4jd2-bEse8Fm46Exqx0xXxmU_0w/5wOUGe_5D5s.jpg?size=0x0&quality=90&proxy=1&sign=9c07face11c7a837e8ced1995cad8c1b&c_uniq_tag=0hmtCY_vECczx5HUgcGcGdMFN-mBNFUCo_alWUyQLIw&type=video_thumb',
            description: 'Игры в серии предназначены для игр с друзьями, семьёй и на стримах (не все режимы), онлайн. Для того, чтобы играть, требуется одна копия игры. Остальным игрокам достаточно видеть экран игры и подключиться с их мобильных устройств или компьютеров через специальный сайт. В большинстве игр максимальное количество игроков – 8 (есть исключения), но остальные могут подключиться к зрителям (начиная с Party Pack 2) и влиять на ход игры.'
        },
        {
            gameTitle: 'Шпион',
            url: 'https://meme-police.ru/bg/spyfall#ntky2',
            imgUrl: 'https://webpulse.imgsmail.ru/imgpreview?key=pulse_cabinet-image-06b8d3ab-03e8-42b3-81e0-a73432e1c34d&mb=webpulse',
            description: 'Суть игры проста. В игре много режимов, один из них я вам расскажу. Вы придумываете текст например "Елка растет на дереве". Следующему участнику нужно будет нарисовать это, а вы рисуете то что придумал он.'
        },
        {
            gameTitle: 'Своя игра',
            url: 'https://vladimirkhil.com/si/online/',
            imgUrl: 'https://i.ytimg.com/vi/u9JsMYQa3HE/maxresdefault.jpg',
            description: 'Правила «Своей Игры» достаточно просты. Перед вами есть табло из тем. Музыка, фильмы, игры, картины, спорт, книги — это может быть что угодно (даже аниме!). В каждой категории есть несколько вопросов, которые, обычно, отличаются ценой. Ну вы знаете, вот эти вот «Юмор за 200», «фильмы за 400», эта штука пошла именно из «Свояка».От цены зависит сложность вопроса. Чем больше стоимость — тем труднее будет задачка.'
        },
        {
            gameTitle: 'Саспектс',
            url: 'https://www.bluestacks.com/ru/apps/action/suspects-mystery-mansion-on-pc.html',
            imgUrl: 'https://android-phones.ru/wp-content/uploads/2021/12/maxresdefault.jpg',
            description: 'Suspects - это игра на выживание, в которой вы становитесь либо гостем, либо убийцей. Задача гостя - определить всех убийц и проголосовать против них. Задача убийцы - устранить всех гостей и помешать им выполнить задачи, необходимые для победы.'
        },
        {
            gameTitle: 'Пико парк',
            url: 'https://freetp.org/po-seti/4857-pico-park-igra-po-seti-besplatno-onlayn-lan.html',
            imgUrl: 'https://i.ytimg.com/vi/_JEeGDuTttA/maxresdefault.jpg',
            description: 'Игра-головоломка с элементами экшена. Поддерживается как одиночный, так и многопользовательский режим, где участники взаимодействуют между собой для решения общих задач и трудностей. Доступно 3 уровня сложности, кардинально влияющие на игровой процесс: мировой, бесконечный и битва.'
        },
        {
            gameTitle: 'Гусь гусь дак',
            url: 'https://store.steampowered.com/app/1568590/Goose_Goose_Duck/',
            imgUrl: 'https://store.steampowered.com/app/1568590/Goose_Goose_Duck/',
            description: 'Это ролевой экшен в жанре социальной дедукции, где шумная группа гусей пытается выявить в своих рядах шпионов и замаскированных кряков, и изгнать уток из своих пернатых рядов. Гусям выдается ряд последовательных командных заданий, а замаскированные утки должны всячески вредить им и устраивать саботаж.'
        },
        {
            gameTitle: 'Общение',
            url: 'https://nekto.me/audiochat#/searching',
            imgUrl: 'https://images4.alphacoders.com/572/572749.jpg',
            description: 'Это сеть для общение в анонимном режиме. Найди себе партнера для общения.'
        },
        {
            gameTitle: 'Чат рулетка',
            url: 'https://videochatru.com/',
            imgUrl: 'https://videochatru.com/images/og_image.png',
            description: 'Сайт для общения, в которой вы можете общаться как анонимно так и при включенной видеокамере'
        },
    ];

    render() {
        const props = this.props;
        const chunkedData = chunk(this.data, 3);
        return (
            <DialogWrapper className='BrowserGames_DialogWrapper'
                title='Браузерные игры'
                show={props.show}
                body={(<>
                    {chunkedData.map((e, i) =>
                        <div className='BrowserGames_flex'>
                            {e.map((item, ix) =>
                                <div className='BrowserGames_card_block'>
                                    <Card style={{ width: '14.5rem' }}>
                                        <Card.Img variant="top" src={item.imgUrl} className='BrowserGames_img' />
                                        <Card.Body>

                                            <div className='BrowserGames_card'>
                                                <Card.Title>{item.gameTitle}</Card.Title>
                                            </div>
                                            <GameDescription value={item.description} />
                                            <div className='BrowserGames_flex_button'>

                                                <ListItem button component="a" href={item.url} target="_blank">
                                                    <i class="bi bi-arrow-right-square">&ensp;</i>
                                                    <ListItemText primary="Переход на сайт" />
                                                </ListItem>
                                                <Divider light />
                                            </div>
                                            <br />
                                            <div className='BrowserGames_flex_button'>
                                                <HoverRating />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )}
                        </div>
                    )}
                </>)}
                footer={(
                    <div className='BrowserGames_flex_button_footer'>
                        <ListItem button onClick={props.onHide}>
                            <ListItemText primary="Закрыть" />
                        </ListItem>
                        <Divider light />
                    </div>
                )}
                onHide={props.onHide}
            />
        )
    }
}

export default BrowserGames