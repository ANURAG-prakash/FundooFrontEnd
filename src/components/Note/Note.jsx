import React from 'react';
import Addnotes from '../../components/CreateNotes/CreateNotes';
import DisplayNote from '../../components/DisplayNotes/DisplayNote';


    export default function Note() {
        const classes = useStyles();
        const theme = useTheme();
        const [open, setOpen] = React.useState(false);
      
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


