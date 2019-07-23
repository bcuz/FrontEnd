 
        
        
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
                   tour: { 
                       max_duration:'',
                       location:'',
                       type:''
                    },
                    tours: []
                  };
            }
              
        
        
        
            
            addNew =   e => {
                 
                 axiosAuth()
                .post('https://wanderlust-api.herokuapp.com/api/tours', e)
                    .then(res => {
                      const tour = res.data
                      console.log('this', tour);
                      
                      this.setState({ tours: [...this.state.tours , tour] })
                      console.log("!!!!",tour)
                      console.log(' NEW:',tour)
        
                    })
                    .catch(err => console.error(err))
                 }
                   
                 
                updateTour = e => {
                    axiosAuth()
                     
                     .put(`https://wanderlust-api.herokuapp.com/api/tours/${e.id}`, e)
                     
                     
                    .then(res => {
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
        
                        return axios.get('https://wanderlust-api.herokuapp.com/api/tours')
                        .then(res=> {
                          let tours = res.data
                          this.setState({tours: res.data})
                    
                          console.log("TOURS:", tours)
                    
                        })
                        .catch(err => {
                          console.log('Server Error', err)
                        })
                      })
                      .catch(err => {
                       console.log(`Sorry, but you are getting the error ${err} within the deleteTour function`)
                      });
                  };
        
            addTour = e => {
                e.preventDefault();
               const tour = this.state.tour
        
                 this.addNew(tour)
                this.setState( {  
                    tour: { 
                        max_duration:'',
                        location:'',
                        type:''
                     },
               })
                console.log('STATE',this.state)
                console.log('NEW!!', tour)
                   
            }
            handleInputChange = e => {
                this.setState({
                    tour: {
                      ...this.state.tour,
                      [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
                    }
                  });
              };
        
              handleDelete = e => {
                  this.setState({[e.target.name]: e.target.value})
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
         
                      
                      <div className = 'tourForm'  >
        
        
         
                         
                              <div className ='info'>
        
                                 {/* <div className ='header'>
                                 <h1> {this.state.tourName}
        </h1>  
                                 </div> */}
        
                                 <div className = 'threeDiv'>
                                     <div className ='picDiv'>

                                       <img src = 'data:image/jpeg;base64,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'/> 
                                     </div>
        
                                     <div className ='placeHolder'>
                                     <h4>duration:</h4>
        
                                        <h4>location:</h4>
                                        <h4>tour type:</h4>
        
                                         
        
                                         
                                        
        
        
                                     </div>
                                        
        
                                        <div className ='data'>
        
                                        <h3>{this.state.tour.max_duration}</h3>
                                        <h3>{this.state.tour.location}</h3>
                                        <h3>{this.state.tour.type}</h3>
        
                                        
        
                                        </div>
                                         
                                       
        
        
        
        
                                 </div>
        
                                 {/* <div className = 'desP'>
        
                                  <p>{this.state.description}</p>
                                  
                                             
        </div> */}
        <div>
                <ul>
            {this.state.tours.map (e => {
                return (
                    <div className ='Stuff'>
        
                        <h2> {e.location}</h2>
                        <h2>{e.type}</h2>
                        <h2>{e.max_duration}</h2>
                        <button onClick ={()=>this.deleteTour(e.id) }>x</button>
        
                    </div>
        
                )
            })}
        
        </ul>
                    
                    
                    </div>   
        
                              </div>
                      <form onSubmit ={this.addTour}>
                      
                          
                            <input
                           onChange = {this.handleInputChange}
                           placeholder = 'duration'
                           type ='number'
                           value = {this.state.tour.max_duration}
                           name='max_duration'
                           />
                            <input
                           onChange = {this.handleInputChange}
                           placeholder = 'location'
                           value = {this.state.tour.location}
                           name='location'
                           />
                            <input
                           onChange = {this.handleInputChange}
                           placeholder = 'tour type'
                           value = {this.state.tour.type}
                           name='type'
                           />
                            <input
                           type = 'number'
                           onChange = {this.handleDelete}
                           value ={this.state.id}
                           name = 'id'
                           placeholder = 'id'/> 
                             
                           <button type ='submit'>Add a Tour!</button>
                           {/* <button onClick= {this.deleteTour}>Delete</button> */}
        
        
        
        
        
        
        
        
        
        
                      </form>
                 
        
        
        </div>
                             
                      
        
                    
                  );
              }
        }
        
        
        
        
        export default TourCreate
        