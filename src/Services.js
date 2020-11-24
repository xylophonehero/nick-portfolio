import React, { useState } from 'react';
// import axios from 'axios';
import './Services.scss'
import ServicesData from './Services.json';

function Service(props)
{



    const checkedService = {
        // transform: 'scale(1,1)',
        opacity: 1,
        transition: 'opacity 0.5s ease-in-out 0.25s, max-height 0.5s ease-in-out',
        maxHeight: '500px',
    }

    return (
        <div className='service transparent-background'  >
            <h3 onClick={e => props.handleClick(props.id)}>{props.item.title} {document.documentElement.clientWidth < 1174 && <b style={{ fontSize: '1.5em' }}>{props.showDetails ? '-' : '+'}</b>}</h3>
            <hr />
            <div className='service-info' style={props.showDetails ? checkedService : {}}>
                <p dangerouslySetInnerHTML={{ __html: props.item.info }}></p>
            </div>
        </div >
    )
}


function Services()
{

    // const [servicesData, setServiceData] = useState([]);

    // useEffect(() =>
    // {
    // async function loadServiceData()
    // {
    //     const serviceRes = await axios({
    //         method: 'GET',
    //         url: 'https://nickworrall.herokuapp.com/services',
    //     })

    //     setServiceData(serviceRes.data);
    // }
    // loadServiceData();
    // }, []);
    const [activeService, setActiveService] = useState(-1);

    const handleServiceClick = (serviceID) =>
    {
        serviceID === activeService ? setActiveService(-1) : setActiveService(serviceID);
    }

    return (
        <div className='section'>
            <h1>Services</h1>
            <div className='service-wrapper'>
                {ServicesData.map((item) =>
                    <Service key={item.id} id={item.id} item={item} showDetails={activeService === item.id} handleClick={handleServiceClick} />
                )}
            </div>

        </div>
    );
}

export default Services;