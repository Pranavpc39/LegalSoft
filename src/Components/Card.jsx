import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './Card.scss';
import { IconButton } from '@material-ui/core';
import CheckIcon from '@mui/icons-material/Check';
import { Button} from '@mui/material';
import AOS from 'aos';
import "aos/dist/aos.css";

class Card extends Component {

    constructor(){
        super();
        
        this.state={
            isChecked:[false,false,false,false,false,false],
        }
    }
    componentDidMount(){
        AOS.init({duration:2000});
    }

    handleClick(itr){
        let arr = this.state.isChecked
        arr[itr] = !arr[itr];
        this.setState({isChecked:arr})
        console.log(this.state.isChecked);
        this.props.handleClick(itr);
    }

    render() {
        return (
            <motion.div 
                 
                className="per-container">
                    <div className="per-inner-container">
                        <motion.div 
                            initial={{
                                x:0,
                                y:0,
                                padding:'5px'
                            }}
                            animate={{
                                y:[0,3,0,-3,0],
                            }}
                            transition={{
                                repeat:Infinity
                            }}
                        >
                            <IconButton>
                                {this.props.item.logo}
                            </IconButton>
                        </motion.div>
                        <div className="info-section">
                            <p>{this.props.item.info}</p>
                        </div>
                        {
                            (!this.state.isChecked[this.props.itr])?
                            <motion.div
                                animate={{
                                    transform:['rotate(360deg)','rotate(-360deg)','rotate(0deg)'],
                                }}
                                transition={{
                                    duration:1
                                }}
                            >
                                <Button
                                    style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}
                                    onClick={()=>this.handleClick(this.props.itr)}
                                    className="check-box"
                                >
                                </Button>
                            </motion.div>
                            :<motion.div 
                                onClick={()=>this.handleClick(this.props.itr)}
                                initial={{
                                    transform:'rotate(0deg)',
                                }}
                                animate={{
                                    transform:['rotate(360deg)','rotate(-360deg)','rotate(0deg)'],
                                }}
                                transition={{
                                    duration:1
                                }}
                            >
                            <IconButton className="checkicon">
                                <CheckIcon style={{color:'green'}}/>
                            </IconButton>
                        </motion.div>
                    }      
                    </div>
                </motion.div>
        );
    }
}

export default Card;
