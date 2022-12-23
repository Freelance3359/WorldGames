import React from 'react'
import { Image } from 'antd';
import { useState } from 'react';
import { v4 as uuid } from "uuid";

export default function ScreenGif() {
    const [screens, setScreen] = useState([
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049165454435958844/album_2022-09-24_01-16-16.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171694553677885/album_2022-09-24_01-33-23.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171700035637258/album_2022-09-24_21-46-40.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171707723796541/album_2022-09-24_22-00-22.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171711616094299/album_2022-09-29_23-59-46.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171716955447336/album_2022-09-30_00-27-45.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171721627914250/album_2022-09-30_00-54-27.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171726497480724/album_2022-09-30_00-54-27.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171730733740123/album_2022-09-30_01-04-52.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171734542176316/album_2022-09-30_01-06-37.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171739701153823/album_2022-09-30_19-47-36.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171768855760968/album_2022-10-17_21-21-10.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171776577478737/album_2022-10-17_21-48-47.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171781212180552/album_2022-10-17_21-50-33.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171785750413362/album_2022-10-17_21-51-23.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171789638545458/album_2022-10-18_23-45-41.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171793597976616/album_2022-10-19_00-08-04.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049171798056501258/album_2022-10-19_00-08-53.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049172580403257344/album_2022-10-16_00-56-18.gif',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/1047046814672629820/1049172580688461834/album_2022-10-16_00-57-07.gif',
        },
    ])
    return (
        <div className='ScreenshotBlock_block'>
            <h1 className='ScreenshotBlock_h1'>Скриншоты gif</h1>
            <div className='ScreenshotBlock'>
                {screens.map((screen) => (
                    <Image className='ScreenshotBlock_img'
                        width={230}
                        src={screen.image}
                    />
                ))}
            </div>
        </div>
    )
}
