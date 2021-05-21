import React from 'react';
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Userservice from '../Services/userservices';
import './CreateNotes.css';
import Addicons from './icons';
const axios_service = new Userservice();

export default class registrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Note: '',
      Reminder: '',
      Color: '',
      Image: '',
      Collaborator: '',
      IsPin: false,
      IsArchive: false,
      IsTrash: false,
      UserId : '',
      Titleerror : false,
      Noteerror : false,
      toOpenNote: false,
    }
  }



  validation = () => {
    let isError = false;
    const errors = this.state;
    errors.TitleError = this.state.Title === '' ? true : false;
    errors.NoteError = this.state.Note === '' ? true : false;
    this.setState({

      ...errors
    })
    return isError = (errors.Title !== '' && errors.Note !== '') ? true : false
  }

  handleChange = () => {
    this.setState({ toOpenNote: true });
  }

  handleChange2 = () => {
    this.setState({ toOpenNote: false });
  }

  handleChangeTitle = (e) => {
    console.log(e.target.value);
    this.setState({ Title: e.target.value })
  }

  handleChangeNote = (e) => {
    console.log(e.target.value);
    this.setState({ Note: e.target.value })
  }

  Next = () => {

    var isValidated = this.validation();
  

    if (isValidated) {
      let data = {
        "tile": this.state.Title,
        "message": this.state.Note,
        "reminder": this.state.Reminder,
        "color": this.state.Color,
        "image": this.state.Image,
        "collaborator": this.state.Collaborator,
        "isPin": this.state.isPin,
        "isArchive": this.state.isArchive,
        "isTrash": this.state.isTrash,
        "userId": this.state.UserId
      };

      console.log("Note Added");
      axios_service.AddNote(data).then((result) => {
        console.log(result);

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
      <>
        {this.state.toOpenNote ?

          <div className="NoteBody">
            <form>
              <input type="text" placeholder="Title" name="title"  onChange = {e => this.handleChangeTitle(e)}/>

              <textarea name="content" placeholder="Take a note ......" onChange = {e => this.handleChangeNote(e)}/>

              <div className="Icons">
               <Addicons/>
              
               <Button  onClick={e => this.handleChange2()}> Close</Button>
              </div>

            </form>

          </div>

          :

          <div className="NoteBody">
            <form>
              <input type="text" placeholder="Take a note...." name="title" onClick={e => this.handleChange()} />
            </form>

          </div>



        }
      </>
    )



  }

}