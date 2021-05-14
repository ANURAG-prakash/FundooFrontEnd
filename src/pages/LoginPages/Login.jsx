import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css'




export default class RegistationPages extends React.Component{
    constructor(){
        super()
        this.state = {
            title : ' Use your FundooNote Account  ',
           
        }
    }


    handleChange = (e) => {
        console.log(e.target.value);
    }

    render() {
        return (
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
            label="Email or phone" 
            variant="outlined" 
            size = "small" 
            fullWidth />
        </div>
        <div className="body51">
        <TextField  
            label="PassWord" 
            variant="outlined" 
            size = "small" 
            fullWidth />
        </div>
        <div className="body61">Forget password? </div>
        <div className="body71">Not your computer? Use Guest mode to sign in privately </div>
        <div className="body81">Learn More</div>
        <div className="body91"><div id="CA" href="#" >Creat Account</div><Button variant="contained" color="primary" onclick={this.Next}>Next</Button></div>
            
        </div>
        
    

        )
    }
}