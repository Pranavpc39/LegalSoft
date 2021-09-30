import React, { Component } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './PermissionPage.scss';
import Img2 from '../Assets/img2.svg';
import Img3 from '../Assets/img3.svg';
import Img4 from '../Assets/img4.svg';
import Img5 from '../Assets/img8.svg';
import Img6 from '../Assets/img9.svg';
import Img7 from '../Assets/img10.svg';

import BackgroundImg from '../Assets/backgroundImg.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import Card from '../Components/Card';
import { Call, CameraAlt, ContactMail, MicRounded } from '@material-ui/icons';
import { Storage } from '@mui/icons-material';
import {withRouter} from 'react-router-dom';
import Navbar from '../Components/Navbar';


let permissions = [
    {
        logo:<MicRounded style={{color:'white'}} fontSize="large"/>,
        info:'Click on the check box if your app requires permission regarding Microphone',
        checkBox:false,
    },
    {
        logo:<LocationOnIcon style={{color:'white'}} fontSize="large"/>,
        info:'Click on the check box if your app requires permission regarding location/GPS',
        checkBox:false,
    },
    {
        logo:<CameraAlt style={{color:'white'}} fontSize="large"/>,
        info:'Click on the check box if your app requires permission regarding Camera',
        checkBox:false,
    },
    {
        logo:<Storage style={{color:'white'}} fontSize="large"/>,
        info:'Click on the check box if your app requires permission regarding Storage',
        checkBox:false,
    },
    {
        logo:<Call style={{color:'white'}} fontSize="large"/>,
        info:'Click on the check box if your app requires permission regarding Calls',
        checkBox:false,
    },
    {
        logo:<ContactMail style={{color:'white'}} fontSize="large"/>,
        info:'Click on the check box if your app requires permission regarding Contacts',
        checkBox:false,
    },
]


class PermissionPage extends Component {
    constructor(props){
        super(props);
        this.state={
            isChecked:[false,false,false,false,false,false],
        }
    }

    handleClick = (itr)=>{
        let arr = this.state.isChecked;
        arr[itr] = !arr[itr];
        this.setState({isChecked:arr})
        console.log("permissions : ",this.state.isChecked);
    }

    handleNextClick = ()=>{
        const {history} = this.props;
        history.push({pathname:"/form-page",state:{
            permissions:this.state.isChecked
        }});
    }

    componentDidMount(){
        AOS.init({duration:2000});
    }

