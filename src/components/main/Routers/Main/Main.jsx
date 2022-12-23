import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../../HelpFull/Header/HeaderBar';
import News from '../../HelpFull/News/News'
import CenterText from '../../HelpFull/Center/CenterText';
import CenterBlockA from '../../HelpFull/Center/CenterBlockA';
import CenterBlockB from '../../HelpFull/Center/CenterBlockB';
import CenterBlockC from '../../HelpFull/Center/CenterBlockC';


export default function Main() {
    return (
        <div className="Block_Header">
            <div>
                <Outlet></Outlet>
                <HeaderBar />
                < News />
                {/* < CenterText /> */}
                {/* <div className='Main_fon_Center'>
                    <CenterBlockA />
                    <CenterBlockB />
                    <CenterBlockC />
                </div>
                <Games /> */}
            </div>
        </div>
    )
}
