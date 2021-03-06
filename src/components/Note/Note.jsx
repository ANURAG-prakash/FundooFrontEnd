import React from 'react';
import Addnotes from '../../components/CreateNotes/CreateNotes';
import DisplayNote from '../../components/DisplayNotes/DisplayNote';
import Userservice from '../../Services/userservices';

const axios_service = new Userservice();


    export default function Note() {
       
      
        const [notes, setNote] = React.useState([]);
      
        React.useEffect(() => {
          GetNotes();
        }, [])
      
        const GetNotes = () => {
          axios_service.DisplayNote().then((result) => {
            console.log(result.data);
            setNote(result.data);
          }).catch((err) => {
            console.log(err);
          })
        }
    return (
        <div>
             <Addnotes getnotes={notes} getNoteMethod={GetNotes} />
        <DisplayNote getnotes={notes} getNoteMethod={GetNotes} />
        </div>
    )
}


