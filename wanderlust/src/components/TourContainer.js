import React from 'react';
import Tour from './Tour';
import {deleteTour, updateTour} from './TourCreate';
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import {Route} from 'react-router-dom'


  
class TourContainer extends React.Component {
	constructor(props){
		super(props);
		this.state ={ tours: []};
	}
	
 
	// deleteTour= e => {
             
	// 	axios
	// 	  .delete(`https://wanderlust-api.herokuapp.com/api/tours${e.id}`)
	// 	  .then(res => {
	// 		const tour = res.data;
	// 	  //   this.setState({tour})
	// 		console.log('DELETE??', res.data)
	// 	  })
	// 	  .catch(err => console.error(err))
	//   }

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

			<ul>
                {this.state.tours.map (e => {
					return (
						<div>

							<h1>{e.location}</h1>
							<h1>{e.max_duration} days</h1>
							<h1>{e.type}</h1>
							<button onClick ={()=>this.props.deleteTour(e.id) }>{e.id}</button>
							<NavLink to ={`/update/${e.id}`}>Update {e.id}</NavLink>
                              <NavLink to ={`/uploadPhoto/${e.id}`}>Upload-Photo</NavLink>
 						</div>

					)
				})}

			</ul>
		</div>)

		
	 }
	
	
};

export default TourContainer;