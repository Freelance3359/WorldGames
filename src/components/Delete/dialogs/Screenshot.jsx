import React from 'react';
import DialogWrapp from './dialog_wrapp';
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';


function Screenshot(props) {

    return (
        <DialogWrapp
            title="Скриншоты с различных игр"
            show={props.show}
            body={(<div>

                {/* 1 */}
                <CardGroup className='cardGroup_card_img'>
                    <Card className='cardGroup_card_img_block'>
                        <img className='DialogWrapp_screenshot_img' src="https://media.discordapp.net/attachments/1037688122844139552/1043324019459493929/Screenshot_4-pVhipdICE-transformed.png" alt="" />
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/992944508427829429/unknown.png" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Friday the 13th</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/985284105807749120/unknown.png?width=1125&height=683" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Phasmophobia</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/993300591155609631/unknown.png?width=1248&height=683" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Friday the 13th</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>

                {/* 2 */}
                <CardGroup className='cardGroup_card_img'>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/985285329332367460/unknown.png?width=1056&height=683" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Phasmophobia</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/992944427905597511/unknown.png?width=1050&height=683" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Friday the 13th</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/959960063445970994/unknown.png?width=1024&height=683" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Phasmophobia</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>

                {/* 3 */}
                <CardGroup className='cardGroup_card_img'>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/953231992617590784/unknown.png?width=1017&height=683" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>New World</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/951234812927160320/unknown.png?width=1150&height=683" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>GTA 5 RP</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/1031640181079539752/unknown.png" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Garctic Phone</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>

                {/* 4 */}
                <CardGroup className='cardGroup_card_img'>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/1022983115800588408/unknown.png?width=1226&height=683" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Bunker</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/994389854240641114/unknown.png" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Hearthstone</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/972981811154153532/unknown.png?width=1138&height=683" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>DreadHunger</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>

                {/* 5 */}
                <CardGroup className='cardGroup_card_img'>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/1031640677454454964/unknown.png" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Garctic Phone</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/1031634348216160296/unknown.png" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Garctic Phone</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/1031633256208146532/unknown.png" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Garctic Phone</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>

                {/* 6 */}
                <CardGroup className='cardGroup_card_img'>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/1010961469338296442/unknown.png?width=1440&height=578" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Своя игра</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/1026206134392082643/unknown.png" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Hearthstone</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='cardGroup_card_img_block'>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/906271569024811059/1026571741960617984/unknown.png" className='card-img' />
                        <Card.Body>
                            <Card.Title className='cardGroup_card_img_text'><i class="bi bi-controller">   </i>Visage</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>)}
            onHide={props.onHide}
        />
    );
}

export default Screenshot