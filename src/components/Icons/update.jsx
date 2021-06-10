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

export default class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Reminder: new Date(),
      Color: '',
      Image: '',
      Collaborator: '',
      IsPin: false,
      IsArchive: false,
      IsTrash: true,
      TitleError: false,
      NoteError: false,
      toOpenNote: true,
    }
  }
 

  handleChangeReminder = () => {

  }

  handleChangeCollaborator = (e) => {
    console.log(e.target.value);
    this.setState({ Note: e.target.value })
  }

  
  handleChangeArchive = () => {

      console.log(this.state.IsArchive)
      this.setState({ IsArchive: true })
  }


  GetNotes = () => {
    axios_service.DisplayNote().then((result) => {
      console.log(result.data);
      this.setNote(result.data);
    }).catch((err) => {
      console.log(err);
    })
  }




  
  validation = () => {
    let isError = false;
    const errors = this.state;
    errors.TitleError = this.props.title === '' ? true : false;
    errors.NoteError = this.props.message === '' ? true : false;
    this.setState({

      ...errors
    })
    return isError = (this.props.title !== '' && this.props.message !== '') ? true : false
  }

  handleChange2 = () => {

    var isValidated = this.validation();
    console.log(this.props.title);
    console.log(this.props.message);
    console.log(this.state.isArchive);

    if (isValidated) {
      this.setState({ toOpenNote: false });
      let data = {
        "noteId":90003,
        "title": this.props.title,
        "message": this.props.message,
        "reminder": this.state.Reminder,
        "color": this.state.Color,
        "image": this.state.Image,
        "collaborator": this.state.Collaborator,
        "isPin": this.state.IsPin,
        "isArchive": this.state.IsArchive,
        "isTrash": this.state.IsTrash,
        "userId":100007
        
      };

      console.log(data);
      axios_service.Update(data).then((result) => {
        this.props.isOpen();
        console.log(this.props);
        console.log(result);

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