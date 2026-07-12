import './card.css'

function Card({ title, content, bgsrc, href, description, color="var(--light)", color2="var(--light)", className } : {[key: string] : string}) {
    return <a href={href} target="_blank" className={'card' + (className ? (' ' + className) : '')} title={description} >
        {/* @ts-ignore */}
        <div style={{'--bgsrc': `url(${bgsrc})`, '--desc': `"${content}"`, '--cardcol': color, '--cardcol2': color2}}>
            <h3>{title}</h3>
            <h3>{title}</h3>
        </div>
    </a>
}

export default Card
