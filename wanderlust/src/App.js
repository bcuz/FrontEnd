import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";
import Register from './components/Register'
import Login from './components/Login'
import Page from './components/PostsPage'
import Authenticate from './components/Authenticate'
import SearchBar from './components/SearchBar'
import PostsPage from './components/PostsPage'
import {NavLink} from 'react-router-dom'
import TGregister from './components/TGregister'
import TourCreate from './components/TourCreate'
import TourContainer from './components/TourContainer'
import UpdateTour from './components/updateTour'


function App() {
  return (
    <div className="App">
       <nav className ='nav'>
       {/* <NavLink to ='/'>Home</NavLink> */}

           <NavLink to ='/login'>Login</NavLink>
           <NavLink to ='/search'>Search Destinations</NavLink>
           <NavLink to ='/register'>Register</NavLink>
           <NavLink to ='/Tour-guide-register'>Register as a Tour Guide</NavLink>
           {/* https://wanderlust-api.herokuapp.com/auth/guide/register
    //  https://wanderlust-api.herokuapp.com/auth/user/register
    //  https://wanderlust-api.herokuapp.com/auth/login/ */}
 
      </nav>
      {/* <Route exact path = '/' component={App}/> */}
      <Route path = '/search' component = {SearchBar}/>
      <Route exact path = '/register' component = {Register}/>
      <Route path = '/Tour-guide-register' component = {TGregister}/>
      <Route path = '/create-tour' component = {TourCreate} />
      <Route path = '/tour' component = {TourContainer} />
      <Route path = '/update/:id' component = {UpdateTour} />




      <Route path = '/login' component = {Login} exact/>

      <h1 className ='headline'>WANDERLUST</h1>
      <img src = 'http://media4.picsearch.com/is?l5ZhLDv7SHBjZi5gBCok_Uiv1CZihXh5LiWcKrGXG_0&height=255'></img>
        {/* <Login/> */}
      {/* <SearchBar/> */}
      {/* <PostsPage/> */}
         <nav className ='nav'>
         {/* <NavLink to ='/'>Home</NavLink> */}

           <NavLink to ='/login'>Login</NavLink>
           <NavLink to ='/search'>Search Destinations</NavLink>
           <NavLink to ='/register'>Register</NavLink>
           <NavLink to ='/Tour-guide-register'>Register as a Tour Guide</NavLink>
           <NavLink to ='/create-tour'>Create A TOUR!!</NavLink>
           <NavLink to ='/tour'>See Tours</NavLink>
           <NavLink to ='/update/:id'>Update</NavLink>




 
      </nav>
        
          
    </div>
  );
}
const ConditionalView = Authenticate(SearchBar)(Login);

export default App;
