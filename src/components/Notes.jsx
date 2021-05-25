import React from 'react';
import addIcons from './icons';
import './CreateNotes.css';
import './icons';
import Button from '@material-ui/core/Button';
import Addicons from './icons';

function Note(props)
{
    return(
        <div className ="note">
            <h1>Hellow</h1>
            <p>My first note</p>
            <div className="Icons">
               <Addicons/>
              
              
              </div>
        </div>
    );
}
export default Note;