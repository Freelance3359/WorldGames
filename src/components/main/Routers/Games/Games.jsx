import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../../HelpFull/Header/HeaderBar';
import HelpGames from '../../HelpFull/Game/HelpGames';
import GameBrauser from '../../HelpFull/GameBrauser/GameBrauser';
import GameSteamFree from '../../HelpFull/GameSteamFree/GameSteamFree';
import GameCommunication from '../../HelpFull/GameCommunication/GameCommunication';


export default function Games() {
    return (
        <div className="Block_Header">
            <div>
                <Outlet></Outlet>
                <HeaderBar />
                <HelpGames />
                <GameBrauser />
                <GameSteamFree />
                <GameCommunication />
            </div>
        </div>
    )
}
