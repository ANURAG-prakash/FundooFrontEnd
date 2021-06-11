import React, { Component } from 'react'

import './icons.css';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import IconButton from '@material-ui/core/IconButton';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Button from '@material-ui/core/Button';


import Userservice from '../../Services/userservices';

const axios_service = new Userservice();

export default class IconsCreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Note: '',
      Reminder: new Date(),
      Color: '',
      Image: '',
      Collaborator: '',
      IsPin: false,
      IsArchive: false,
      IsTrash: true,
      TitleError: false,
      NoteError: false,
      toOpenNote: true
    }
  }

  static getDerivedStateFromProps(props){
    return {Title : props.title, Note : props.message}
  }

  validation = () => {
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

    if (isValidated) {
      this.setState({ toOpenNote: false });
      let data = {
        "title": this.props.title,
        "message": this.props.message,
        "reminder": this.state.Reminder,
        "color": this.state.Color,
        "image": this.state.Image,
        "collaborator": this.state.Collaborator,
        "isPin": this.state.IsPin,
        "isArchive": this.state.IsArchive,
        "isTrash": this.state.IsTrash
      };

      console.log("validation successful");
      axios_service.AddNote(data).then((result) => {
        this.props.isOpen();
        console.log(this.props);
        console.log(result);
        this.props.getNoteMethod();
        this.props.reset();

      }).catch((err) => {
        console.log(err);
      })

    }

    if(!isValidated){
      this.props.isOpen();
      console.log(this.props);
      this.setState({ toOpenNote: false });
    }

  }








    render() {

        return (
            <div className = "Iconss">

                <IconButton aria-label="Index">
                <NotificationsNoneOutlinedIcon  />
                </IconButton>


                <IconButton aria-label="Reminder">
                <PersonAddOutlinedIcon  />
                </IconButton>

                <IconButton aria-label="Edit Label">
                <ImageOutlinedIcon />
                </IconButton>

                <IconButton aria-label="Archive">
                <ArchiveOutlinedIcon  />
                </IconButton>

                <IconButton aria-label="Colour">
                <ColorLensOutlinedIcon  />
                </IconButton>

                <IconButton aria-label="MoreIcons">
                <MoreVertOutlinedIcon  />
                </IconButton>
                <Button onClick={e => this.handleChange2()}>
                  Close
                </Button>

            </div>
        )
    }
}