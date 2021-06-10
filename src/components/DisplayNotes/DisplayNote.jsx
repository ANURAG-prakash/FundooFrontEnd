import React, { Component } from 'react'
import Userservice from  '../../Services/userservices';
import '../Icons/iconsNew';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Icons from '../Icons/iconsNew';
import UpDate from '../UpdateNotes/updates'
import './DisplayNote.css'



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
  const [title, setTitle] = React.useState();
  const [message, setMessage] = React.useState();
  const [note, setNote] = React.useState({});

  const classes = useStyles();

  const handleClickOpen = (index) => {
    setNote(index);
    setOpen(true);
    console.log(note)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTitle = (e) => {
    console.log(e.target.value);
    setTitle( e.target.title )
  }

  const handleChangeNote = (e) => {
    console.log(e.target.value);
    this.setState( e.target.message )
  }

  const Update = (e) => {
    setOpen(false);
    let data = {
      "title": {title},
        "message": {message}
    }
    axios_service.Update(data).then((result) => {
      console.log(result);
      this.setState({ redirect: "/dashBoard" });

    }).catch((ex) => {
      console.log(ex)
    })

  };

  return (
    <div>

      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={spacing}>
          {props.getnotes.slice(0).reverse().map((value, index) =>

            <Grid key={value.noteId} item>

                <Paper className={classes.paper} className="paper">

                  <div>

                  <div className= "TitleMessage" onClick={() => handleClickOpen(value)}>
                  <div className="title-display"> <h3>{value.title}</h3></div>
                  <div className="message-display">{value.message}</div>
                  </div>
                  
                  <Icons oneNote={value}/>

                  </div>

                </Paper>

            </Grid>

          )}
        </Grid>
      </Grid>

      <UpDate oneNote = {note} open ={open} handleClose = {handleClose}/>

    </div>
  );
}