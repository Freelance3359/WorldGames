import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../../HelpFull/Header/HeaderBar';
import HelpMinecraft from '../../HelpFull/Minecraft/HelpMinecraft';


export default function Minecraft() {
    return (
        <div className="Block_Header">
            <div>
                <Outlet></Outlet>
                <HeaderBar />
                <HelpMinecraft />
            </div>
        </div>
    )
}
