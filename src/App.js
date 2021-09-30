import React, {useState, useEffect} from 'react';
import Homepage from './homepage/Homepage';
import Login from './Login/Login';
import SignUP from './Login/Signup';
import DataContact from './Dashboard/DataForm';
import FormPage from './Formpage/Form';
import PermissionPage from './Permissionpage/PermissionPage';
import './App.css';
import { Router , Route, Switch } from 'react-router-dom';
import {auth} from './FirbaseServices/Firebase';
import { onAuthStateChanged } from '@firebase/auth';
import history from './history';
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, user => {setUser(user)})
  }, [])

  return (
    <Router history = {history}>
    <Switch>
      <Route exact path = '/'>
        <Homepage />
      </Route>
      <Route exact path = '/signup'>
        <SignUP />
      </Route>
      <Route exact path = '/login'>
        <Login />
      </Route>
      <Route exact path = '/dashboard'>
        <DataContact/>
      </Route>
      <Route exact path = '/form-page'>
        <FormPage/>
      </Route>
      <Route exact path = '/permission-page'>
        <PermissionPage/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;