import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import axios  from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import appUrl from '../Helpers/appUrl';
import { Link } from 'react-router-dom';


const Missing = () => {
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
    const missing = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed:3000,
        autoplay:true,
        slidesToShow: 2,
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
        <div>
               <Container className="my-4">
                <Row>
                    <Col xl={9} lg={9} md={12} sm={12} xs={12}>
                       
                         
                            <div className="border rounded criminals-contant ">
                            <h3 className="my-3 p-2" style={{borderBottom:'2px solid green'}}>Missing Person</h3>
                            <Container fluid={true} className="m-0 p-0 overflow-hidden">
                                <Slider {...missing}>
                            {
                                criminals.map((crm)  => {
                                   return <div key={crm.id} className="p-1 ">
                                        <div className="d-flex my-4 mission-border" >
                                        <img className="missing-img" src="https://image.shutterstock.com/image-photo/young-indian-travel-man-making-260nw-550667650.jpg" alt="Image" />
                                        <div className="p-2">
                                            <h5 className="my-1  text-justify"><Link to="/">Mr.Selim Khan</Link></h5>
                                            <p className="my-1">0172548452</p>
                                            <p className="my-1">12-20-20</p>
                                            <p className="my-1">25 years old</p>
                                        </div>  
                                      </div>
                                      <p>The crime rate is increasing at an alarming rateThe crime rate is increasing at an alarming rateThe crime rate is increasing at an alarming rate</p>
                                </div> 
                                })
                            }
                                </Slider>
                        </Container>
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
        </div>
    );
};

export default Missing;