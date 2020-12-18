import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import axios  from 'axios';
import slider1 from '../../src/Assets/images/slider/slider1.jpg'
import slider2 from '../../src/Assets/images/slider/slider2.jpg'
import slider3 from '../../src/Assets/images/slider/slider4.jpg'
import slider4 from '../../src/Assets/images/slider/slider5.jpg'
import { useState } from 'react';
import { useEffect } from 'react';

const About = () => {

    const [criminals, setCriminals] = useState([]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed:3000,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/testCriminal')
        .then(res => {
            setCriminals(res.data);
        })
    }, [])

    console.log(criminals);

    return (
            <Container className="my-4">
                <Row>
                    <Col xl={9} lg={9} md={9} sm={12} xs={12}>
                        <div className="border rounded p-4">
                            <h2 style={{borderBottom:'2px solid green'}}>About Our Organization</h2>
                            <p className="my-4 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore consequatur assumenda fugiat? Atque consectetur laudantium, veritatis, ducimus dolores tenetur ex incidunt sint quasi expedita nostrum rerum consequatur perferendis recusandae repellendus hic sapiente animi voluptas tempore, illum labore iure saepe. Consequuntur quae temporibus nesciunt tenetur corporis voluptatum velit magni soluta deserunt, molestias odio doloribus minima accusantium quidem vero facilis quos saepe neque facere quaerat. Non ducimus officiis nemo accusantium quas corrupti velit nisi, sequi possimus eius, id vel saepe nobis magnam quo eaque maiores sit temporibus iusto praesentium. Error dicta odit voluptates ea consectetur reprehenderit quis quaerat dolore et iusto?</p>
                            <Button className="btn btn-success mr-auto">Read More</Button>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                        <div className="border rounded ">
                            <h5 className="my-3 p-2" style={{borderBottom:'2px solid green'}}>Most Of the Criminals</h5>
                            <Container fluid={true} className="m-0 p-0 overflow-hidden">
                                <Slider {...settings}>
                            {
                                criminals.map((crm) => {
                                  
                                   return <div>
                                    <img className="slider-img" src={`http:///127.0.0.1:8000/admin/images/criminals/${crm.image}`}/>
                                    <div className="criminals-details p-2">
                                    <h4 className="text-center my-2 p-1">{crm.name}</h4>
                                    <p className="text-justify my-2 p-1">{crm.desc}</p>
                                    </div>
                                </div> 
                                })
                            }

                                
          
                                
                                
                                </Slider>
                        </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        
    );
};

export default About;