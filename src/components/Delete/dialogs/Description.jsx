import React, { Component } from 'react';
import DialogWrapp from './dialog_wrapp';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


class Description extends Component {

    data = [
        {
            url: 'https://editors.dexerto.com/wp-content/uploads/2021/07/22/amazon-mmo-game-new-world.jpeg',
            badges: ['MMORPG', 'Открытый мир', 'Песочница', 'Крафтинг', 'Многопользовательская', 'Похожа на Dark Souls'],
        },
        {
            url: 'http://s01.riotpixels.net/data/04/24/04240cc5-aa25-4d86-91ac-5e183c094a84.jpg/wallpaper.madison.1920x1080.2021-08-30.7.jpg',
            badges: ['Хоррор', 'Одиночная', 'Мрачная', 'От первого лица', 'Головоломка', 'Психологический хоррор'],
        },
        {
            url: 'https://pic.rutubelist.ru/video/f5/dd/f5dd226007ecd17ea61c1a66568aef44.jpg',
            badges: ['MMO', 'Одиночная', 'Приключения', '3D', 'Природа', 'Глубокий сюжет', 'Атмосферная'],
        },
        {
            url: 'https://ixbt.online/gametech/covers/2022/04/26/nova-filepond-yTTnse.jpg',
            badges: ['MMO', 'Одиночная', 'Рим', '3D', 'Несколько концовок', 'Мифология', 'Похожа на Dark Souls', 'Глубокий сюжет'],
        },
        {
            url: 'https://cdna.artstation.com/p/assets/covers/images/022/217/288/large/juan-aguilar-thumbnail-b.jpg?1574571168',
            badges: ['Хоррор', 'Одиночная', 'Экшен', 'Глубокий сюжет', 'Приключение'],
        },
    ]

    render() {
        const props = this.props;
        return (
            <DialogWrapp
                title="Описание игр"
                show={props.show}
                body={(<div>
                    <Card className="bg-dark text-description" >
                        <Card.Img variant="top" src="https://editors.dexerto.com/wp-content/uploads/2021/07/22/amazon-mmo-game-new-world.jpeg" alt="Card image" />
                        <Card.ImgOverlay className='dialogWrapper_cardtext_button'>
                            <Button variant="dark"><i class="bi bi-book">    </i>Описание</Button><br />
                            <Badge pill bg="secondary" className='badge'>
                                MMORPG
                            </Badge>{' '}
                            <Badge pill bg="secondary" className='badge'>
                                Открытый мир
                            </Badge>{' '}
                            <Badge pill bg="secondary" className='badge'>
                                Песочница
                            </Badge>{' '}
                            <div>
                                <Badge pill bg="secondary" className='badge'>
                                    Крафтинг
                                </Badge>{' '}
                                <Badge pill bg="secondary" className='badge'>
                                    Многопользовательская
                                </Badge>{' '}
                            </div>
                            <Badge pill bg="secondary" className='badge'>
                                Похожа на Dark Souls
                            </Badge>{' '}
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-dark text-description">
                        <Card.Img variant="top" src="http://s01.riotpixels.net/data/04/24/04240cc5-aa25-4d86-91ac-5e183c094a84.jpg/wallpaper.madison.1920x1080.2021-08-30.7.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Button variant="dark"><i class="bi bi-book">    </i>Описание</Button><br />
                            <Badge pill bg="secondary" className='badge'>
                                Хоррор
                            </Badge>{' '}
                            <Badge pill bg="secondary" className='badge'>
                                Одиночная
                            </Badge>{' '}
                            <Badge pill bg="secondary" className='badge'>
                                Мрачная
                            </Badge>{' '}
                            <div>
                                <Badge pill bg="secondary" className='badge'>
                                    От первого лица
                                </Badge>{' '}
                                <Badge pill bg="secondary" className='badge'>
                                    Головоломка
                                </Badge>{' '}
                            </div>
                            <Badge pill bg="secondary" className='badge'>
                                Мрачная
                            </Badge>{' '}
                            <div>
                                <Badge pill bg="secondary" className='badge'>
                                    Психологический хоррор
                                </Badge>{' '}
                            </div>
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-dark text-description">
                        <Card.Img variant="top" src="https://pic.rutubelist.ru/video/f5/dd/f5dd226007ecd17ea61c1a66568aef44.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Button variant="dark"><i class="bi bi-book">    </i>Описание</Button><br />
                            <Badge pill bg="secondary" className='badge'>
                                MMO
                            </Badge>{' '}
                            <Badge pill bg="secondary" className='badge'>
                                Одиночная
                            </Badge>{' '}
                            <Badge pill bg="secondary" className='badge'>
                                Приключения
                            </Badge>{' '}
                            <Badge pill bg="secondary" className='badge'>
                                3D
                            </Badge>{' '}
                            <div>
                                <Badge pill bg="secondary" className='badge'>
                                    Природа
                                </Badge>{' '}
                                <Badge pill bg="secondary" className='badge'>
                                    Глубокий сюжет
                                </Badge>{' '}
                            </div>
                            <Badge pill bg="secondary" className='badge'>
                                Атмосферная
                            </Badge>{' '}
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-dark text-description">
                        <Card.Img variant="top" src="https://ixbt.online/gametech/covers/2022/04/26/nova-filepond-yTTnse.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Button variant="dark"><i class="bi bi-book">    </i>Описание</Button><br />
                            <Badge pill bg="secondary" className='badge'>
                                MMO
                            </Badge>{' '}
                            <Badge pill bg="secondary" className='badge'>
                                Одиночная
                            </Badge>{' '}
                            <Badge pill bg="secondary" className='badge'>
                                Рим
                            </Badge>{' '}
                            <Badge pill bg="secondary" className='badge'>
                                3D
                            </Badge>{' '}
                            <div>
                                <Badge pill bg="secondary" className='badge'>
                                    Несколько концовок
                                </Badge>{' '}
                                <Badge pill bg="secondary" className='badge'>
                                    Мифология
                                </Badge>{' '}
                            </div>
                            <Badge pill bg="secondary" className='badge'>
                                Похожа на Dark Souls
                            </Badge>{' '}
                            <div>
                                <Badge pill bg="secondary" className='badge'>
                                    Глубокий сюжет
                                </Badge>{' '}
                            </div>
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-dark text-description">
                        <Card.Img variant="top" src="https://cdna.artstation.com/p/assets/covers/images/022/217/288/large/juan-aguilar-thumbnail-b.jpg?1574571168" alt="Card image" />
                        <Card.ImgOverlay>
                            <Button variant="dark"><i class="bi bi-book">    </i>Описание</Button><br />
                            <Badge pill bg="secondary" className='badge'>
                                Хоррор
                            </Badge>{' '}
                            <Badge pill bg="secondary" className='badge'>
                                Одиночная
                            </Badge>{' '}
                            <div>
                                <Badge pill bg="secondary" className='badge'>
                                    Экшен
                                </Badge>{' '}
                                <Badge pill bg="secondary" className='badge'>
                                    Открытый мир
                                </Badge>{' '}
                            </div>
                            <Badge pill bg="secondary" className='badge'>
                                Глубокий сюжет
                            </Badge>{' '}
                            <div>
                                <Badge pill bg="secondary" className='badge'>
                                    Приключение
                                </Badge>{' '}
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </div>)}
                onHide={props.onHide}
            />
        )
    }
}

export default Description