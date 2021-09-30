import React, { Component } from 'react';
import './Navbar.scss'
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';
import {signOut} from 'firebase/auth';
import {auth} from '../FirbaseServices/Firebase';
import {withRouter} from 'react-router-dom';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

class navbar extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  logout = ()=>{
    
    const {history} = this.props;
    signOut(auth)
    .then(()=>{
    localStorage.removeItem('token');
    history.push('/login');
    })
    .catch((e)=>alert(e.message));
  }

  componentDidMount(){
  }


    render() {
        return (
            <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...this.props}>
            <AppBar style={{backgroundColor:'black'}} className="appbar" >
                    <Toolbar>
                        <div className="nav">
                            <div className="left">
                                <div className="app-title"><Link style={{textDecoration:'none',color:'inherit'}} to="/">LegalSoft</Link></div>
                            </div>
                    
                            <div className="right">
                              <Link style={{textDecoration:'none',color:'inherit',marginRight:'40px'}} to="/">
                                <div className="docs">
                                  Docs
                                </div>
                              </Link>  
                              {
                                (this.props.login)? 
                                <Link style={{textDecoration:'none',color:'inherit',marginRight:'40px'}} to="/login">
                                  <div className="docs">
                                    Log in
                                  </div>
                                </Link>  
                                :(this.props.signup)?
                                  <Link style={{textDecoration:'none',color:'inherit',marginRight:'40px'}} to="/signup">
                                    <div className="docs">
                                      Signup
                                    </div>
                                  </Link>
                                :<div onClick={this.logout} className="logout">
                                  Logout
                                </div>
                                
                              }      
                              
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
          </React.Fragment>
        );
    }
}

export default withRouter(navbar);