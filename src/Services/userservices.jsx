import Axios from './axiosservices'

const axiosservice = new Axios();
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/explorer/#!/'

class Userservice {

    Registration = (data) => {
       
        return axiosservice.postMethod(`${baseUrl}user/user_userSignUp`, data)
    }
    // GetNote = (data , header) => {
       
    //     return axiosservice.postMethod(`${baseUrl}notes/getNotesList`, data , header)
    // }
}

export default Userservice 