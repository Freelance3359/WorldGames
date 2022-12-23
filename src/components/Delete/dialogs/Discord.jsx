import React from 'react';
import Card from 'react-bootstrap/Card';
import DialogWrapper from './dialog_wrapper';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Divider from '@mui/material/Divider';
import '../style/main-style.css'

function Discord(props) {

    return (
        <DialogWrapper
            title="Discord WorldGames"
            show={props.show}
            body={(<div>
                <Card>
                    <iframe src="https://discord.com/widget?id=906267280986472499&theme=dark" width="100%" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    <Card.Body>
                        <Card.Text>
                            <i class="bi bi-arrow-up-circle-fill" title='Информация написана выше'>  </i>
                            Добро пожаловать дорогой путник! Это наш Discord сервер, присоединяйся и играй с нами в различные игры, общайся, доминируй, буль!
                        </Card.Text>
                        <Divider className='divider' />
                        <br />
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612287251_86-p-graficheskii-fon-fioletovii-123.jpg"
                                    alt="First slide"

                                />
                                <Carousel.Caption className='Carousel_center'>
                                    <h3> <i class="bi bi-patch-exclamation-fill">  </i>Основатель</h3>
                                    <p className='Carousel_text'>Имеет все возможности сервера.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://catherineasquithgallery.com/uploads/posts/2021-12/1639714792_3-catherineasquithgallery-com-p-fon-rozovo-oranzhevii-gradient-3.jpg"
                                    alt="Second slide"
                                />
                                <Carousel.Caption className='Carousel_center_c2'>
                                    <h3><i class="bi bi-person-lines-fill">  </i>Администрация</h3>
                                    <p className='Carousel_text'>Имеет большое кол-во возможностей и команд, <br /> а так же следят за порядком и конкурсами.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://img.wallpapersafari.com/desktop/1440/900/39/20/nlDeVE.jpg"
                                    alt="Third slide"

                                />
                                <Carousel.Caption className='Carousel_center_c3'>
                                    <h3><i class="bi bi-reddit">  </i>Семейство пупсиков</h3>
                                    <p className='Carousel_text'>
                                        Имеет все возможности что [Игрок] так же красивый ник и актив. <br /> Имеет возможность использовать .everyone. <br /> Приоритетный режим в голосовом чате.<br />Создавать и редактировать события!
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 "
                                    src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612697663_144-p-zeleno-zheltii-gradient-fon-167.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption className='Carousel_center_c4'>
                                    <h3><i class="bi bi-robot">  </i>Игрок</h3>
                                    <p className='Carousel_text'>
                                        Это игроки прибывшие на сервер которым дали первую роль.<br /> Имеет ряд стандартных команд стикеры, гифки все доступно.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://умный-инвестор.рф/wp-content/uploads/2019/07/bg-abstract-white.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption className='Carousel_center_c5'>
                                    <h3><i class="bi bi-question-octagon"> </i>Нет роли</h3>
                                    <p className='Carousel_text'>
                                        Это игроки прибывшие на сервер которым еще не дали роль.<br /> Почти не имеет никакие возможности.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <br />
                        <Card.Text>
                            <i class="bi bi-arrow-up-circle-fill" title='Информация написана выше'>  </i>
                            Немного о ролях на нашем Discord сервере.
                        </Card.Text>
                        <Divider className='divider' />
                        <br />

                        <h3><i class="bi bi-person-lines-fill">  </i>Администрация</h3>
                        <ListGroup>
                            <ListGroup.Item action variant="danger">
                                <b>/kick</b> ~ Кикает участника. Первым параметром указывается участник, вторым — причина кика
                            </ListGroup.Item>
                            <ListGroup.Item action variant="danger">
                                <b>/ban</b> ~ Банит участника. Первым параметром указывается участник, вторым — причина бана
                            </ListGroup.Item>
                            <ListGroup.Item action variant="danger">
                                <b>/mute</b> ~ Мутит участника. Первым параметром указывается участник, вторым — причина мута
                            </ListGroup.Item>
                            <ListGroup.Item action variant="danger">
                                <b>/warn</b> ~ Выдаёт предупреждение участнику. Первым параметром указывается участник, вторым — нарушение
                            </ListGroup.Item>
                            <ListGroup.Item action variant="danger">
                                <b>/user-info</b> ~ Выдаёт информацию об участнике. Единственным параметром указывается участник
                            </ListGroup.Item>
                            <ListGroup.Item action variant="danger">
                                <b>/infractions</b> ~ Показывает количество нарушений участника. Единственным параметром указывается участник
                            </ListGroup.Item>
                            <ListGroup.Item action variant="danger">
                                <b>/tempban</b> ~ Банит участника на определённый срок. Первым параметром указывается участник, вторым — срок, третьим — причина бана
                            </ListGroup.Item>
                            <ListGroup.Item action variant="danger">
                                <b>/role-info</b> ~ Выдаёт информацию о роли. Единственным параметром указывается роль
                            </ListGroup.Item>

                            <br />

                            <h3><i class="bi bi-reddit">  </i>Семейство пупсиков</h3>
                            <ListGroup.Item action variant="info">
                                <b>@everyone</b> ~ тэгнуть всех участников
                            </ListGroup.Item>

                            <br />

                            <h3><i class="bi bi-robot">  </i>Игрок</h3>
                            <ListGroup.Item action variant="success">
                                <b>/like</b> ~ Лайкнуть сервера
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success">
                                <b>/info</b> ~ Информация о сервере
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success">
                                <b>/help</b> ~ Информация о командах
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success">
                                <b>/poll create</b> ~ Создайте опрос
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success">
                                <b>/poll results</b> ~ Просмотр результатов опроса и рейтингов
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success">
                                <b>/coins</b> ~ Посмотреть ваш баланс
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success">
                                <b>/daily</b> ~ Дать денег игроку
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success">
                                <b>/play</b> ~ Включить музыку
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success">
                                <b>/stop</b> ~ Остановить музыку
                            </ListGroup.Item>
                        </ListGroup>
                        <br />

                        <Card.Text>
                            <i class="bi bi-arrow-up-circle-fill" title='Информация написана выше'>  </i>
                            Основные команды Discord сервера.
                        </Card.Text>
                        <Divider className='divider' />
                    </Card.Body>
                </Card>
            </div>)}
            onHide={props.onHide}
        />
    );
}

export default Discord