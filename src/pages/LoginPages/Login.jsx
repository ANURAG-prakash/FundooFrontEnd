import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';
import { Redirect } from "react-router-dom";




export  default class RegistationPages extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            emailerror: false,
            passworderror: false,
            redirect: null
           
        }
    }

    signinpage = () => {

        this.setState({ redirect: "/registration"});
      }


    validation = () =>{
        let isError = false;
        const errors = this.state;
        errors.emailerror= this.state.email === '' ? true : false;
        errors.passworderror= this.state.password === '' ? true : false;
        this.setState({
            ...errors,
            // ...this.state
        })
        return isError = (errors.email!=='' && errors.password!=='' ) ? true : false
    }

    Next = () =>{
        var isValidated = this.validation();
        if(isValidated)
        {
            alert ("validation successfull");
        }
        
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
     }

    render() {
        if (this.state.redirect)
        {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className = "mainLogin">
    <div className = "containerlogin" >
        <div className="bodyLF">
               <div id="LF">F</div>
               <div id="LU">U</div>
               <div id="LN">N</div>
               <div id="LD">D</div>
               <div id="LO">O</div>
               <div id="LOO">O</div>
               <div id="LN">N</div>
               <div id="LOOO">O</div>
               <div id="LT">T</div>
               <div id="LE">E</div>
        </div>
        <div className="bodySI"> Sign In</div>
        <div className="bodyFA">Use your FundooNote Account</div>
        <div className="bodyLTE">
        <TextField
                 error = {this.state.emailerror}
                 label="Email" 
                 name="email"
                 type="text"
                 variant="outlined" 
                 size = "small"
                 fullWidth
                 onChange={e => this.change(e)}
                 helperText={this.state.emailerror ? "Enter Email" : ''} />
        </div>
        <div className="bodyLTP">
        
                 <TextField
                 error = {this.state.emailerror}
                 label="Password" 
                 name="password"
                 type="password"
                 variant="outlined" 
                 size = "small"
                 fullWidth
                 onChange={e => this.change(e)}
                 helperText={this.state.passworderror ? "Enter password" : ''} />
       
             </div>
        <div className="bodyLFP">Forget password? </div>
        <div className="bodyLP">Not your computer? Use Guest mode to sign in privately </div>
        <div className="bodyLLM">Learn More</div>
        <div className="bodyLB"><div id="CA"  ><Button  color= "primary" onClick = {this.signinpage}>Creat Account</Button></div><Button variant="contained" color="primary" onClick={this.Next}>Next</Button></div>
            
        </div>
        </div>
        
    

        )
    }
}
