import React, { Component } from 'react'
import './icons.css';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';
import Userservice from '../../Services/userservices';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';


const axios_service = new Userservice();

export default class IconsDisplayNote extends Component {
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
      IconsShow:false
    }
  }

  handleChangeArchive = () => {

      this.setState({ IsArchive: true })
      let data = {
        "noteId": this.props.oneNote.noteId,
      }
      axios_service.MakeArchive(data).then((result) => {
        console.log(result);
        this.props.getNoteMethod();

      }).catch((ex) => {
        console.log(ex)
      })
    
  }

  handleChangeTrash = () => {
      console.log(this.state.IsTrash)
      this.setState({ IsTrash: true })
      let data = {
        "noteId": this.props.oneNote.noteId
      }
      axios_service.MakeTrash(data).then((result) => {
        console.log(result);
        this.props.getNoteMethod();

      }).catch((ex) => {
        console.log(ex)
      })
    
  }
  changeit = (x) => {
    this.setState({IconsShow: true});

  };

  changeit2 = (x) => {
    this.setState({IconsShow: false});
  };


    
    render() {
        return (

          <div>

           {this.state.IconsShow ?

            <div className= "Icons" onMouseLeave = {this.changeit2}> 

                
                <IconButton onChange={e => this.handleChangeReminder(e)} key="Index">
                  <NotificationsNoneOutlinedIcon />
                </IconButton>
                

                
                <IconButton onChange={e => this.handleChangeCollaborator(e)} key="Reminder">
                  <PersonAddOutlinedIcon />
                </IconButton>
                

               
                <IconButton onChange={e => this.handleChangeImage(e)} key="Edit Label">
                  <ImageOutlinedIcon />
                </IconButton>
               

               
                <IconButton onClick={this.handleChangeArchive} key="Archive">
                  <ArchiveOutlinedIcon />
                </IconButton>


                <IconButton aria-label="Colour">
                <ColorLensOutlinedIcon  />
                </IconButton>
                

               
                <IconButton onClick={this.handleChangeTrash} key="Bin">
                <DeleteOutlinedIcon />
                </IconButton>
                

             

             </div>
             :

             <div onMouseEnter = {this.changeit} className= "BlankSpace"></div>
          } 
          </div>
            
        )
    }
}