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
            <p> I'm Nick Worrall and I'm a web developer. I'll make your website and teach you how to use the software I use to build it so that you can easily upload new content yourself.</p>
            <p> I create beautiful and functional websites using HTML, CSS, PHP, JavaScript, WordPress, React and many other tools. </p>
            <p>After graduating in 2014 from Warwick University with an Integrated Master's Degree (First Class Honours) in Mathematics, I have been working and travelling on cruise ships as a Musical Director and Pianist, then Sales Manager.</p>
            <p> During that time I have learned how to code so I can make websites, games and applications. I am a great problem solver, learn new concepts quickly and work swiftly and efficiently.</p>
            <p>When I am not working, I like to perform music, solve puzzles, travel the world, and play games.</p>
            <p>Please take a look at my portfolio and skills and then lets talk about how I can help make your vision of your website a reality.</p>
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
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
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
                <li>WordPress</li>
                <li>Flutter</li>
                <li>Unity</li>
                <li>Heroku</li>
                <li>Strapi CMS</li>
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
                <li>Pianist</li>
                <li>Team Player</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='section'>
        <h1>Services</h1>
        <div className='skill-wrapper'>
          <div>
            <h3>Ecommerce</h3>
          </div>
          <div>
            <h3>Blogs</h3>
          </div>
          <div>
            <h3>Something else</h3>
          </div>


        </div>
      </div> */}
      <Services />
      <Portfolio />
      <Testimonials />
      {/* <div className='section'>
        <h1>Testimonials</h1>
        <div className='testimonial-wrapper'>
          {Testimonials.map(item =>

            <div key={item.id} className='testimonial transparent-background'>
              <h2>{item.name}</h2>
              <h3>{item.title}</h3>
              <hr />
              <p>"{item.testimonial}"</p>
            </div>

          )}
        </div>
      </div> */}
      <div className='section' id='contact' style={{ minHeight: 'auto', textAlign: 'center' }}>
        <h1>Contact</h1>
        <div>
          <h2>Interested in working with me?</h2>
          <h2>Contact me now and we will work together to create your dream website.</h2>
          <h3>Email: <a href='mailto:nick97000@gmail.com' target='_blank' rel='noopener noreferrer'>nick97000@gmail.com</a></h3>
          {/* <h3>Phone: <a href='tel: +447533232346'>(+44)7533232346</a></h3> */}
          <h3>LinkedIn: <a href='https://www.linkedin.com/in/nick-worrall-1940981ab/' target='_blank' rel='noopener noreferrer'>Nick Worrall</a></h3>
          <p>Testing from Netlify</p>
          {/* <p>If you need words for your website &mdash; whether that be content, copywriting, blogs, advertising features, editing or proofreading &mdash; I work closly with writer <a href='https://karenworrall.co.uk'>Karen Worrall</a>, who I highly recommend and we can offer you a package deal.</p> */}
        </div>
      </div>
      <div style={{ height: '1vh', position: 'relative', color: 'white', zIndex: '-1' }} />

    </>
  );




}

export default App;
