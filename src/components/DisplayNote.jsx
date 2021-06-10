import React, { Component } from 'react'
import Userservice from  '../Services/userservices';
import './Icons/icons3';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Icons from './Icons/icons3';



const axios_service = new Userservice();

var mymap = new Map();
var array = new Array();
var array2 = new Array();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(2);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();


//   const changeBackground = (x) => {
//     setAreIconsOpen(true);
   
// };

//   const changeBackground2 = (x) => {
//     setAreIconsOpen(false);
   
// };
const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};






  return (
    <div>

      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={spacing}>
          {props.getnotes.slice(0).reverse().map((value) =>

            <Grid key={value.noteId} item>

              <Paper className={classes.paper}>
                <>
                <div className= "TitleMessage" onClick={handleClickOpen}></div>
                <div className = "title"> <h3>{value.title}</h3></div>
                <div className = "message">{value.message}</div>
                </>
                 < Icons oneNote={value} open= {open} handleClose = {handleClose}/>
              </Paper>

            </Grid>

          )}
        </Grid>
      </Grid>
     
    </div>
  );
}