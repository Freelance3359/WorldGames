import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/style/main-style.css';
import './components/main/HelpFull/News/News.css'
import './components/main/HelpFull/Header/HeaderBar.css'
import './components/main/Routers/Discord/Discord.css';
import './components/main/HelpFull/ValheimIP/Games.css'
import './components/main/Routers/Main/Main.css';
import './components/main/Routers/Minecraft/Minecraft.css';
import './components/main/Routers/ScreenShot/ScreenShot.css';
import './components/main/Routers/Valheim/Valheim.css';
import './components/main/Routers/Youtube/Youtube.css';
import './components/main/Routers/NotFould/NotFould.css';
import './components/main/HelpFull/Discord/DiscordIFC.css'
import './components/main/HelpFull/Youtube/HelpYoutube.css'
import './components/main/HelpFull/Valheim/HelpValheim.css'
import './components/main/HelpFull/Minecraft/HelpMinecraft.css'
import './components/main/HelpFull/Game/HelpGames.css'
import './components/main/Routers/Games/Games.css'
import './components/main/HelpFull/Screenshot/HelpScreenshot.css'
import './components/main/HelpFull/ValheimButtons/ValheimButtons.css'
import './components/main/HelpFull/ScreenshotBlock/ScreenshotBlock.css'
import './components/main/HelpFull/GameBrauser/GameBrauser.css'
import './components/main/HelpFull/GameSteamFree/GameSteamFree.css'
import './components/main/HelpFull/GameCommunication/GameCommunication.css'
import './components/main/HelpFull/Register/HelpRegister.css'
import './components/main/HelpFull/ScreenGif/ScreenGif.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Store';
import './firebase'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
