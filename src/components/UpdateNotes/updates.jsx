import React, { Component } from 'react'
import './Update.css'



import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import IconButton from '@material-ui/core/IconButton';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Userservice from '../../Services/userservices';
const axios_service = new Userservice();


export default class UpdateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: this.props.oneNote.title,
      Note: this.props.oneNote.message,
      Reminder: new Date(),
      Color: '',
      Image: '',
      Collaborator: '',
      IsPin: false,
      IsArchive: false,
      IsTrash: false,
      TitleError: false,
      NoteError: false,
      AreIconsOpen: false
    }
  }



  handleChangeTitle = (e) => {
    console.log(e.target.value);
    this.setState({ Title: e.target.value })
  }

  handleChangeNote = (e) => {
    console.log(e.target.value);
    this.setState({ Note: e.target.value })
  }





  validation = () => {

    console.log(this.state.Title)
    let isError = false;
    const errors = this.state;
    errors.TitleError = this.state.Title === '' ? true : false;
    errors.NoteError = this.state.Note === '' ? true : false;
    this.setState({

      ...errors
    })
    return isError = (this.state.Title !== '' && this.state.Note !== '') ? true : false
  }

  handleChange2 = () => {

    var isValidated = this.validation();
    console.log(this.state.Title);
    console.log(this.state.Note);
    console.log(this.state.isArchive);

    if (isValidated) {
      this.setState({ toOpenNote: false });
      let data = {
        "noteId": this.props.oneNote.noteId,
        "title": this.state.Title,
        "message": this.state.Note,
        "reminder": this.state.Reminder,
        "color": this.state.Color,
        "image": this.state.Image,
        "collaborator": this.state.Collaborator,
        "isPin": this.state.IsPin,
        "isArchive": this.state.IsArchive,
        "isTrash": this.state.IsTrash
      };

      console.log("validation successful");
      axios_service.Update(data).then((result) => {
        console.log(result);

      }).catch((err) => {
        console.log(err);
      })

    }

    if (!isValidated) {
      console.log("Not successful validation");
    }

  }






  render() {
    return (
      <div>
        

        <Dialog onClose={this.props.handleClose} aria-labelledby="simple-dialog-title" open={this.props.open} >

          <div className="NoteBody-update">


            <input className="text-Update" value={this.props.oneNote.title} type="text" name="title" onChange={e => this.handleChangeTitle(e)} />

            <textarea className="content-Update" value={this.props.oneNote.message} name="content" onChange={e => this.handleChangeNote(e)} />

            <div className="Icons-Update">
              <IconButton aria-label="Index">
                <NotificationsNoneOutlinedIcon />
              </IconButton>


              <IconButton aria-label="Reminder">
                <PersonAddOutlinedIcon />
              </IconButton>

              <IconButton aria-label="Edit Label">
                <ImageOutlinedIcon />
              </IconButton>

              <IconButton aria-label="Archive">
                <ArchiveOutlinedIcon />
              </IconButton>

              <IconButton aria-label="Colour">
                <ColorLensOutlinedIcon />
              </IconButton>

              < Button onClick={e => this.handleChange2()}>
                Close
              </Button>

            </div>

          </div>

        </Dialog>
               

      </div>
    )
  }
}