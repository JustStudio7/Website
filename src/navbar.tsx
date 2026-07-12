import { useEffect } from 'react'
import './navbar.css'
import logo from './assets/logo.mini.png'
import isCapableDesktopDevice from './checkDevice'

declare global {
  interface Window {
    NAVBAR_COOLDOWN?: number,
    NAVBAR_STATE?: string
  }
}

function Navbar({display} : {[key: string]: any}) {
    useEffect(()=>{
        window['NAVBAR_STATE'] = 'default';
        window['NAVBAR_COOLDOWN'] = 0;

        window['NAVBAR_STATE'] = localStorage.getItem('header') || 'default';
        if (window['NAVBAR_STATE'] == "alternative") {
            document.getElementById('hdr')!.className = "alternative";
        } else {
            document.getElementById('hdr')!.className = "default";
        };

        const eventListener = ()=>{
            if ((window['NAVBAR_COOLDOWN'] || 0) + 1000 >= Date.now()) return;
            window['NAVBAR_COOLDOWN'] = Date.now();
            if (window['NAVBAR_STATE'] == "default") {
                window['NAVBAR_STATE'] = 'alternative';
                document.getElementById('hdr')!.className = "alternative";
            } else {
                window['NAVBAR_STATE'] = 'default';
                document.getElementById('hdr')!.className = "default";
            }
            localStorage.setItem('header', window['NAVBAR_STATE'] || 'default');
        };

        document.getElementById("nav")?.addEventListener('mousedown', eventListener);
        return () => {
            document.getElementById("nav")?.removeEventListener('mousedown', eventListener);
        };
    }, []);

    return (
        <header style={{
            opacity: display ? 1 : 0
        }}>
            <nav id="hdr" style={
                isCapableDesktopDevice() ? {backdropFilter: 'url(#glass) blur(8px)', WebkitBackdropFilter: 'url(#glass) blur(8px)'} : 
                {backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)'}
            }>
                <div className='left'>
                    <img src={logo} />
                    <div className='navleft'>
                        <h2>JustStudio.</h2>
                        <div style={{justifyContent: 'flex-start', gap: '4px'}}>
                            <a id='a1'>
                                <svg><use href="/img/icons.svg#icon-discordwhite" /></svg>
                            </a>
                            <a id='a2'>
                                <svg><use href="/img/icons.svg#icon-githubwhite" /></svg>
                            </a>
                            <a id='a3'>
                                <svg><use href="/img/icons.svg#icon-robloxwhite" /></svg>
                            </a>
                            <button id="nav">
                                <svg><use href="/img/icons.svg#icon-arrow" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='navright'>
                        <div className='dropdown'>
                            <div className='trigger'>
                                <span id="t1">Games</span>
                                <ul className='buttons' id='l1' />
                            </div>
                        </div>
                        <div className='dropdown'>
                            <div className='trigger'>
                                <span id="t2">Products</span>
                                <ul className='buttons' id='l2' />
                            </div>
                        </div>
                        <div className='dropdown' style={{display: 'none'}}>
                            <div className='trigger'>
                                <span id="t3">Terms</span>
                                <ul className='buttons' id='l3' />
                            </div>
                        </div>
                    </div>
                    <div className='navright'></div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar
