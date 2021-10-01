import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './ClipboardPage.scss';
import AOS from 'aos';
import "aos/dist/aos.css";
import Navbar from '../Components/Navbar';

class ClipboardPage extends Component {

    constructor(){
        super();
        this.state={
            array:"",
        }
    }

    handleClick = ()=>{
        navigator.clipboard.writeText(this.state.array)
        alert("text copied");
    }
    handleAppidClick = ()=>{
        navigator.clipboard.writeText(this.props.location.state.appId);
        alert("text copied");
    }


    componentDidMount(){
        console.log(localStorage.getItem('data').object);
        AOS.init({duration:2000});
        let temp = "[";
        for(let i=0;i<this.props.location.state.permissions.length;i++){
            if(this.props.location.state.permissions[i]){
                temp+="true";
            }
            else{
                temp+="false";
            }
            if(i!==this.props.location.state.permissions.length-1) temp+=',';
        }
        temp+=']';
        this.setState({array:temp});
       
    }
    render() {
        return (
            <div className="clip-board-page">
                <Navbar/>
                <h1 style={{fontWeight:'900'}}>Click to copy</h1>
                <h2 style={{margin:'10px 0px'}}>Permission Array</h2>
                <div data-aos="fade-right" onClick={this.handleClick} className="clipboard-container">
                    <h2 className="clipboard-text">{this.state.array}</h2>
                </div>
                <h2 style={{marginTop:'20px'}}>App ID</h2>
                <div data-aos="fade-right" onClick={this.handleAppidClick} className="clipboard-container">
                    <h2 className="clipboard-text">{this.props.location.state.appId}</h2>
                </div>
            </div>
        )
    }
    
}

export default withRouter(ClipboardPage);