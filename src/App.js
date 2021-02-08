import React from 'react';
import './App.scss'
import GoldenRatio from './GoldenRatio';
// import Menu from './Clickable';
// import Controls from './Controls'
// import Plx from 'react-plx';
import Title from './Title';
import Portfolio from './Portfolio';
// import Testimonials from './Testimonials.json';
import Testimonials from './Testimonials';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Services from './Services';



function App()
{




  // const parallaxData = [
  //   {
  //     start: '.StickText-trigger',
  //     duration: '30vh',
  //     properties: [
  //       {
  //         startValue: 0,
  //         endValue: -50,
  //         unit: 'vh',
  //         property: 'translateY',
  //       },
  //       {
  //         startValue: 0,
  //         endValue: 1,
  //         property: 'opacity',
  //       },
  //     ],
  //   },
  //   {
  //     start: '.StickText-trigger',
  //     startOffset: '100vh',
  //     duration: '30vh',
  //     properties: [
  //       {
  //         startValue: -50,
  //         endValue: -100,
  //         unit: 'vh',
  //         property: 'translateY',
  //       },
  //       {
  //         startValue: 1,
  //         endValue: 0,
  //         property: 'opacity',
  //       },
  //     ],
  //   },
  // ];


  return (
    <>
      <GoldenRatio />
      <Title />
      {/* <Controls /> */}
      {/* <Menu /> */}
      {/* Modal box */}


      <div style={{ height: '150vh', position: 'relative', color: 'white', zIndex: '-1' }} />

      <div className='section'>
        <h1>About</h1>
        <div className='about' style={{ display: 'flex' }}>
          <img src={require('./img/profile-pic.jpg')} alt='Profile' />
          <div className='about-info transparent-background'>
            {/* <p>I am a web developer who uses HTML, CSS, PHP, JavaScript, WordPress, React and many other tools to create beautiful and functional websites.</p>
            <p>I have an integrated Master's degree in mathmatics from Warwick University and graduated with first class honors.</p>
            <p>I am a great problem solver, can learn new concepts quickly and work swiftly and efficiently.</p>
            <p>For the past six years, I have been working and travelling on cruise ships as a Musical Director and Pianist, then Sales Manager.</p>
            <p>My passions include coding, solving puzzles, music performance, travel, and playing games.</p> */}
            <p>Hello, and thank you for checking out my site.</p>
            <p>I'm Nick, a Freelance Full Stack Web Developer.</p>
            <p>I create beautiful and functional websites using React, JavaScript, Node.js, Gatsby,js, Next.js, WordPress and many other tools.</p>
            <p>I integrate my sites with a content management system, usually Netlify CMS, Strapi or Headless WordPress, so clients can easily edit the data on existing pages or create new pages/blog posts from a template I have created.</p>
            <p>Clients are impressed with my knowledge and speed of delivery when it comes to developing websites for them.</p>
            <p>After graduating in 2014 from Warwick University with an Integrated Master's Degree (First Class Honours) in Mathematics, I have been working and travelling on cruise ships as a Musical Director and Pianist, then Sales Manager.</p>
            <p>During that time I have learned how to code so I can make websites, games and applications. I am a great problem solver, logical strategist, learn new concepts quickly and work swiftly and efficiently.</p>
            <p>When I am not working, I like to perform music, solve puzzles, travel the world, and play games.</p>
            <p>Please take a look at my portfolio and skills and then let's talk about how I can help make your vision of your website a reality.</p>
            <p>Best wishes, Nick</p>

          </div>
        </div>

        <div className='fake-button-wrapper'>
          <AnchorLink href='#contact'>
            <div className='fake-button'>


              <b>Contact Me</b>

            </div>
          </AnchorLink>
        </div>

        <div className='section'>
          <h1>Skills</h1>
          <div className='skills-box transparent-background'>
            <div>
              <h3>Languages</h3>
              <hr />
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>PHP</li>
                <li>C#</li>
              </ul>
            </div>
            <div>
              <h3>Frameworks &amp; Libraries</h3>
              <hr />
              <ul>
                <li>React</li>
                <li>Gastby.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>StrapiCMS</li>
                <li>WordPress</li>
              </ul>
            </div>
            <div>
              <h3>Additional</h3>
              <hr />
              <ul>
                <li>Photoshop</li>
                <li>Premiere Pro</li>
                <li>Ableton Live</li>
                <li>Sibelius</li>
                <li>Indesign</li>
                <li>Pianist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Services />
      <Portfolio />
      <Testimonials />

      <div className='section' id='contact' style={{ minHeight: 'auto', textAlign: 'center' }}>
        <h1>Contact</h1>
        <div>
          <h2>Interested in working with me?</h2>
          <h2>Contact me now and we will work together to create your dream website.</h2>
          <h3>Email: <a href='mailto:nick@nickworrall.co.uk' target='_blank' rel='noopener noreferrer'>nick@nickworrall.co.uk</a></h3>
          {/* <h3>Phone: <a href='tel: +447533232346'>(+44)7533232346</a></h3> */}
          <h3>LinkedIn: <a href='https://www.linkedin.com/in/nick-worrall-1940981ab/' target='_blank' rel='noopener noreferrer'>Nick Worrall</a></h3>
          <h3>GitHub: <a href='https://github.com/xylophonehero' target='_blank' rel='noopener noreferrer'>XylophoneHero</a></h3>
        </div>
      </div>
      <div style={{ height: '1vh', position: 'relative', color: 'white', zIndex: '-1' }} />

    </>
  );




}

export default App;
