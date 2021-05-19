import Axios from './axiosservices'

const axiosservice = new Axios();
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/'

class Userservice {

    Registration = (data) => {
       
        return axiosservice.postMethod(`${baseUrl}user/userSignUp`, data)
    }
    // GetNote = (data , header) => {
       
    //     return axiosservice.postMethod(`${baseUrl}notes/getNotesList`, data , header)
    // }

    Login = (data) => {
        return axiosservice.postMethod(`${baseUrl}User/Login`, data)
    }
}

export default Userservice 