import React from 'react';
import PostContainer from './TourContainer';
import dummyData from '../dummyData';
import '../App.css';

const Post = props => {
    console.log(props)
    return(
        <div className ='post'>
        {/* <img src ={props.img} alt ='PIC'/>  */}
        <h1>{props.location}</h1>
        <h1>{props.type}</h1>
        <h2> duration: {props.max_duration} days</h2>


        </div>
    )
}

export default Post;