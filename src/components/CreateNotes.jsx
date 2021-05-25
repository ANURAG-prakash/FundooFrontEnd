import React from 'react';
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Userservice from '../Services/userservices';
import './CreateNotes.css';
import Addicons from './icons';
import IconsCreateNote from '../components/Icons/Icons2';

const axios_service = new Userservice();


export default class registrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Note: '',
      toOpenNote: false,
    }
  }


  handleChange = () => {
    this.setState({ toOpenNote: true });
  }

  handleChangeTitle = (e) => {
    console.log(e.target.value);
    this.setState({ Title: e.target.value })
  }

  handleChangeNote = (e) => {
    console.log(e.target.value);
    this.setState({ Note: e.target.value })
  }

  handleChangeClose = () => {
    this.setState({ toOpenNote: false });
  }

  render() {

    return (
      <>
        {this.state.toOpenNote ?

          <div className="NoteBody">
            <form>
              <input type="text" placeholder="Title" name="title"  onChange = {e => this.handleChangeTitle(e)}/>

              <textarea name="content" placeholder="Take a note ......" onChange = {e => this.handleChangeNote(e)}/>

              <div className="Icons">

              <IconsCreateNote title = {this.state.Title} message = {this.state.Note} pin ={this.state.IsPin} isOpen = {this.handleChangeClose} />
               {/* <Addicons/>
              
               <Button  onClick={e => this.handleChange2()}> Close</Button> */}
              </div>

            </form>

          </div>

          :

          <div className="NoteBody">
            <form>
              <input type="text" placeholder="Title" name="title" onClick={e => this.handleChange()} />
            </form>

          </div>



        }
      </>
    )



  }

}