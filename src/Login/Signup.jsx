import React, { useState, useEffect } from 'react';
import {Label, Input, Container} from 'reactstrap';
import './Signup.css';
import {auth} from '../FirbaseServices/Firebase';
import {createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import {Link, withRouter} from 'react-router-dom';
import history from '../history';
function Signup(props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(props);
    const token = localStorage.getItem('token');
    if(token){
        history.push('/dashboard')
    }
}, [])
  const signup = () => {
    const {history} = props;
    setLoading(true);
    console.log(email + password);
    createUserWithEmailAndPassword(auth, email, password)
      .then(()=>{
        updateProfile(auth.currentUser, {displayName: email})
          .then(()=> history.push('/login'))
          .catch((e)=>alert(e.message));
      }).catch((e)=>alert(e.message))
      .finally(()=>{setLoading(false)});
  }
  return (
    <Container>
      <div className="form">
        <Label style={{marginBottom: '15px', color: '#4f0e0e'}} for="Email">Email</Label>
        <Input className = 'input' style = {{ marginBottom: '15px', color: '#4f0e0e'}} type="email" name="email" id="exampleEmail" placeholder="Enter the company email" onChange = {(e)=>{setEmail(e.target.value)}} />
        <Label style={{marginBottom: '15px', color: '#4f0e0e'}} for="examplePassword">Password</Label>
        <Input className = 'input' style = {{marginBottom: '35px', color: "#4f0e0e"}} type="password" name="password" id="examplePassword" placeholder="Set the password" onChange = {(e)=>{setPassword(e.target.value)}}/>
      <button className="button" onClick = {signup}>{(loading)?'Creating Account...':'Signup'}</button>
      </div>
      <p style = {{textAlign: 'center',padding: '20px'}}>Already have an account? <Link to = '/login'>Login</Link> here </p>
    </Container>
  ); 
}

export default withRouter(Signup);