    render() {
        return (
            <div className="per-page">
                <Navbar/>
                <div className="top-container">
                    <img
                    className="image"
                    src={BackgroundImg}
                    style={{width:'100vw',left:'0'}} 
                    alt="background-img">
                    
                    </img>
                    <div className="heading" data-aos="fade-right">
                        We'll Help you with your policy
                    </div>
                    
                </div>
{/* ----------------------------------------------------------------------------------------- */}

                <div data-aos="fade-up" style={{margin:'20px 0px'}}>
                    <h1  style={{fontSize:'2.5rem',fontWeight:'900'}}>
                        Why We Need Microphone Permission
                    </h1>
                </div>
                
                <div className="img-container" data-aos="fade-right">
                    <img className="img" src={Img5} alt="2"/>
                </div>
                <div data-aos="fade-right" style={{margin:'20px'}}>
                    <h1 style={{fontSize:'30px'}}><i>" They are also a gateway to a massive amount of our personal data. ... 
                        Both Apple's iOS and Google's Android systems have evolved to contain very robust data permission regimes and,
                        in general, apps ask your permission to access your data because they need it for one function or another "</i></h1>
                </div>           
                <div className="card-container" data-aos="fade-left">
                    <Card handleClick = {this.handleClick} item={permissions[0]} itr={0}/>
                </div>
{/* ----------------------------------------------------------------------------------------- */}


{/* ----------------------------------------------------------------------------------------- */}

<div data-aos="fade-up" style={{margin:'20px 0px'}}>
                    <h1  style={{fontSize:'2.5rem',fontWeight:'900'}}>
                        Why We Need Location Permission
                    </h1>
                </div>

                <div className="img-container" data-aos="fade-right">
                    <img className="img" src={Img2} alt="4"/>
                </div>
                <div data-aos="fade-right" style={{margin:'20px'}}>
                    <h1 style={{fontSize:'30px'}}><i>" They are also a gateway to a massive amount of our personal data. ... 
                        Both Apple's iOS and Google's Android systems have evolved to contain very robust data permission regimes and,
                        in general, apps ask your permission to access your data because they need it for one function or another "</i></h1>
                </div>                
                <div data-aos="fade-left">
                    <Card handleClick = {this.handleClick} item={permissions[1]} itr={1}/>
                </div>

{/* ----------------------------------------------------------------------------------------- */}

                <div data-aos="fade-up" style={{margin:'20px 0px'}}>
                    <h1  style={{fontSize:'2.5rem',fontWeight:'900'}}>
                        Why We Need Camera Permission
                    </h1>
                </div>

                <div className="img-container" data-aos="fade-right">
                    <img className="img" src={Img3} alt="3"/>
                </div>
                <div data-aos="fade-right" style={{margin:'20px'}}>
                    <h1 style={{fontSize:'30px'}}><i>" They are also a gateway to a massive amount of our personal data. ... 
                        Both Apple's iOS and Google's Android systems have evolved to contain very robust data permission regimes and,
                        in general, apps ask your permission to access your data because they need it for one function or another "</i></h1>
                </div>

                <div data-aos="fade-left">
                    <Card handleClick = {this.handleClick} item={permissions[2]} itr={2}/>
                </div>
{/* ----------------------------------------------------------------------------------------- */}

                <div data-aos="fade-up" style={{margin:'20px 0px'}}>
                    <h1  style={{fontSize:'2.5rem',fontWeight:'900'}}>
                        Why We Need Storage Permission
                    </h1>
                </div>

                <div className="img-container" data-aos="fade-right">
                    <img className="img" src={Img4} alt="4"/>
                </div>
                <div data-aos="fade-right" style={{margin:'20px'}}>
                    <h1 style={{fontSize:'30px'}}><i>" They are also a gateway to a massive amount of our personal data. ... 
                        Both Apple's iOS and Google's Android systems have evolved to contain very robust data permission regimes and,
                        in general, apps ask your permission to access your data because they need it for one function or another "</i></h1>
                </div>                
                <div data-aos="fade-left">
                    <Card handleClick = {this.handleClick} item={permissions[3]} itr={3}/>
                </div>

{/* ----------------------------------------------------------------------------------------- */}


{/* ----------------------------------------------------------------------------------------- */}

<div data-aos="fade-up" style={{margin:'20px 0px'}}>
                    <h1  style={{fontSize:'2.5rem',fontWeight:'900'}}>
                        Why We Need Call Permission
                    </h1>
                </div>

                <div className="img-container" data-aos="fade-right">
                    <img className="img" src={Img6} alt="4"/>
                </div>
                <div data-aos="fade-right" style={{margin:'20px'}}>
                    <h1 style={{fontSize:'30px'}}><i>" They are also a gateway to a massive amount of our personal data. ... 
                        Both Apple's iOS and Google's Android systems have evolved to contain very robust data permission regimes and,
                        in general, apps ask your permission to access your data because they need it for one function or another "</i></h1>
                </div>                
                <div data-aos="fade-left">
                    <Card handleClick = {this.handleClick} item={permissions[4]} itr={4}/>
                </div>

{/* ----------------------------------------------------------------------------------------- */}

{/* ----------------------------------------------------------------------------------------- */}

<div data-aos="fade-up" style={{margin:'20px 0px'}}>
                    <h1  style={{fontSize:'2.5rem',fontWeight:'900'}}>
                        Why We Need to access Contacts
                    </h1>
                </div>

                <div className="img-container" data-aos="fade-right">
                    <img className="img" src={Img7} alt="4"/>
                </div>
                <div data-aos="fade-right" style={{margin:'20px'}}>
                    <h1 style={{fontSize:'30px'}}><i>" They are also a gateway to a massive amount of our personal data. ... 
                        Both Apple's iOS and Google's Android systems have evolved to contain very robust data permission regimes and,
                        in general, apps ask your permission to access your data because they need it for one function or another "</i></h1>
                </div>                
                <div data-aos="fade-left">
                    <Card handleClick = {this.handleClick} item={permissions[5]} itr={5}/>
                </div>

{/* ----------------------------------------------------------------------------------------- */}

                <div onClick={this.handleNextClick} className="next-button">
                    Next
                </div>
                
            </div>
            
        );
    }
}

export default withRouter(PermissionPage);


