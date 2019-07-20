import React from 'react';
import '../TourCreate.css';
import axios from 'axios';
import '../dummyData';
import TourContainer from './TourContainer';
import dummyData from '../dummyData';
import axiosAuth from '../reducers/axiosAuth'
class TourCreate extends React.Component{
    constructor(props){
        super(props)
        this.state =  {
             max_duration:'',
            location:'',
          type:'',
          };
    }
      



    
    addNew =   e => {
         
         axiosAuth()
        .post('https://wanderlust-api.herokuapp.com/api/tours', e)
            .then(res => {
              const tour = res.data
            //   this.setState({ ...this.state.tours , tour })
              console.log("!!!!",tour)
              console.log(' NEW:',tour)

            })
            .catch(err => console.error(err))
         }
           
         
        update = e => {
            axiosAuth()
             
             .put(`https://wanderlust-api.herokuapp.com/api/tours/${e.id}`, e)
             
             
            .then(res => {
                console.log('==>>>',e.id)
            let tour = {
                location: '',
                max_duration: '',
                type:''
            }
 
            })
            .catch (err => console.log(err))
            
        }
        
   

        deleteTour = id => {
            axiosAuth()
           
              .delete(`https://wanderlust-api.herokuapp.com/api/tours/${id}`)
              .then(response => {
                  
                console.log(response)
              })
              .catch(err => {
               console.log(`Sorry, but you are getting the error ${err} within the deleteTour function`)
              });
          };

    addTour = e => {
        e.preventDefault();
       const tour = this.state

         this.addNew(tour)
        this.setState( {  
         max_duration:'',
        location:'',
        type:'',
        id:''
       })
        console.log('STATE',this.state)
        console.log('NEW!!', tour)
           
    }

    updateTour = e => {
        e.preventDefault();
         const tour = this.state
        this.update(tour)
             this.setState( {  
                max_duration:'',
               location:'',
               type:'',
               

        })
        console.log('==>',tour.id)
    }



    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      handleDelete = e => {
          this.setState({[e.target.name]: e.target.value})
      }
       handleUpdate = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

  //     componentDidMount(){
	// 	axios.get('https://wanderlust-api.herokuapp.com/api/tours')
	// 	.then(res=> {
	// 	  let tours = res.data
	// 	  this.setState(()=> ({tours: res.data}))
	
	// 	  console.log("TOURS:", tours)
	
	// 	})
	// 	.then(res => {
	// 	  console.log("NEWSTATE!!",this.state)
	// 	 })
	// 	.catch(err => {
	// 	  console.log('Server Error', err)
	// 	})
		
 	// }
        

      render(){
          return(
 
              
              <div className = 'tourForm'>


 
                 
                      <div className ='info'>

                         <div className ='header'>
                         <h1> {this.state.tourName}
</h1>  
                         </div>

                         <div className = 'threeDiv'>
                             <div className ='picDiv'></div>

                             <div className ='placeHolder'>
                             <h4>duration:</h4>

                                <h4>location:</h4>
                                <h4>tour type:</h4>

                                 

                                 
                                


                             </div>
                                

                                <div className ='data'>

                                <h3>{this.state.max_duration}</h3>
                                <h3>{this.state.location}</h3>
                                <h3>{this.state.type}</h3>
                                <h3 onClick ={console.log()}>{this.state.id}</h3>
                                

                                </div>
                                 
                               




                         </div>

                         <div className = 'desP'>

                          <p>{this.state.description}</p>
                          
                                     
</div>
{/* <div>
        <ul>
    {this.state.tours.map (e => {
        return (
            <div className ='Stuff'>

                <h2> {e.location}</h2>
                <h2>{e.type}</h2>
                <h2>{e.max_duration}</h2>
            </div>

        )
    })}

</ul>
            
            
            </div>    */}
            <TourContainer deleteTour ={this.deleteTour} updateTour = {this.updateTour}/>

                      </div>
              <form onSubmit ={this.addTour}>
              
                  
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
                   type = 'number'
                   onChange = {this.handleDelete}
                   value ={this.state.id}
                   name = 'id'
                   placeholder = 'id'/>
                     
                   <button type ='submit'>Add a Tour!</button>
 









              </form>

            
              <form onSubmit ={this.updateTour}>
              
                  
                    <input
                   onChange = {this.handleUpdate}
                   placeholder = 'duration'
                   type ='number'
                   value = {this.state.max_duration}
                   name='max_duration'
                   />
                    <input
                   onChange = {this.handleUpdate}
                   placeholder = 'location'
                   value = {this.state.location}
                   name='location'
                   />
                    <input
                   onChange = {this.handleUpdate}
                   placeholder = 'tour type'
                   value = {this.state.type}
                   name='type'
                   />
                   <input
                   type = 'number'
                   onChange = {this.updateTour}
                   value ={this.state.id}
                   name = 'id'
                   placeholder = 'id'/>
                     
                   <button type ='submit'>Update!</button>
 









              </form>
         


</div>
                     
              

            
          );
      }
}




export default TourCreate