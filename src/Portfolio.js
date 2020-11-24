// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import React from 'react';
// import axios from 'axios';
import './Portfolio.scss';
import Slider from 'react-slick';
import PortfolioData from './Portfolio.json';

function Portfolio(props)
{

    // const [portfolioData, setPortfolioData] = useState([]);

    // useEffect(() =>
    // {
    // async function loadPortfolioData()
    // {
    //     const portfolioRes = await axios({
    //         method: 'GET',
    //         url: 'https://nickworrall.herokuapp.com/portfolios',
    //     })

    //     setPortfolioData(portfolioRes.data);
    // }

    // loadPortfolioData();
    // }, []);


    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: document.documentElement.clientWidth > 1000 ? 2 : 1,
        slidesToScroll: 1,
        // arrows: false,
        // appendDots: dots => (
        //     <div
        //         style={{

        //             margin: '10px',
        //         }}>
        //         <ul > {dots} </ul>
        //     </div>),
        // customPaging: () => (
        //     <div

        //         style={{
        //             width: '20px',
        //             height: '20px',
        //             borderRadius: '10px',
        //             border: '1px white solid',
        //             color: 'white'
        //         }}>

        //     </div>
        // ),

    }

    return (
        <div className='section'>
            <h1>Portfolio</h1>
            {/* <div className='portfolio-items'>
                {Items.map((item) =>
                    <div className='portfolio-item' key={item.id}>
                        <img src={'/img/' + item.image} alt={item.title} />
                        <div>
                            <h2><a href={item.link} rel='noopener noreferrer' target='blank'>{item.title}</a></h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )}
            </div> */}
            {/* <CarouselProvider
                naturalSlideHeight={document.documentElement.clientHeight}
                naturalSlideWidth={document.documentElement.clientWidth * (document.documentElement.clientWidth > 1000 ? 0.5 : 1)}

                totalSlides={5}
                infinite={true}
                visibleSlides={document.documentElement.clientWidth > 1000 ? 2 : 1}
            >
                <div className='carousel-buttons'>
                    <ButtonBack>&#8249;</ButtonBack>
                    <DotGroup />
                    <ButtonNext>&#8250;</ButtonNext>
                </div>
                <Slider
                // style={{ width: '80%', height: '80%' }}
                >
                    {Items.map((item) =>
                        <Slide
                            index={item.id}
                            key={item.id}

                        >
                            <img src={'/img/' + item.image} alt={item.title} />
                            <div>
                                <h2><a href={item.link} rel='noopener noreferrer' target='blank'>{item.title}</a></h2>
                                <h3>{item.tagline}</h3>
                                {item.description.split('\n').map(str => <p key={str.substr(0, 10)}>{str}</p>)}
                            </div>
                        </Slide>)}
                </Slider>


            </CarouselProvider> */}
            <Slider {...sliderSettings}>
                {PortfolioData.sort((a, b) => a.id - b.id).map((item) =>

                    <div className='no-outline transparent-background' key={item.id}>
                        <img src={require('./img/' + item.image)} alt={item.title} />
                        <div className='portfolio-text' style={{ paddingRight: document.documentElement.clientWidth > 1000 ? '30px' : '0px' }}>
                            <h2><a href={item.link} rel='noopener noreferrer' target='blank'>{item.title}</a></h2>
                            <h3>{item.tagline}</h3>
                            {item.description.split('*n').map(str => <p key={str.substr(0, 20)}>{str}</p>)}
                        </div>
                    </div>
                )}
            </Slider>

        </div >
    );
}

export default Portfolio;