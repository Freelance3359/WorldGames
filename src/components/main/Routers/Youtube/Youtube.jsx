import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../../HelpFull/Header/HeaderBar';
import HelpYoutube from '../../HelpFull/Youtube/HelpYoutube';

export default function Youtube() {
    return (
        <div className="Block_Header">
            <div>
                <Outlet></Outlet>
                <HeaderBar />
                <HelpYoutube />
            </div>
        </div>
    )
}
