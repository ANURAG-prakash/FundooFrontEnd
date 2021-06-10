import React from 'react';
import './CreateNotes.css';
import AddIcons from '../components/Icons/update';



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
        

          <div className="NoteBody2">
            <form>
              <input type="text" placeholder="Title" name="title"  onChange = {e => this.handleChangeTitle(e)}/>

              <textarea name="content" placeholder="Take a note ......" onChange = {e => this.handleChangeNote(e)}/>

              <div className="Icons">

              <AddIcons title = {this.state.Title} message = {this.state.Note} pin ={this.state.IsPin} isOpen = {this.handleChangeClose} />
              
              </div>

            </form>

          </div>

         



        
      </>
    )



  }

}