import Axios from './axiosservices'

const axiosservice = new Axios();
const baseUrl = 'https://localhost:44392/api/'


const confignote = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('id')}`
    }
}

class Userservice {

    Registration = (data) => {
       
        return axiosservice.postMethod(`${baseUrl}User/Register`, data)
    }
    // GetNote = (data , header) => {
       
    //     return axiosservice.postMethod(`${baseUrl}notes/getNotesList`, data , header)
    // }

    Login = (data) => {
        return axiosservice.postMethod(`${baseUrl}User/Login`, data,)
    }

    Addnotes = (data) => {
        return axiosservice.postMethod(`${baseUrl}Notes`, data,confignote)
    }
    DisplayNote = () => {
        
        return axiosservice.getMethod(`${baseUrl}Notes`, confignote)
    }
}

export default Userservice 