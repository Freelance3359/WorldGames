import React from 'react'
import Center from './Center'

export default function CenterBlockC() {
    return (
        <div>
            <Center
                name='Игры'
                classblock="card_center"
                img='https://media.discordapp.net/attachments/1040339078916362280/1043298672651284581/unknown555-transformed.png?width=683&height=683'
                icon='https://media.discordapp.net/attachments/1037688122844139552/1044769842043043950/unknown.png'
                i='bi bi-bookmark-check-fill'
                classicon='card_center_center_img center_center_img'
                imgClass="front_img_mini"
                backText1='Игры'
                backText2='MMO'
                backText3='Гонки'
                backText4='Браузерные'
                backText5='Какие выберешь ты?'
                backImg='https://media.discordapp.net/attachments/1037688122844139552/1046627775118839839/Screenshot_2-eeTa0d5TJ-transformed.png'
                backImgFront='front_back_img_Front'
                backNumber1='bi bi-1-circle'
                backNumber2='bi bi-2-circle'
                backNumber3='bi bi-3-circle'
                backNumber4='bi bi-4-circle'
            >
            </Center>
        </div>
    )
}

