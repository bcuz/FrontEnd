import React from 'react';
import axios from 'axios'
import TourContainer from './TourContainer'
import axiosAuth from '../reducers/axiosAuth'


class Upload extends React.Component{
    state = {
        selectedFile: null
    }


    fileSelector = e => {
        console.log(e.target.files[0])
    }

    fileUploadHandler =() => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axiosAuth().post(`https://wanderlust-api.herokuapp.com/api/tours/ `,fd)
        .then(res => {
            console.log(res);
        })
        
     }

    render(){
       return(
           <div>
               <input type ='file'/>
           <h1>Upload a Photo</h1>
           <h1>{this.props.id}</h1>
           {/* <TourContainer/> */}

           <button onClick ={this.fileUploadHandler}>Upload</button>
           </div>
       )


    }
}

export default Upload;