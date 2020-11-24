import React, { useEffect, useState } from 'react';
import './Controls.scss'


function Controls(props)
{


    const [active, setActive] = useState(false);
    const [hasBeenActive, setHasBeenActive] = useState(false);

    useEffect(() =>
    {
        active === true && setHasBeenActive(true);
    }, [active])

    const showControls = {
        transform: 'translateX(0)'
    }
    // const changeArrow = {
    //     transform: 'translateX(-30px)',
    //     borderLeft: '0px solid white',
    //     borderRight: '30px solid white',
    //     transition: `border-left 0.5s ease-in-out, border-right 0.5s ease-in-out 0.5s, transform 1s ease-in-out`,
    // }

    const changeRightArrow = {
        opacity: 0,
        // transform: 'translateX(-30px)',
        borderRight: '0px solid white',
        // transition: `border-right 1s ease-in-out, transform 1s ease-in-out`,
    }

    const changeLeftArrow = {
        opacity: 0,
        borderLeft: '0px solid white',
        // transition: `border-left 1s ease-in-out, transform 1s ease-in-out`,
    }
    // const animateArrow = (direction) =>
    // {
    //     return (
    //         {
    //             animation: `change-arrow 1s ease-in-out both ${direction ? 'normal' : 'alternate'}`
    //         }
    //     );
    // }
    // const handleChange = (event) =>
    // {

    // };

    return (
        <>
            <div className='control-reminder' style={hasBeenActive ? { opacity: '0' } : {}}>
                <p>&#8630; Click here to interact with the stars</p>
            </div>
            <div className='controls' style={active ? showControls : {}}>
                <div className='control-menu'>
                    <label>
                        <h3>Rotation Speed: {props.seedRotation}</h3>
                        <input className='slider' type='range' step='2' min='0' max='20' value={props.seedRotation} onChange={(e) => props.handleChange(e, 'RotationSpeed')} />
                    </label>





                    <label>
                        <h3>Star Flicker Rate: {props.flickerRate}</h3>
                        <input className='slider' type='range' min='0' max='10' value={props.flickerRate} onChange={(e) => props.handleChange(e, 'FlickerRate')} />
                    </label>

                    <label>
                        <h3>Colour Intensity: {props.colorful}</h3>
                        <input className='slider' type='range' min='0' max='255' step='15' value={props.colorful} onChange={(e) => props.handleChange(e, 'Colorful')} />
                    </label>


                    <label>
                        <h3>Star Size: {props.starSize}</h3>
                        <input className='slider' type='range' min='1' max='20' value={props.starSize} onChange={(e) => props.handleChange(e, 'StarSize')} />

                    </label>

                    <label >
                        <h3>Same Size Stars:
                        <div className='checkbox-container'>
                                <input className='control-checkbox' type='checkbox' checked={props.sameSizeStars} onChange={(e) => props.handleChange(e, 'SameSizeStars')} />
                                <span className='custom-checkbox'></span>
                            </div>

                        </h3>
                    </label>
                    <label >
                        <h3>Disable Stars:
                        <div className='checkbox-container'>
                                <input className='control-checkbox' type='checkbox' checked={props.disabled} onChange={(e) => props.handleChange(e, 'Disable')} />
                                <span className='custom-checkbox'></span>
                            </div>

                        </h3>
                    </label>

                    {/* <label>
                    <h3>Spread: {Math.round(props.spread * 100000) / 100000}</h3>
                    <input className='input-box' type='text' placeholder='Number between 0 &amp; 1' onChange={(e) => props.handleChange(e, 'Spread')} />

                </label> */}

                    <h3><button className='control-button' onClick={(e) => props.handleChange(e, 'ResetSpread')}>Reset</button></h3>
                    {/* <h3><button className='control-button' onClick={(e) => props.handleChange(e, 'AutomaticSpread')}>Automatic Spread</button></h3> */}

                </div>
                <div className='arrow-left'
                    style={active ? changeLeftArrow : {}}
                    onClick={() => setActive(!active)} >
                </div>
                <div className='arrow-right'
                    style={active ? {} : changeRightArrow}
                    onClick={() => setActive(!active)}
                >

                </div>


            </div>
        </>
    );
}

export default Controls;