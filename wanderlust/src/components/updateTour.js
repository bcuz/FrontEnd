import React from 'react';
import axios from 'axios';
import axiosAuth from '../reducers/axiosAuth'


class UpdateTour extends React.Component{
    constructor(props){
        super(props)
        this.state =  {
            tours:[]
          };
    }


    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };


    update = e => {
           const id = this.props.match.params.id;
        
         axiosAuth()
         
         
         .put(`https://wanderlust-api.herokuapp.com/api/tours/${e.id}`,{ location: this.state.location,max_duration: this.state.max_duration, type:this.state.type})
         
         
        .then(res => {
            console.log(res.data)
            //  this.props.updateTour(res.data)
            // this.props.history.push('/')
        

        })
        .catch (err => console.log(err))
        
    }

    updateTour = e => {
        e.preventDefault();
         const tour = this.state
        this.update(tour)
             this.setState( {  
                max_duration:'',
               location:'',
               type:'',
               id:''

        })
        console.log('==>',tour.id,tour.location)
        console.log('STATE', this.state)

    }

  
      componentDidMount(){
		axios.get('https://wanderlust-api.herokuapp.com/api/tours')
		.then(res=> {
		  let tours = res.data
		  this.setState(()=> ({tours: res.data}))
	
		  console.log("TOURS:", tours)
	
		})
		.then(res => {
		  console.log("NEWSTATE!!",this.state)
		 })
		.catch(err => {
		  console.log('Server Error', err)
		})
		
 	}


    render(){

        return(
        <div>

            <div>
                      <ul>
                     {this.state.tours.map (e => {
                         return (
                             <div className ='Stuff'>
                 
                                 <h2> {e.location}</h2>
                                 <h2>{e.type}</h2>
                                 <h2>{e.max_duration}</h2>
                                 <button onClick= {console.log('HEY',e.location,e.max_duration,e.type)}>{e.id}</button>

                             </div>
                 
                         )
                     })}
                 
                 </ul>
              
            </div>

             <form>

             <input
                   onChange = {this.handleInputChange}
                   placeholder = 'duration'
                   type ='number'
                   value = {this.state.max_duration}
                   name='max_duration'
                   />
                    <input
                   onChange = {this.handleInputChange}
                   placeholder = 'location'
                   value = {this.state.location}
                   name='location'
                   />
                    <input
                   onChange = {this.handleInputChange}
                   placeholder = 'tour type'
                   value = {this.state.type}
                   name='type'
                   />
                    <input
                   onChange = {this.handleInputChange}
                   placeholder = 'id'
                   type ='number'
                   value = {this.state.id}
                   name='id'
                   />

             <button type = 'submit' onClick ={this.updateTour}>SUBMIT</button>

 




             </form>

        </div>
        );
    }
}




export default UpdateTour