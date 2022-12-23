import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../../HelpFull/Header/HeaderBar';
import HelpValheim from '../../HelpFull/Valheim/HelpValheim';
import ValheimButtons from '../../HelpFull/ValheimButtons/ValheimButtons';
import ValheimIP from '../../HelpFull/ValheimIP/ValheimIP'



export default function Valheim() {
    return (
        <div className="Block_Header">
            <div>
                <Outlet></Outlet>
                <HeaderBar />
                <HelpValheim />
                <ValheimIP />
                <ValheimButtons />
            </div>
        </div>
    )
}
