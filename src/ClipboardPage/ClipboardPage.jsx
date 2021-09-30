import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './ClipboardPage.scss';
import AOS from 'aos';
import "aos/dist/aos.css";

class ClipboardPage extends Component {

    constructor(){
        super();
        this.state={
            array:""
        }
    }

    handleClick = ()=>{
        navigator.clipboard.writeText(this.state.array)
        alert("text copied");
    }

    componentDidMount(){
        AOS.init({duration:2000});
        let temp = "[";
        for(let i=0;i<this.props.location.state.permissions.length;i++){
            if(this.props.location.state.permissions[i]){
                temp+="true";
            }
            else{
                temp+="false";
            }
            if(i!=this.props.location.state.permissions.length-1) temp+=',';
        }
        temp+=']';
        this.setState({array:temp});
    }
    render() {
        return (
            <div className="clip-board-page">
                <h1>Copy Below Text</h1>
                <div data-aos="fade-right" onClick={this.handleClick} className="clipboard-container">
                    <h2 className="clipboard-text">{this.state.array}</h2>
                </div>
            </div>
        )
    }
    
}

export default withRouter(ClipboardPage);