import React, {useState, useEffect } from 'react'
import {Label, Input, Container} from 'reactstrap';
import {Link,withRouter} from 'react-router-dom';
import {auth} from '../FirbaseServices/Firebase';
import {signInWithEmailAndPassword} from '@firebase/auth';
import history from '../history';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            history.push('/permission-page');
        }
    }, [])
    const login = () => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            localStorage.setItem('token', userCredential.user.getIdToken());
            history.push('/permission-page');
        })
        .catch((e)=>alert(e.message))
        .finally(()=>setLoading(false))
    }
    return (
        <Container>
          <div className="form">
            <Label style={{marginBottom: '15px', color: 'black'}} for="Email">Email</Label>
            <Input className = 'input' style = {{ marginBottom: '15px', color: 'black'}} type="email" name="email" id="exampleEmail" placeholder="Enter the company email" onChange = {(e)=>{setEmail(e.target.value)}} />
            <Label style={{marginBottom: '15px', color: 'black'}} for="examplePassword">Password</Label>
            <Input className = 'input' style = {{marginBottom: '35px', color: "black"}} type="password" name="password" id="examplePassword" placeholder="Set the password" onChange = {(e)=>{setPassword(e.target.value)}}/>
          <button className="button" onClick = {login}>{(loading)?'Logging in...':'Login'}</button>
          </div>
          <p style = {{textAlign: 'center',padding: '20px'}}>Don't have an account?<Link to ='/signup'> Signup </Link>here </p>
        </Container>
      ); 
}

export default withRouter(Login);