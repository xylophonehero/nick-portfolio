import React, { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';
import Typing from 'react-typing-animation';
import './Home.scss';

const blue = { color: '#569cd6' }
const gray = { color: '#808080' }
const red = { color: '#ce9178' }
const yellow = { color: '#d7ba7d' }
const lightblue = { color: '#9cdcfe' }

function Home(props)
{
    const [section, updateSection] = useState(0);



    return (
        <div className="fullScreen">
            <div className="html">
                <Typing speed={10} onFinishedTyping={() => updateSection(1)}>
                    <p>
                        <span style={gray}>&lt;</span><span style={blue}>h1</span><span style={gray}>&gt;</span>
                        Welcome to the world of Nick Worrall
                        <span style={gray}>&lt;/</span><span style={blue}>h1</span><span style={gray}>&gt;</span>
                    </p>
                </Typing>
                {section > 0 && <Typing speed={10} onFinishedTyping={() => updateSection(2)}>
                    <Typing.Delay ms={1000} />
                    <p>
                        <span style={gray}>&lt;</span><span style={blue}>h2</span><span style={gray}>&gt;</span>
                        Web Developer <span style={blue}>&#38;#128187;</span> and Musician <span style={blue}>&#38;#127932;</span>
                        <span style={gray}>&lt;/</span><span style={blue}>h2</span><span style={gray}>&gt;</span>
                    </p>
                </Typing>}
                {section > 1 && <Typing speed={10} onFinishedTyping={() => updateSection(3)}>
                    <Typing.Delay ms={1000} />
                    <p>
                        <span style={yellow}>h1 </span>&#123;
                        {/* <br /> &nbsp;*/}
                        &nbsp;<span style={lightblue}>color</span>: <span style={red}>blue</span>;&nbsp;
                        {/* <br /> */}
                        &#125;
                    </p>

                </Typing>}
                {section > 2 && <Typing speed={10} onFinishedTyping={() => updateSection(4)}>
                    <Typing.Delay ms={1000} />
                    <p>
                        <span style={gray}>&lt;</span><span style={blue}>img</span>&nbsp;
                        <span style={lightblue}>src</span>=<span style={red}>'/img/profile-pic.jpg'</span><span style={gray}>&gt;</span>
                        <span style={gray}>&lt;/</span><span style={blue}>img</span><span style={gray}>&gt;</span>
                    </p>

                </Typing>}
            </div>
            <div className='middle'>

            </div>
            <div className="output">
                {section > 0 && <h1 style={{ color: section > 2 ? 'blue' : "black" }}>Welcome to the world of Nick Worrall</h1>}
                {section > 1 && <h2>Web Developer &#128187; and Musician &#127932;</h2>}
                {section > 3 && <img src='/img/profile-pic.jpg'></img>}
                {/* {section === 3 && <h1 style={{ color: 'blue' }}>Welcome to the world of Nick Worrall</h1>} */}

                <button className="skip" onClick={() => { }}>
                    &gt;&gt; Skip
                </button>
            </div>
        </div>
    );
}

export default Home;