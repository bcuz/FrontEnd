import React from 'react';
import axios from 'axios';
import axiosAuth from '../reducers/axiosAuth';


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password:''
        };
    }
    
    changeHandle =e => this.setState({[e.target.name]: e.target.value})

    // regSubmit = e => {
    //     const firstName = this.state.firstName;
    //     const password = this.state.password;
    //     const email = this.state.email;
    //     console.log(password)
    // }

    

    addUser = e =>  {  
        e.preventDefault();
        console.log(this.state)
        axios 
        .post('https://wanderlust-api.herokuapp.com/auth/user/register', this.state)
        .then( res => {  localStorage.setItem('token',res.data.token)
    
        }
    
    
        )
        .catch (err =>{
            console.log(err)
        
    
        })
    
         console.log('ADDUSER STATE', this.state) }

         addPerson = e => {
            e.preventDefault();
           const user = this.state
    
             this.addUser(user)
            this.setState( {  
             username:'',
            password:'',
            
           })
            console.log('STATE',this.state)
            console.log('NEW!!', user)
               
        }

         

    render(){

        return (
            <div className= 'reg'>
            <h1>Register</h1>

            <form 
            className ='regForm'
            
            type= 'submit'  >
            <input
               type ='text'
               name ='username'
               placeholder = 'userName'
               value={this.state.username}
               onChange={this.changeHandle}/> 
             
               <input
               type ='password'
               name ='password'
               placeholder = 'password'
               value={this.state.password}
               onChange={this.changeHandle}/> 

               <button type = 'submit' className ='regSubmit' onClick={this.addUser}>SUBMIT</button>


            </form>
            


            </div>
        )
    }



}

export default Register