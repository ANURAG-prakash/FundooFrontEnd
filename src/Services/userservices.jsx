import Axios from './axiosservices'

const axiosservice = new Axios();
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/'

class Userservice {

    Registration = (data) => {
       
        return axiosservice.postMethod(`${baseUrl}user/user_userSignUp`, data)
    }
    // GetNote = (data , header) => {
       
    //     return axiosservice.postMethod(`${baseUrl}notes/getNotesList`, data , header)
    // }

    Login = (data) => {
        console.log(`${baseUrl}user/login`, data);
        return axiosservice.postMethod(`${baseUrl}user/login`, data)
    }
}

export default Userservice 