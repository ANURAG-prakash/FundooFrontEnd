import React, { Component } from 'react'

import './Icons/icons3';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Icons from './Icons/icons3';



var mymap = new Map();
var array = new Array();
var array2 = new Array();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 400,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(2);

  const classes = useStyles();


//   const changeBackground = (x) => {
//     setAreIconsOpen(true);
   
// };

//   const changeBackground2 = (x) => {
//     setAreIconsOpen(false);
   
// };


  return (
    <div>

      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={spacing}>
          {props.getnotes.slice(0).reverse().map((value) =>

            <Grid key={value.noteId} item>

              <Paper className={classes.paper}>

                <div className = "title"> <h3>{value.title}</h3></div>
                <div className = "message">{value.message}</div>
                 < Icons/>
              </Paper>

            </Grid>

          )}
        </Grid>
      </Grid>
     
    </div>
  );
}