import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Registation.css';
import Button from '@material-ui/core/Button';
import Userservice from '../../Services/userservices';
import image from '../../assests/gmailimage.svg';
import { Redirect } from "react-router-dom";


const axios_service = new Userservice();
export  default class RegistationPages extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fName: '',
            lName: '', 
            email: '',
            password: '',
            cpassword: '',
            fNameerror: false,
            lNameerror: false,
            emailerror: false,
            passworderror: false,
            cpassworderror: false,
            redirect: null
           
        }
    }

    signinpage = () => {

        this.setState({ redirect: "/login"});
      }

      

    validation = () =>{
        let isError = false;
        const errors = this.state;
        errors.fNameerror= this.state.fName === '' ? true : false;
        errors.lNameerror= this.state.lName === '' ? true : false;
        errors.emailerror= this.state.email === '' ? true : false;
        errors.passworderror= this.state.password === '' ? true : false;
        errors.cpassworderror= this.state.cpassword === '' ? true : false;
         
        this.setState({
            ...errors,
            // ...this.state
        })
        return isError = (errors.fName!=='' && errors.lName!=='' && errors.email!=='' && errors.password!=='' && errors.cpassword!=='') ? true :false
    }

    Next = () =>{
        var isValidated = this.validation();
        if(!isValidated)
        {
            alert (isValidated,this.state);
        }
        if(isValidated)
        {
          let data = {
            "firstName": this.state.fName,
            "lastName": this.state.lName,
            "email": this.state.email,
            "service": "advance",
            "password": this.state.password   
          };
          alert("Account Created successful");
          axios_service.Registration(data).then((result) => {
              console.log(result);
              if(result.data.data.success){
                console.log("***********************success*******************")
                localStorage.setItem('user_details', result.data.data);
                this.setState({redirect: "/Dashboard"});
              }

          })
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
           
            
            <div className="main">
            <div className="container">
                <div className ="rowFirst">
            <div className="bodySFD">
               <div id="SF">F</div>
               <div id="SU">U</div>
               <div id="SN">N</div>
               <div id="SD">D</div>
               <div id="SO">O</div>
               <div id="SOO">O</div>
               <div id="SN">N</div>
               <div id="SOOO">O</div>
               <div id="ST">T</div>
               <div id="SE">E</div>
            </div>
            <div className ="bodySCA">Create your FundooNote Account</div>
            <div className ="bodySTN">
                <TextField
                id="FLF"
                error = {this.state.fNameerror}
                name="fName"
                 label="FirstName" 
                 variant="outlined" 
                 size = "small"
                 type="text"
                 onChange={e => this.change(e)}
                 helperText={this.state.fNameerror ? "Enter First Name" : ''}
                 />
                 
                  <TextField
                  id="FLS"
                  error = {this.state.lNameerror}
                  name="lName"
                 label="LastName" 
                 type="text"
                 variant="outlined" 
                 size = "small"
                 onChange={e => this.change(e)}
                 helperText={this.state.lNameerror ? "Enter last Name" : ''}
                 />

            </div>
            <div className="bodySTE"> <TextField
                 error = {this.state.emailerror}
                 label="Email" 
                 name="email"
                 type="text"
                 variant="outlined" 
                 size = "small"
                 fullWidth
                 onChange={e => this.change(e)}
                 helperText={this.state.emailerror ? "Enter Email" : ''}
                 
                 /></div>
            <div className="bodySCE"> Use My Current Email Address </div>
            <div className="bodySTP">
            <TextField 
            error = {this.state.passworderror} 
            label="PassWord" 
            name="password"
            type="password"
            variant="outlined" 
            size = "small" 
            onChange={e => this.change(e)}
            helperText={this.state.passworderror ? "Enter PassWord" : ''}
             />
             <TextField  
             error = {this.state.cpassworderror} 
            label="Confirm"
            name="cpassword" 
            type="password"
            variant="outlined" 
            size = "small" 
            onChange={e => this.change(e)}
            helperText={this.state.cpassworderror ? "Enter confirm PassWord" : ''} />
            </div>
            {/* <div className="bodySCB">
            <FormControlLabel 
            control={<Checkbox name="checkedC" />} 
            label="ShowPassword" />
            </div> */}
            <div className="bodySSU"><div id="SI" ><Button   onClick = {this.signinpage}>Sign In</Button></div><Button variant="contained" color="primary" onClick={this.Next}>Next</Button></div>
            </div>
            <div className="rowSecond">
             <img class= "image" src = {image}  /> <div id="text">
             One account. All of Fundoo working for you. 
             </div>
            </div>
        </div>
        </div>
                
        )
    }
}