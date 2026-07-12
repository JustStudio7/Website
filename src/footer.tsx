import './footer.css'
import { Logo } from './logo'

function VisualSeparator() {
    return (
        <div style={{width: '16px', backgroundColor: '#ffffff11', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', marginLeft: '32px'}} className='fade' />
    )
}

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div style={{width: '180px', height: '180px', marginLeft: '16px', left: '16px', position: 'absolute', display: 'block', zIndex: 2}}>
                <Logo />
            </div>
            <div style={{translate: 'calc(180px + 48px) 16px', zIndex: 2, minWidth: '240px'}}>
                <h3 className='name'>JustStudio.</h3>
                <strong style={{translate: '0px -16px'}}>a System Development Studio</strong>
                <small style={{bottom: '32px', position: 'absolute'}}><hr />&copy; 2020-{currentYear} JustStudio.<br />All rights reserved.<hr />The source code of this website is licensed under the MIT License,<br />&copy; 2024-2026 JustStudio.<hr className='mw594' /><small className='mw594'>The dot in "JustStudio." is part of the name.</small></small>
            </div>
            <div style={{flexDirection: 'row', translate: '-32px 16px'}}>
                <VisualSeparator />
                <div className='section'>
                    {/* @ts-ignore */}
                    <h3 style={{'--ad': 1}}>Games</h3>
                    <a href="https://www.roblox.com/games/9201462652/Find-the-cats-Morphs" target='_blank'>Find the Cats</a>
                </div>
                <VisualSeparator />
                <div className='section'>
                    {/* @ts-ignore */}
                    <h3 style={{'--ad': 2}}>Products</h3>
                    <a href="https://just.js.org/" target='_blank'>Just an Ultimate Site Tool</a>
                    <a href="https://just.js.org/justc/" target='_blank'>JUSTC</a>
                </div>
                <VisualSeparator />
                <div className='section'>
                    {/* @ts-ignore */}
                    <h3 style={{'--ad': 3}}>Connect</h3>
                    <a href="/r/discord" target='_blank'>Discord Server</a>
                    <a href="/r/github" target='_blank'>GitHub Organization</a>
                    <a href="/r/roblox" target='_blank'>Roblox Community</a>
                    <hr style={{marginTop: '16px'}} />
                    <a href="mailto:support@juststudio.is-a.dev" target='_blank'><small>support@juststudio.is-a.dev</small></a>
                </div>
                <div />
            </div>
        </footer>
    )
}

export default Footer