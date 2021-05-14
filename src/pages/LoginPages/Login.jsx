import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css'




export  default class RegistationPages extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            emailerror: false,
            passworderror: false
           
        }
    }


    validation = () =>{
        let isError = false;
        const errors = this.state;
        errors.emailerror= this.state.email === '' ? true : false;
        errors.passworderror= this.state.password === '' ? true : false;
        this.setState({
            ...errors,
            ...this.state
        })
        return isError = (errors.email!=='' && errors.password=='' ) ? true :false
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
        return (
            <div className = "mainLogin">
    <div className = "container1" >
        <div className="body11">
               <div id="Fd11">F</div>
               <div id="Fd21">U</div>
               <div id="Fd31">N</div>
               <div id="Fd41">D</div>
               <div id="Fd51">O</div>
               <div id="Fd61">O</div>
               <div id="Fd71">N</div>
               <div id="Fd81">O</div>
               <div id="Fd91">T</div>
               <div id="Fd101">E</div>
        </div>
        <div className="body21"> Sign In</div>
        <div className="body31">Use your FundooNote Account</div>
        <div className="body41">
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
        <div className="body51">
        <TextField 
            error = {this.state.passworderror} 
<<<<<<< HEAD
            label="PassWord"  
=======
            label="PassWord" 
>>>>>>> User
            name="password"
            type="text"
            variant="outlined" 
            size = "small" 
            fullWidth
            onChange={e => this.change(e)}
            helperText={this.state.passworderror ? "Enter PassWord" : ''}
             />
             </div>
        <div className="body61">Forget password? </div>
        <div className="body71">Not your computer? Use Guest mode to sign in privately </div>
        <div className="body81">Learn More</div>
        <div className="body91"><div id="CA" href="#" >Creat Account</div><Button variant="contained" color="primary" onClick={this.Next}>Next</Button></div>
            
        </div>
        </div>
        
    

        )
    }
}
