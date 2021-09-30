import React, { Component } from 'react';
import './Form.scss';
import Img5 from '../Assets/img5.svg';
import { Divider } from '@mui/material';
import CheckBox from '../Components/Checkbox'
import  db  from '../FirbaseServices/Firebase';
import {firebase,storage} from '../FirbaseServices/Firebase';
import AOS from 'aos';
import "aos/dist/aos.css";
import { withRouter } from 'react-router';
import Navbar from '../Components/Navbar';

class Form extends Component {
    constructor(){
        super();
        this.state={
            third_party_services : [false,false,false,false,false,false,false],
            users_info : [false,false,false],
            app_name:"",
            company_name:"",
            contact:"",
            email:"",
            image:null,
            logo:'',
            appId:'',
            appLogo:null,
        }
    }
    componentDidMount(){
        AOS.init({duration:2000});
    }
    
    handleClick(itr){
        let arr = this.state.third_party_services
        arr[itr] = !arr[itr];
        this.setState({third_party_services:arr})
    }
    handleClickForUserInfo(itr){
        let arr = this.state.users_info
        arr[itr] = !arr[itr];
        this.setState({users_info:arr})
    }
    handleChange = (event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    handleFileChange = (Event)=>{
        setTimeout(() => {
            this.setState({image:Event.target.files[0]});
            console.log("image ",this.state.image);
        }, 0); 
    }
    imageHandler = (event)=>{
        const reader = new FileReader();
        reader.onload = ()=>{
          if(reader.readyState === 2){
            this.setState({appLogo:reader.result,image:event.target.files[0]});
          }
        }
        if(event.target.files[0])
          reader.readAsDataURL(event.target.files[0])
        console.log(event)
        
      }
    

    handleSubmit = async (event)=>{
        event.preventDefault();
        let email = this.state.email;
        let image = this.state.image;
        var appId = "";
        console.log(this.state.image);

        if(image){
            if(this.state.app_name.length && this.state.company_name.length && this.state.contact.length===10 && this.state.email.length){
            const uploadTask = storage.ref(`images/${image.name}`)
                    .put(image);
                    uploadTask.on(
                        "state_changed",
                        snapshot =>{},
                        error =>{
                            console.log(error);
                        },
                        ()=>{
                            storage
                            .ref("images")
                            .child(image.name)
                            .getDownloadURL()
                            .then(url =>{
                                console.log(url);
                                
                                    db.collection("apps").add({
                                        app_name : this.state.app_name,
                                        company_name:this.state.company_name,
                                        third_party_services:this.state.third_party_services,
                                        users_info:this.state.users_info,
                                        email: this.state.email,
                                        contact:this.state.contact,
                                        permissions:this.props.location.state.permissions,
                                        logo:url
                                      }).then(function(docRef) {
                                            console.log("id ",docRef.id);
                        //   --------------------------------------------------------------------------------------                  
                                            appId = docRef.id
                                            db.collection("clients").doc(email)
                                            .get()
                                            .then(function(doc) {
                                                if (doc.exists) {
                                                    db.collection("clients").doc(email).update({
                                                        apps:firebase.default.firestore.FieldValue.arrayUnion(docRef.id)
                                                    })
                                                } else {
                                                    let arr = [];
                                                    arr.push(docRef.id);
                                                    db.collection("clients").doc(email).set({
                                                        apps:arr
                                                    })
                                                }
                                                
                                            }).catch(function(error) {
                                                console.log("Error getting document:", error);
                                            });
                                            
                                      });
                                
                            })
                        }
                    )
                    setTimeout(() => {
                        console.log("Appid ",appId); 
                    }, 1000);
                     const {history} = this.props;
                     await history.push({pathname:"/clipboard-page",state:{
                        permissions:this.props.location.state.permissions,
                        appId:appId
                    }});
                    
                    
                }
                
                else{
                    if(this.state.contact.length!==10){
                        alert("Please fill valid contact number");
                    }
                    else{
                        alert("Please fill out all fields");
                    }
                    
                }
        }
        else{
            alert("Upload App Logo");
        }

        
        
    }

    render() {
        return (
            <div className="form-page">
                <Navbar/>
                <div data-aos="fade-right" className="form-container">
                    <div className="left">
                        <div className="left-col">
                            <div className="left-left">
                                <input onChange={this.handleChange} name="app_name" placeholder="App Name" className="input-box"/>
                                <input onChange={this.handleChange} name="company_name" placeholder="Company Name" className="input-box"/>
                            </div>
                            
                            <div className="app-logo">
                                <input accept="image/*" className="logo" id="contained-button-file" type="file" onChange={this.imageHandler}/>
                                {
                                    (this.state.image)?
                                    <label style={{height:'100px',width:'100px'}} htmlFor="contained-button-file">
                                        <img alt="app-logo" style={{height:'100px',width:'100px'}} className="image" src={this.state.appLogo} />
                                    </label> 
                                    :
                                    <p>App Logo</p>
                                }
                                
                            </div>
                        </div>
                        
                        
                        
                        <Divider style={{color:'black',width:'100%',margin:'10px 0px'}}/>
                        <div className="inner-container-wrapper">
                            <div className="form-inner-small-container">
                                <h3>Third Party Services</h3>
                                <div className="row-container">
                                    <div className="checkbox-container">
                                        <div style={{marginRight:'10px'}}>Admob</div>
                                        <CheckBox arr={this.state.third_party_services} itr={0} handleClick={(itr)=>this.handleClick(itr)}/>
                                    </div>
                                    <div className="checkbox-container">
                                        <div style={{marginRight:'10px'}}>FaceBook Ads</div>
                                        <CheckBox arr={this.state.third_party_services} itr={1} handleClick={(itr)=>this.handleClick(itr)}/>
                                    </div>
                                </div>
                                
                                <div className="row-container">
                                    <div className="checkbox-container">
                                        <div style={{marginRight:'10px'}}>Firebase</div>
                                        <CheckBox arr={this.state.third_party_services} itr={2} handleClick={(itr)=>this.handleClick(itr)}/>
                                    </div>
                                    <div className="checkbox-container">
                                        <div style={{marginRight:'10px'}}>Digital Ocean</div>
                                        <CheckBox arr={this.state.third_party_services} itr={3} handleClick={(itr)=>this.handleClick(itr)}/>
                                    </div>
                                </div>
                                <div className="row-container">
                                    <div className="checkbox-container">
                                        <div style={{marginRight:'10px'}}>Aws</div>
                                        <CheckBox arr={this.state.third_party_services} itr={4} handleClick={(itr)=>this.handleClick(itr)}/>
                                    </div>
                                    <div className="checkbox-container">
                                        <div style={{marginRight:'10px'}}>Gcp</div>
                                        <CheckBox arr={this.state.third_party_services} itr={5} handleClick={(itr)=>this.handleClick(itr)}/>
                                    </div>
                                </div>
                                <div className="row-container">
                                    <div className="checkbox-container">
                                        <div style={{marginRight:'10px'}}>Azure</div>
                                        <CheckBox arr={this.state.third_party_services} itr={6} handleClick={(itr)=>this.handleClick(itr)}/>
                                    </div>
                                </div>
                            </div>
{/* ----------------------------------------------------------------------------------------- */}

                            <div className="form-inner-small-container">
                                <h3>Information Collected</h3>
                                <div className="row-container">
                                    <div className="checkbox-container">
                                    <div style={{marginRight:'10px'}}>Username</div>
                                    <CheckBox arr={this.state.users_info} itr={0} handleClick={(itr)=>this.handleClickForUserInfo(itr)}/>
                                    </div>
                                </div>
                                <div className="row-container">
                                    <div className="checkbox-container">
                                        <div style={{marginRight:'10px'}}>Email</div>
                                        <CheckBox arr={this.state.users_info} itr={1} handleClick={(itr)=>this.handleClickForUserInfo(itr)}/>
                                    </div>
                                </div>
                                <div className="row-container">
                                    <div className="checkbox-container">
                                        <div style={{marginRight:'10px'}}>Mobile No.</div>
                                        <CheckBox arr={this.state.users_info} itr={2} handleClick={(itr)=>this.handleClickForUserInfo(itr)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider style={{color:'black',width:'100%',margin:'10px 0px'}}/>
                        <input onChange={this.handleChange} name="email" placeholder="Support Email" className="input-box"/>
                        <input onChange={this.handleChange} name="contact" placeholder="Support Contact" className="input-box"/>

                        <div onClick={this.handleSubmit} className="next-button">
                            Next
                        </div>
                    </div>
                    <div className="right">
                        <img className="form-image" src={Img5} alt="form-pic"></img>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default withRouter(Form);