import React from 'react';
import Addnotes from '../../components/CreateNotes/CreateNotes';
import DisplayNote from './DisplayArchive';
import Userservice from '../../Services/userservices';

const axios_service = new Userservice();


    export default function Trash() {
       
      
        const [notes, setNote] = React.useState([]);
      
        React.useEffect(() => {
          GetNotes();
        }, [])
      
        const GetNotes = () => {
          axios_service. DisplayArchive().then((result) => {
            console.log(result.data);
            setNote(result.data);
          }).catch((err) => {
            console.log(err);
          })
        }
    return (
        <div>
             
        <DisplayNote getnotes={notes} getNoteMethod={GetNotes} />
        </div>
    )
}
