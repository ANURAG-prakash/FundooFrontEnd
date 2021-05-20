import Axios from './axiosservices'

const axiosservice = new Axios();
const baseUrl = 'https://localhost:44392/api/'

class Userservice {

    Registration = (data) => {
       
        return axiosservice.postMethod(`${baseUrl}User/Register`, data)
    }
    // GetNote = (data , header) => {
       
    //     return axiosservice.postMethod(`${baseUrl}notes/getNotesList`, data , header)
    // }

    Login = (data) => {
        return axiosservice.postMethod(`${baseUrl}User/Login`, data)
    }
}

export default Userservice 