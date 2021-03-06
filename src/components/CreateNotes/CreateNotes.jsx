import React from 'react';
import './CreateNotes.css';
import AddIcons from '../Icons/Icons';



export default class CreateNotes extends React.Component {
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
    this.setState({ Title:'' })
    this.setState({ Note:'' })

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

  resetState = () => {
    this.setState({ Title: '', Note: '' })
  }

  render() {

    return (
      <>
        {this.state.toOpenNote ?

          <div className="NoteBody">
            <form>
              <input type="text" placeholder="Title" name="title" onChange={e => this.handleChangeTitle(e)} />



              <textarea name="content" placeholder="Take a note ......" onChange={e => this.handleChangeNote(e)} />

              <div className="Icons">

                <AddIcons reset={this.resetState} getNoteMethod={this.props.getNoteMethod} title={this.state.Title} message={this.state.Note} pin={this.state.IsPin} isOpen={this.handleChangeClose} />

              </div>

            </form>

          </div>

          :

          <div className="NoteBody">
            <form>
              <input type="text"  placeholder="Take a note ......" name="title" onClick={e => this.handleChange()} />
            </form>

          </div>



        }
      </>
    )



  }

}