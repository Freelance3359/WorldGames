import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function News() {


    return (
        <div className='News'>
            <Carousel slide={false} className='Tr_block_img'>
                <Carousel.Item className='News_Carousel'>
                    <img
                        className="d-block w-100"
                        src="https://media.discordapp.net/attachments/1047046814672629820/1054459333536125028/image.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className='News_Carousel_Caption'>
                        <div className='News_Carousel_Caption_paragraf'>
                            <h3 className='News_Carousel_Caption_h3'>Valheim</h3>
                            <p className='News_Carousel_Caption_text'>Играй на нашем сервере Valheim <br />Сервер работает 24/7<br />Веселись и общайся!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item className='News_Carousel'>
                    <img
                        className="d-block w-100"
                        src="https://media.discordapp.net/attachments/1047046814672629820/1054470787920306206/detailed-gamer-room-illustration_23-2148923561.png?width=1366&height=683"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='News_Carousel_Caption'>
                        <div className='News_Carousel_Caption_paragraf_1'>
                            <h1>Версия сайта 1.3
                                <br />
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item className='News_Carousel'>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/premium-photo/discord-banner-logo-collapse-with-mockup_665513-177.jpg?size=626&ext=jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='News_Carousel_Caption'>
                        <h1 className='News_h1'>
                            Вступай к нам в Discord!
                        </h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='Tr_stick'></div>
        </div>
    )
}
export default News
