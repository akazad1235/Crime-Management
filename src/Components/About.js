import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import axios  from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import appUrl from '../Helpers/appUrl';
import { Link } from 'react-router-dom';

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

      const fetchData = async () =>{
        const request = await axios(`${appUrl.baseUrl}/api/criminals`);
        // .then(res => {
        //    // setCriminals(reqData);
        //    console.log();
        // })

       
        setCriminals(request.data.result);
      //  console.log(request);
        
        
       } 
       fetchData();
       
    }, [appUrl.url])

    console.log(criminals);

    return (
            <Container className="my-4">
                <Row>
                    <Col xl={9} lg={9} md={12} sm={12} xs={12}>
                        <div className="border rounded p-4 mb-1">
                            <h3 style={{borderBottom:'2px solid green'}}>About Our Organization</h3>
                            <p className="my-4 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore consequatur assumenda fugiat? Atque consectetur laudantium, veritatis, ducimus dolores tenetur ex incidunt sint quasi expedita nostrum rerum consequatur perferendis recusandae repellendus hic sapiente animi voluptas tempore, illum labore iure saepe. Consequuntur quae temporibus nesciunt tenetur corporis voluptatum velit magni soluta deserunt, molestias odio doloribus minima accusantium quidem vero facilis quos saepe neque facere quaerat. Non ducimus officiis nemo accusantium quas corrupti velit nisi, sequi possimus eius, id vel saepe nobis magnam quo eaque maiores sit temporibus iusto praesentium. Error dicta odit voluptates ea consectetur reprehenderit quis quaerat dolore et iusto?</p>
                            <Button className="btn btn-success mr-auto">Read More</Button>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                        <div className="border rounded criminals-contant ">
                            <h3 className="my-3 p-2" style={{borderBottom:'2px solid green'}}>Wanted Criminals</h3>
                            <Container fluid={true} className="m-0 p-0 overflow-hidden">
                                <Slider {...settings}>
                            {
                                criminals.map((crm)  => {
                                  
                                   return <div key={crm.id} className="p-1 ">
                                        <div className="criminal-image">
                                            <figure>
                                                <Link to={`/criminals/${crm.id}`}><img className="rounded mx-auto d-block " src={`${appUrl.baseUrl}/admin/images/criminals/${crm.image}`}/></Link>
                                            </figure>
                                        </div>
                                    <div className="criminals-details p-2">
                                    <h4 className="text-center my-2 p-1"><Link className="text-decoration-none" to={`/criminals/${crm.id}`}>{crm.name}</Link></h4>
                                    <p className="text-justify my-2 p-1">{crm.desc.substr(0, 100)}</p>
                                    
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