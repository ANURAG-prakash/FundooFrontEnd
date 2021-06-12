import React, { Component } from 'react';
import '../../components/Icons/icons.css';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';
import Userservice from '../../Services/userservices';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';


const axios_service = new Userservice();

export default class IconsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Reminder: new Date(),
      Color: '',
      Image: '',
      Collaborator: '',
      IsPin: false,
      IsArchive: false,
      IsTrash: false,
      TitleError: false,
      NoteError: false,
      IconsShow:false
    }
  }

  handleChangeUnTrash = () => {

      this.setState({ IsTrash: false })
      let data = {
        "noteId": this.props.oneNote.noteId,
      }
      axios_service.MakeUnTrash(data).then((result) => {
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
      axios_service.MakeDelete(data).then((result) => {
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

                
               

               
                <IconButton onClick={this.handleChangeUnTrash} key="UnTrash">
                  <RestoreFromTrashIcon />
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