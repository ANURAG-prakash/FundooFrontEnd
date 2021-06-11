import React, { Component } from 'react'
import './DisplayNote.css';
import Userservice from '../../Services/userservices';

import Icons from '../Icons/iconsNew';
import UpdateNote from '../UpdateNotes/updates';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const axios_service = new Userservice();

var mymap = new Map();
var array = new Array();
var array2 = new Array();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 250,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(2);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState();
  const [message, setMessage] = React.useState();
  const [note, setNote] = React.useState({});

  const classes = useStyles();

  const handleClickOpen = (value) => {
    console.log(value)
    setNote(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>

      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={spacing}>
          {props.getnotes.map((value, index) =>
            
            <Grid key={value.noteId} item>

                <Paper className={classes.paper} className="paper">

                  <div>
                  <div className= "TitleMessage" onClick={() => handleClickOpen(value)}>
                  <div className="title"> <h3>{value.title}</h3></div>
                  <div className="message">{value.message}</div>
                  </div>
                  
                  <Icons oneNote={value} getNoteMethod={props.getNoteMethod}/>

                  </div>

                </Paper>

            </Grid>

          )}
        </Grid>
      </Grid>

      <UpdateNote oneNote = {note} open ={open} handleClose = {handleClose} getNoteMethod={props.getNoteMethod}/>

    </div>
  );
}