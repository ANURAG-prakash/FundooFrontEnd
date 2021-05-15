import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Registation.css';
import Button from '@material-ui/core/Button';
import Userservice from '../../Services/userservices'


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
            cpassworderror: false
           
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
            ...this.state
        })
        return isError = (errors.fName!=='' && errors.lName!=='' && errors.email!=='' && errors.password=='' && errors.cpassword=='') ? true :false
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
            "password": this.state.password,
            "confirmpassword": this.state.cpassword    
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
        return (
           
            
            <div className="main">
            <div className="container">
                <div className ="row1">
            <div className="body1">
               <div id="Fd1">F</div>
               <div id="Fd2">U</div>
               <div id="Fd3">N</div>
               <div id="Fd4">D</div>
               <div id="Fd5">O</div>
               <div id="Fd6">O</div>
               <div id="Fd7">N</div>
               <div id="Fd8">O</div>
               <div id="Fd9">T</div>
               <div id="Fd10">E</div>
            </div>
            <div className ="body2">Create your FundooNote Account</div>
            <div className ="body3">
                <TextField
                id="FL1"
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
                  id="FL2"
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
            <div className="body4"> <TextField
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
            <div className="body5"> Use My Current Email Address </div>
            <div className="body6">
            <TextField 
            error = {this.state.passworderror} 
            label="PassWord" 
            name="password"
            type="text"
            variant="outlined" 
            size = "small" 
            onChange={e => this.change(e)}
            helperText={this.state.passworderror ? "Enter PassWord" : ''}
             />
             <TextField  
             error = {this.state.cpassworderror} 
            label="Confirm"
            name="cpassword" 
            type="text"
            variant="outlined" 
            size = "small" 
            onChange={e => this.change(e)}
            helperText={this.state.cpassworderror ? "Enter confirm PassWord" : ''} />
            </div>
            <div className="body7">
            <FormControlLabel 
            control={<Checkbox name="checkedC" />} 
            label="ShowPassword" />
            </div>
            <div className="body8"><div id="SI" ><a onClick = {this.signinpage}> Sign In Instead </a></div><Button variant="contained" color="primary" onClick={this.Next}>Next</Button></div>
            </div>
            <div className="row2"></div>
        </div>
        </div>
                
        )
    }
}