import React from 'react'
import Center from './Center'

export default function CenterBlockA() {
    return (
        <div>
            <Center
                name='Кино'
                classblock="card_center"
                img='https://media.discordapp.net/attachments/1037688122844139552/1045558739886940220/Screenshot_6-transformed.png?width=535&height=683'
                icon='https://media.discordapp.net/attachments/1037688122844139552/1044769775315857499/unknown.png'
                i='bi bi-bookmark-check-fill'
                classicon='card_center_center_img center_center_img'
                imgClass="front_img_mini"
                backText1='Кино'
                backText2='Боевики'
                backText3='Комедии'
                backText4='Мелодрамма'
                backText5='Какие смотришь ты?'
                backImg='https://media.discordapp.net/attachments/1037688122844139552/1046627774800080916/Screenshot_1-ssGyTltyr-transformed.png?width=639&height=683'
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
