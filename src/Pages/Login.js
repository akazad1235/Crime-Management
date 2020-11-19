import React from 'react';
import axios  from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm, useFormContext } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import fb from '../../src/Assets/images/icon/fb.png';
import google from '../../src/Assets/images/icon/google.png';
import { useState } from 'react';


const Login = () => {

    const {register, handleSubmit, errors} =useForm();

    const [error, setError] = useState()



    const onSubmit = (data) => {
        const login = {...data};
        
        // axios.post('http://localhost:8000/user', newRegister)

        axios.post('http://localhost:8000/login',login)
        .then( res => {
            if (res.data.token) {
                localStorage.setItem('usertoken', res.data.token);   
            }else{
                const getError = res.data.error;
                setError(getError);
            }
       })
       
       .catch( error => {
           
           console.log('erors');
       }) 

    }

    return (
        <>
        <Container className="my-5">
            
            <Row>
                <Col lg={4} xl={4} md={4} sm={6} xs={12}  className="m-auto login-container p-3">
                    <h3 className="mb-4">User Login </h3>
                    <p className="text-center text-danger my-2">{error ? 'username password not match':''}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                              <label for="name">Email</label>
                             <input type="email" className="form-control" id="name" name="email" placeholder="Enter Your Register Email" ref={register}/>
                        </div> 
                        <div className="form-group">
                              <label for="name">Password</label>
                             <input type="password" className="form-control" id="name" name="password" placeholder="Password" ref={register}/>
                        </div>
                        <div className="form-group">
                              <label for="pass"></label>
                             <input type="submit" className="form-control btn btn-success"  value="Login"/>
                             <Link to="/verityToken">getCode</Link>
                        </div>
                        <div>
                            <p>Don't Have an Account <a href="">Sign up</a></p>
                        </div>
                        <p className="or-login text-center">OR</p>
                        
                        <div className="d-flex m-2 my-4">
                            <div className="fb text-center mx-2">  
                                <img src={fb} alt=""/><span className="">Facebook</span>
                            </div>
                            <div className="google text-center ml-5">
                                <img src={google} alt=""/><span className="pl-1">Google</span>
                            </div>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </>
    );
};

export default Login;