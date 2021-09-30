import React, { useEffect } from 'react'
import { Container, Row, Col} from 'reactstrap';
import NavbarHome from './Navbar_Home';
import img1 from '../Assets/img6.svg';
import img2 from '../Assets/img7.svg';
import './Homepage.css';
import 'react-router-dom';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Homepage() {

    useEffect(()=>{
        AOS.init({duration:2000});
    },[])

    return (
        <Container fluid style = {{}}>
            <Row style = {{paddingTop: '13px'}}>
                <NavbarHome/>
            </Row>
            <Row data-aos="fade-right" style = {{marginTop: '20px',height: '300px',backgroundColor: 'black'}}>
                <h1 style = {{color: '#f6f4ea', fontSize: '70px', fontWeight: 'bolder', marginTop: '70px', textAlign: 'center'}}>
                    A project, to ease work of developers & lawyers.
                </h1>
            </Row>
            <Row data-aos="fade-left" style = {{marginTop: '100px'}}>
                <img alt="1" src = {img1} style = {{height: '400px'}}/>
            </Row>
            <Row data-aos="fade-right" style = {{marginTop: '20px',height: '300px',backgroundColor: 'black'}}>
                <h1 style = {{color: '#f6f4ea', fontSize: '50px',fontWeight: 'bolder', marginTop: '50px', textAlign: 'center'}}>
                    Developers are often seen struggling to make the privacy policies for their applications. We are the one  
                    who can offer a help...
                </h1>
            </Row>
            <Row data-aos="fade-left" style = {{marginTop: '100px'}}>
                <img alt="2" src = {img2} style = {{height: '400px'}}/>
            </Row>
            <Row style = {{paddingTop: '100px'}}>
                <Col data-aos="fade-right" style = {{border: '2px solid black', borderRadius: '25px', margin: '20px'}}>
                    <p style = {{fontSize: '30px', marginTop: '30px'}}> 
                        Need to know how to integrate our services into your app?
                        <Row style = {{marginTop: '50px'}}>
                        <Col style = {{width: '10%'}}>
                            <Link to = '/'>
                                <button className = 'button1'>
                            Refer Docs
                                </button> 
                            </Link>
                        </Col>
                        </Row>
                    </p>
                </Col>
                <Col data-aos="fade-left" style = {{border: '2px solid black', borderRadius: '25px', margin: '20px'}}>
                    <p style = {{fontSize: '30px', marginTop: '30px'}}> 
                        SignUp / SignIn and get your privacy policies integrated right into your app!!!
                        <Row style = {{marginTop: '50px'}}>
                        <Col style = {{width: '10%'}}>
                        <Link to = '/signup'>
                            <button className='button2'>
                                Sign Up
                            </button>
                        </Link>
                        </Col>
                        </Row>
                    </p>
                </Col>
            </Row>
            <Row style = {{marginTop: '20px',height: '50px'}}>
            </Row>
        </Container>
    )
}
