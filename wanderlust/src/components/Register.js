import React from 'react';
import axios from 'axios';
import axiosAuth from '../reducers/axiosAuth'


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password:''
        };
    }
    
    changeHandle =e =>({[e.target.name]: e.target.value})

    // regSubmit = e => {
    //     const firstName = this.state.firstName;
    //     const password = this.state.password;
    //     const email = this.state.email;
    //     console.log(password)
    // }

    addUser = user =>{  
        axios 
        .post('https://wanderlust-api.herokuapp.com/auth/user/register', user)
        .then( res => {  localStorage.setItem('token',res.data.token)
    
        }
    
    
        )
        .catch (err =>{
            console.log(err)
        
    
        })
    
         console.log(user) }

    render(){

        return (
            <div className= 'reg'>
            <h1>Register</h1>

            <form 
            className ='regForm'
            
            type= 'submit'>
            <input
               type ='text'
               name ='userName'
               placeholder = 'userName'
               value={this.state.userName}
               onChange={this.changeHandle}/> 
             
               <input
               type ='password'
               name ='password'
               placeholder = 'password'
               value={this.state.password}
               onChange={this.changeHandle}/> 

               <button className ='regSubmit' onClick={this.addUser(this.state)}>SUBMIT</button>


            </form>
            


            </div>
        )
    }



}

export default Register