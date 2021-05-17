import React from 'react'
import axios from 'axios'

export default class Axios extends React.Component {

    constructor(props) {

        super(props)
        this.state = {


        }
    }

    componentDidMount(){

        // //get (baseurl, data, header)
        // axios.post('https://jsonplaceholder.typicode.com/users/')
        // .then((res)=>{
        //     console.log(res.data);
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    

        post(baseurl, data, header)
        axios.post('http://fundoonotes.incubation.bridgelabz.com/explorer/#!/user_userSignUp')
        .then((res)=>{
             console.log(res.data);
         })
         .catch((err)=>{
            console.log(err)
         })
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then()
    //     .catch()
     }

    render() {
        return (
            <div>
                <h3>Axiosss</h3>
            </div>
        )
    }
}

export default Axios