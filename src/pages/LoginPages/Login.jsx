import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';
import { Redirect } from "react-router-dom";
import Userservice from '../../Services/userservices';

const axios_service = new Userservice();

export  default class RegistationPages extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            emailerror: false,
            passworderror: false,
            redirect: null,
            loginOpen : false
           
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
            let data = {
                "email": this.state.Email,
                "password": this.state.Password
              };
            alert ("Login successfull");
            axios_service.Login(data).then((result) => {
                console.log(result);
                this.setState({loginOpen: true});
              setTimeout(() => this.setState({redirect: "/dashboard"}), 1000)
                
              })
            }
  
          if(!isValidated)
          {
            alert("validation unsuccessful");
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
        <div className="bodyText">
        <div className="bodyLTE">
        <TextField
                 error = {this.state.emailerror}
                 label="Email" 
                 name="email"
                 type="Email"
                 variant="outlined" 
                 size = "large"
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
                 size = "large"
                 fullWidth
                 onChange={e => this.change(e)}
                 helperText={this.state.passworderror ? "Enter password" : ''} />
       
             </div>
        <div className="bodyLFP">Forget password? </div>
        <div className="bodyLP">Not your computer? Use Guest mode to sign in privately </div>
        <div className="bodyLLM">Learn More</div>
        </div>
        <div className="bodyLB"><Button  color= "primary" onClick = {this.signinpage}><div id="CA">Create Account</div></Button><Button variant="contained" color="primary" onClick={this.Next}>Next</Button></div>   
        </div>
        </div>
        )
    }
}