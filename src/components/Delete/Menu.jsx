// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BrowserRouter } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom';
// import BrowserGames from '../dialogs/BrowserGames';
// import Youtube from '../dialogs/Youtube';
// import Discord from '../dialogs/Discord';
// import Screenshot from '../dialogs/Screenshot';
// import Description from '../dialogs/Description';
// import Avatar from '@mui/material/Avatar';


// const Menu = () => {
//     const [modalShow, setModalShow] = React.useState(false);
//     const [show, setShow] = useState(false);

//     return (
//         <BrowserRouter>
//             <div >
//                 <List component="nav" aria-label="mailbox folders" className='menu_browserRouter_list'>
//                     <div className='button'>
//                         <div className='menu_browserRouter_avatar'>
//                             <Avatar alt="Remy Sharp" src="https://media.discordapp.net/attachments/1037688122844139552/1041864581728977026/unknown1_1.png"></Avatar>
//                             <h2 className='text_h2'>WorldGames</h2>
//                         </div>

//                         {/* BrowserGames */}
//                         <Routes>
//                             <Route
//                                 path='/Браузерные-игры'
//                                 element={(
//                                     <BrowserGames onHide={() => setModalShow(false)} show={modalShow} />
//                                 )}
//                             />

//                             {/* Youtube */}
//                             <Route
//                                 path='/Youtube'
//                                 element={(
//                                     <Youtube onHide={() => setModalShow(false)} show={modalShow} />
//                                 )}
//                             />

//                             {/* Discord */}
//                             <Route
//                                 path='/Discord'
//                                 element={(
//                                     <Discord onHide={() => setModalShow(false)} show={modalShow} />
//                                 )}
//                             />

//                             {/* Screenshot */}
//                             <Route
//                                 path='/Screenshot'
//                                 element={(
//                                     <Screenshot onHide={() => setShow(false)} show={show} />
//                                 )}
//                             />

//                             {/* Description */}
//                             <Route
//                                 path='/Description'
//                                 element={(
//                                     <Description onHide={() => setShow(false)} show={show} />
//                                 )}
//                             />
//                         </Routes>

//                         <b><Divider light /></b>
//                         <ListItem button variant="primary" onClick={() => setModalShow(true)} component={Link} to="/Браузерные-игры">
//                             <ListItemText primary="Браузерные игры" className='text_p' />
//                             <i class="bi bi-browser-firefox"></i>
//                         </ListItem>

//                         <Divider light />
//                         <ListItem button variant="primary" onClick={() => setModalShow(true)} component={Link} to="/Discord">
//                             <ListItemText primary="Discord сервер" className='text_p' />
//                             <i class="bi bi-discord"></i>
//                         </ListItem>

//                         <Divider light />
//                         <ListItem button variant="primary" onClick={() => setModalShow(true)} component={Link} to="/Youtube">
//                             <ListItemText primary="Youtube" className='text_p' />
//                             <i class="bi bi-youtube"></i>
//                         </ListItem>

//                         <Divider light />
//                         <ListItem button variant="primary" onClick={() => setShow(true)} component={Link} to="/Screenshot" >
//                             <ListItemText primary="Скриншоты" className='text_p' />
//                             <i class="bi bi-person-hearts"></i>
//                         </ListItem>

//                         <Divider light />
//                         <ListItem button variant="primary" onClick={() => setShow(true)} component={Link} to="/Description">
//                             <ListItemText primary="Описание к играм" className='text_p' />
//                             <i class="bi bi-patch-check-fill"></i>
//                         </ListItem>
//                     </div>
//                 </List >
//             </div >
//         </BrowserRouter >
//     )
// }

// export default Menu