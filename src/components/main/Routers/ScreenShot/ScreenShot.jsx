import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../../HelpFull/Header/HeaderBar';
import HelpScreenshot from '../../HelpFull/Screenshot/HelpScreenshot';
import ScreenshotBlock from '../../HelpFull/ScreenshotBlock/ScreenshotBlock';
import ScreenGif from '../../HelpFull/ScreenGif/ScreenGif';


export default function HelpScreenShot() {
    return (
        <div className="Block_Header">
            <div>
                <Outlet></Outlet>
                <HeaderBar />
                <HelpScreenshot />
                <ScreenshotBlock />
                <ScreenGif />
            </div>
        </div>
    )
}
