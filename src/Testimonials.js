import React from 'react';
// import axios from 'axios';
import TestimonialsData from './Testimonials.json'

function Testimonials(props)
{
    // const [testimonials, setTestimonials] = useState([]);

    // useEffect(() =>
    // {
    // async function loadTestimonials()
    // {
    //     const testimonialRes = await axios({
    //         method: 'GET',
    //         url: 'https://nickworrall.herokuapp.com/testimonials',
    //     })

    //     setTestimonials(testimonialRes.data);
    // }
    // loadTestimonials();

    // }, []);

    return (
        <div className='section'>
            <h1>Testimonials</h1>
            <div className='testimonial-wrapper'>
                {TestimonialsData.map(item =>

                    <div key={item.id} className='testimonial transparent-background'>
                        <h2>{item.name}</h2>
                        <h3>{item.title}</h3>
                        <hr />
                        <p>"{item.testimonial}"</p>
                    </div>

                )}
            </div>
        </div>
    );
}

export default Testimonials;