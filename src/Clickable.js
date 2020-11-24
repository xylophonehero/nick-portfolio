import React, { useState } from 'react';
import './Clickable.scss'

function Clickable(props)
{
    const [open, setOpen] = useState(false);
    const position = {
        top: `${props.top}vh`,
        left: `${props.left}vw`,
    }
    return (
        <div className='menuOption' style={position}>
            <div className='diamond' onClick={() => { setOpen(!open) }}>

            </div>
            <h1 className='title'>{props.title}</h1>
            {open && <div className='infoBox'>
                <h1>Maow</h1>
            </div>}
        </div>
    );
}

function Menu()
{
    return (
        <div className='menu'>
            <Clickable title='About' top={20} left={30} />
            <Clickable title='Projects' top={40} left={60} />
            <Clickable title='Contact' top={70} left={20} />
        </div>
    );
}


export default Menu;