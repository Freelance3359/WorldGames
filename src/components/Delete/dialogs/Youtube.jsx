import React from 'react';
import Card from 'react-bootstrap/Card';
import DialogWrapper from './dialog_wrapper';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';


function Youtube(props) {

    return (
        <DialogWrapper
            title="Youtube"
            show={props.show}
            body={(<div>
                <Card>
                    <Card.Img className='Youtube_img' variant="top" src="https://img.freepik.com/free-vector/subscribe-button-with-bell-icon_1017-37112.jpg?w=1060&t=st=1667473623~exp=1667474223~hmac=540fe85acb7bb6f241e32e72ac675ab7c62912c0fa7cce258bd5a22d0de4da29" />
                    <Card.Body>
                        <Button className='Youtube_button' variant="outline-danger" href="https://www.youtube.com/channel/UCCWfpLssZkGN9f8RFYfvugQ"><i class="bi bi-youtube"></i> Подпишись</Button>{' '}
                        <Card.Text className='Youtube_text'>
                            Подпишись на канал Ванючки чтобы не пропускать обзоры на новые игры, а так же смотри и присоединяйся играть с нами, как мы играем все вместе на сервере WorldGames
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>)}
            onHide={props.onHide}
        />
    );
}

export default Youtube