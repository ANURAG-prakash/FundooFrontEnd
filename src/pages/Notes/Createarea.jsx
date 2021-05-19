import React, { useState } from "react";
import './Createarea.css';


function CreateArea(props){
  const [ note,setNote ] = useState({
    title: "",
    content: "",
  });

function handleChange(e){
  // console.log(e.target.value);
  const{name , value} = e.target
  setNote(preValue =>{
    return {
      ...preValue,
      [name]:value,
    }
  })
}

function submiteButton(i) {
  i.preventDefault();
  console.log(i);
}


    return (
 <div className="addContainer">
             <form>
                 <input value={note.title} 
                 type="text" 
                 placeholder ="Title" 
                 name="title" 
                 onChange={handleChange}
                 />
                 <p> 
                   <textarea value={note.content}
                   name="content" 
                   placeholder ="Take a note ......"
                   onChange={handleChange}
                   />
                   
                     </p>
                     <button onClick={submiteButton}>Add</button>
             </form>

         </div> 
    );

}
export default CreateArea;
