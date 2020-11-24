
import './GoldenRatio.scss'
import React, { useState } from 'react';
import Controls from './Controls';

const phi = 0.61803398875;
const smallnumber = Math.sqrt(document.documentElement.clientWidth) / 20;
const startnumber = document.documentElement.clientWidth / 200;
function Seed(props)
{
    const red = Math.floor(props.random.red * props.colorful)
    const green = Math.floor(props.random.blue * props.colorful)
    const blue = Math.floor(props.random.green * props.colorful)
    const colorRatio = props.colorful / (red + green + blue)
    // const size = props.sameSizeStars ? props.starSize : Math.floor(Math.random() * props.starSize + 2);
    const size = props.sameSizeStars ? props.starSize : Math.floor(props.random.size * props.starSize + 2);
    const rotation = (props.spread * props.id - Math.floor(props.spread * props.id)) * Math.PI * 2;
    // const length = 15 + (props.id * smallnumber * Math.pow(0.95, Math.sqrt(props.id)));
    const length = startnumber + (props.id * smallnumber)
    const xpos = length * Math.cos(rotation);
    const ypos = length * Math.sin(rotation);
    // const seedColor = `rgba(${255 - Math.floor(Math.random() * 30)}, ${255 - Math.floor(Math.random() * 100)}, ${255 - Math.floor(Math.random() * 50)}, 1)`;
    const seedColor = `rgba(${255 - Math.floor(red * colorRatio)}, ${255 - Math.floor(green * colorRatio)}, ${255 - Math.floor(blue * colorRatio)}, 1)`;
    const seedpos = {
        height: `${size}px`,
        width: `${size}px`,
        transform: `translate(${xpos}px, ${ypos}px)`,
        animationDelay: `${props.id / 100}s`,
        // animationDuration: `${size / 20 * (props.random.flickerRate + 1) * (11 - props.flickerRate)}s`,
        animationDuration: `${1 / 5 * (props.random.flickerRate + 1) * (11 - props.flickerRate)}s`,
        animationIterationCount: props.flickerRate === '0' ? 1 : 'infinite',
        backgroundImage: `radial-gradient(circle, ${seedColor} 0%, #000000 100%)`,
        // backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0 %, rgba(0, 0, 0, 0) 100 %)'
    }
    return (

        <div className='seed' style={seedpos}>

        </div>
    );
}

var GotRandomNumbers = false;
var RandomArray = [];
function GetRandomNumbers()
{
    RandomArray = [];

    for (let i = 0; i < 500; i++)
    {
        const randomNumbers =
        {
            id: i,
            size: Math.random(),
            red: Math.random(),
            blue: Math.random(),
            green: Math.random(),
            flickerRate: Math.random(),

        };
        RandomArray.push(randomNumbers)
    }
    GotRandomNumbers = true;
}





function GoldenRatio()
{
    GotRandomNumbers === false && GetRandomNumbers();

    // const randomArray = []
    // for (let i = 0; i < 500; i++)
    // {
    //     const randomNumbers =
    //     {
    //         id: i,
    //         size: Math.random(),
    //     };
    //     randomArray.push(randomNumbers)
    // }

    const myArray = []
    for (let i = 0; i < 500; i++)
    {
        myArray.push(i);
    }



    // const [active, setActive] = useState(false);

    // const showControls = {
    //     transform: 'translateX(0)'
    // }
    // const changeArrow = {
    //     borderLeft: '0px solid white',
    //     borderRight: '30px solid white',
    //     transition: `border-left 0.5s linear, border-right 0.5s linear 0.5s`,
    // }

    const [seedRotation, setSeedRotation] = useState(6);
    const [spread, setSpread] = useState(phi);
    const [starSize, setStarSize] = useState(5);
    const [sameSizeStars, setSameSizeStars] = useState(false);
    const [flickerRate, setFlickerRate] = useState(5);
    const [colorful, setColorful] = useState(100);
    // const [automaticSpread, setAutomaticSpread] = useState(false);
    const animateSeedRotation = {
        animationDuration: `${seedRotation === '0' ? 0 : 400 / seedRotation}s`
    }

    const handleChange = (event, name) =>
    {
        switch (name)
        {
            case 'RotationSpeed':
                setSeedRotation(event.target.value)
                break;
            case 'Spread':
                setSpread(event.target.value)
                break;
            case 'StarSize':
                setStarSize(event.target.value)
                break;
            case 'SameSizeStars':
                setSameSizeStars(event.target.checked)
                break;
            case 'FlickerRate':
                setFlickerRate(event.target.value)
                break;
            case 'Colorful':
                setColorful(event.target.value)
                break;
            case 'ResetSpread':
                GetRandomNumbers()
                setSeedRotation(6)
                setSpread(phi)
                setStarSize(5)
                setSameSizeStars(false)
                setFlickerRate(5)
                setColorful(100)
                break;
            // case 'AutomaticSpread':
            //     setSpread(0)
            //     setAutomaticSpread(true)
            //     break;
            default:
                break;
        }


    }

    // useEffect(() =>
    // {
    //     if (automaticSpread === true)
    //     {
    //         spread < 1 && setSpread(spread + 0.0001);

    //     }
    // }, [spread]
    // )

    return (

        <>
            <Controls handleChange={handleChange} increaseSpread={null} seedRotation={seedRotation} spread={spread} starSize={starSize} sameSizeStars={sameSizeStars} flickerRate={flickerRate} colorful={colorful} />
            < div className='seeds' style={animateSeedRotation}>
                {
                    // myArray.map((index) =>

                    //     <Seed key={index} id={index} spread={spread} starSize={starSize} sameSizeStars={sameSizeStars} flickerRate={flickerRate} colorful={colorful} />
                    // )
                    RandomArray.map((star) =>
                        <Seed key={star.id} id={star.id} random={star} spread={spread} starSize={starSize} sameSizeStars={sameSizeStars} flickerRate={flickerRate} colorful={colorful} />
                    )
                }

            </div >


            {/* <div className='controls' style={active ? showControls : {}}>
                <div className='control-menu'>
                    <h2>Rotation Speed:</h2>
                    <input type='range' min='0' max='50' defaultValue='10' onChange={handleChange} />
                    <h2>{seedRotation}</h2>
                    <h2>Hello</h2>
                </div>
                <div className='arrow-left'
                    style={active ? changeArrow : {}}
                    onClick={() => setActive(!active)} ></div>

            </div> */}

        </>
    );
}

export default GoldenRatio;