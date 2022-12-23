import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';

function ValheimIP() {
    return (
        <Card className="Games_Figure bg-dark">
            <div >
                <Card.Img className='Games_Figure_img' src="https://media.discordapp.net/attachments/1037688122844139552/1046640558271107102/Screenshot_3.png" alt="Card image" />
            </div>
            <Card.ImgOverlay>
                <Card.Title className='Games_Valheim'><h1> Valheim </h1></Card.Title>
                <Card.Text className='Games_Valheim'>
                    Наш сервер Valheim присоединяйся и играй с нами!
                    <br />
                    На сервере представлено 88 модов!
                    <br />
                    Включать / Выключать PVP
                    <br />
                    Выбрать свой класс!
                </Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" href='https://dropmefiles.com/6LuBD'>Скачать моды</Button>
                </ButtonGroup>

                <Badge pill bg="secondary" className='Games_secondary'>
                    IP: 86.110.212.173:2456
                </Badge>{' '}

                <Badge pill bg="secondary" className='Games_secondary'>
                    Пароль: 9921123
                </Badge>{' '}

            </Card.ImgOverlay>
        </Card>
    );
}

export default ValheimIP;