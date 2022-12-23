import React from 'react'
import { Image } from 'antd';
import { useState } from 'react';
import { v4 as uuid } from "uuid";

export default function ScreenshotBlock() {
    const [screens, setScreen] = useState([
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1048908443823636551/Screenshot_20221204_132652.jpg?width=1440&height=665',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1048017839119937669/image.png?width=769&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1046646139312685168/unknown.png?width=847&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1046646173898919946/unknown.png?width=815&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1045526303622823992/image.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1039985167038697492/image.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1031640677454454964/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1031640181079539752/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1031639908529475584/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1031639526667456642/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1031634348216160296/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1031634147791339591/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1031634019072356462/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1031633256208146532/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1031632912304582656/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1024086166137491476/unknown.png?width=1133&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1023684044682170429/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1022983115800588408/unknown.png?width=1226&height=683',
        }, {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/1010961469338296442/unknown.png?width=1440&height=578',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/994389854240641114/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/993300591155609631/unknown.png?width=1248&height=683',
        },

        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/992944508427829429/unknown.png',
        },

        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/992944427905597511/unknown.png?width=1050&height=683',
        },

        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/986695237277737001/unknown.png',
        },

        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/985285329332367460/unknown.png?width=1056&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/985284105807749120/unknown.png?width=1125&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/972981811154153532/unknown.png?width=1138&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/968130698621894697/unknown.png?width=1182&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/963605311380406282/unknown.png?width=1133&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/962527532807245824/unknown.png?width=602&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/959960063445970994/unknown.png?width=1024&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/959959989861117983/unknown.png?width=587&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/953231992617590784/unknown.png?width=1017&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/951234812927160320/unknown.png?width=1150&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/951225328506896475/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/943994515591688202/unknown.png',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/932721982322139206/unknown.png?width=1054&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/926558733130170418/unknown.png?width=553&height=683',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/924776435208572959/unknown.png?width=1440&height=677',
        },
        {
            id: uuid(),
            image: 'https://media.discordapp.net/attachments/906271569024811059/915312262330327140/unknown.png?width=1214&height=683',
        },
    ])
    return (
        <div className='ScreenshotBlock_block'>
            <h1 className='ScreenshotBlock_h1'>Скриншоты</h1>
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
