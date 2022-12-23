import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../../HelpFull/Header/HeaderBar';
import DiscordIFC from '../../HelpFull/Discord/DiscordIFC';


export default function Discord() {
    return (
        <div className="Block_Header">
            <div>
                <Outlet></Outlet>
                <HeaderBar />
                <DiscordIFC />
            </div>
        </div>
    )
}
