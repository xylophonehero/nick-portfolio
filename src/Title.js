import React from 'react';
import Plx from 'react-plx';
import './Title.scss';
import { Textfit } from 'react-textfit';


const Letters = [
    [
        'N',
        'I',
        'C',
        'K',
        '-',
        'W',
        'O',
        'R',
        'R',
        'A',
        'L',
        'L',
    ],
    [
        'W',
        'E',
        'B',
        '-',
        'D',
        'E',
        'V',
        'E',
        'L',
        'O',
        'P',
        'E',
        'R',
    ]
]


const Explode = (props) =>
{
    const parallaxData = [
        // {
        //     start: 'self',
        //     duration: '100vh',
        //     properties: [
        //         {
        //             startValue: 0,
        //             endValue: 1,
        //             property: 'opacity',
        //         },
        //         {
        //             startValue: -200,
        //             endValue: 0,
        //             property: 'translateY',
        //             unit: '%',
        //         }
        //     ]
        // },
        {
            start: 'self',
            duration: '100vh',
            properties: [
                {
                    startValue: 1,
                    endValue: 0,
                    property: 'opacity',
                },
                {
                    startValue: 0,
                    endValue: Math.random() * 360 - 180,
                    property: 'rotate',
                },
                {
                    startValue: 1,
                    endValue: 1 + Math.random() * 2,
                    property: 'scale',
                },
                {
                    startValue: 0,
                    endValue: (1 + Math.random()) * 100 * props.shiftLeft,
                    property: 'translateX',
                    unit: '%',
                },
                {
                    startValue: 0,
                    endValue: (1 + Math.random()) * 100 * props.shiftUp,
                    property: 'translateY',
                    unit: '%',
                }
            ]
        }
    ];

    const maxLetterWidth = document.documentElement.clientWidth * 0.9 / 13;
    const maxLetterHeight = document.documentElement.clientHeight / 5;

    return (
        <Plx
            className='explode-letter'
            parallaxData={parallaxData}
            style={{
                // height: maxLetterHeight > maxLetterWidth ? `${maxLetterHeight}px` : '200px',
                // width: maxLetterWidth > maxLetterHeight ? `${maxLetterWidth}px` : '50px'
                height: `${maxLetterHeight}px`,
                width: `${maxLetterWidth}px`,
                color: props.letter === '-' ? 'rgba(0,0,0,0)' : 'white',
                // zIndex: props.letter === '-' && -2,
                // zIndex: -2,
            }}
        >
            <Textfit mode='single' max={1000} forceSingleModeWidth={false}>
                {props.letter}
            </Textfit>

        </Plx >
    );
}


function Title(props)
{
    // const [displayScroll, changeScroll] = useState(true);


    return (
        <>

            {/* <div style={displayScroll ? { color: 'rgba(255,255,255,1)' } : { color: 'rgba(0,0,0,0)' }} className='scroll' onClick={() => changeScroll(false)}>
                <h3>Take a peek - scroll down!</h3>
            </div> */}

            <div className='explode'>
                {Letters.map((list) =>
                    <div className='explode-row' key={Letters.indexOf(list)}>
                        {list.map((letter) =>

                            <Explode
                                key={Math.random()}
                                letter={letter}
                                shiftLeft={list.indexOf(letter) < list.length / 2 + 1 ? -1 : 1}
                                shiftUp={Letters.indexOf(list) < 1 ? -1 : 1}
                            />


                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default Title;