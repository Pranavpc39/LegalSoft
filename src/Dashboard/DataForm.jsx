
import React, {useEffect} from 'react';
import {signOut} from '@firebase/auth';
import {auth} from '../FirbaseServices/Firebase';
import history from '../history';
export default function DataForm() {
    const logout = () => {
        signOut(auth)
        .then(()=>{
        localStorage.removeItem('token');
        history.push('/login');
        })
        .catch((e)=>alert(e.message));
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            history.push('/login')
        }
    }, [])
    return (
        <div>
            <button onClick = {logout}>Logout</button>
        </div>
    )
}
