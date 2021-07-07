import React from 'react';
import axios from 'axios';


class TGregister extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password:''
        };
    }
    
    //  addGuide = user =>{  
    // axios
    // .post('https://wanderlust-api.herokuapp.com/auth/guide/register', user)
    // .then( res => {  localStorage.setItem('token',res.data.token)
    // console.log("HAY", user)

    // }


    // )
    // .catch (err =>{
    //     console.log(err)
    

    // })}

    addUser = e =>  {  
        e.preventDefault();
        console.log(this.state)
        axios 
        .post('https://wanderlust-api.herokuapp.com/auth/guide/register', this.state)
        .then( res => {  localStorage.setItem('token',res.data.token)
    
        }
    
    
        )
        .catch (err =>{
            console.log(err)
        
    
        })
    
         console.log('ADDUSER STATE', this.state) }

    changeHandle =e =>  this.setState({ [e.target.name]: e.target.value });


    

    render(){

        return (
            <div className= 'reg'>
            <h3>Register</h3>
            <h3>as a Tour Guide</h3>

            <form 
            className ='regForm'
            
            type= 'submit'>
            <input
               type ='text'
               name ='username'
               placeholder = 'First-Name'
               value={this.state.username}
               onChange={this.changeHandle}/> 
                <input
               type ='password'
               name ='password'
               placeholder = 'password'
               value={this.state.password}
               onChange={this.changeHandle}/> 
               
               

               <button  type = 'submit' className ='regSubmit' onClick ={this.addUser}>SUBMIT</button>


            </form>
            


            </div>
        )
    }



}

export default TGregister