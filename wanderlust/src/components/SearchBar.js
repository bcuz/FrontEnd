import React, { Component } from 'react'
//  import dummyData from '../dummyData'
 import Place from './Place';
 import axios from 'axios';

 

 
export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
     tours: [],
       search: ''
    }
  }

  updateSearch(e) {
    this.setState({search: e.target.value})
  }

  

  onChange = e => {
    this.setState({search: e.target.value})
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
 
// THIS ONE!!
  render() {
    
     let filteredPlaces =  this.state.tours.filter(
      (e)=> {
        return e.location.indexOf(this.state.search)!== -1;
      }
    );
    return (
      <div>

        <div className ='searchTop'>
        <h1 className ='destinations'>DESTINATIONS</h1>
            <input
                    className ='search'
                    type="search"
                    placeholder='Search'
                    value={this.state.search}
                    onKeyDown={this.state.searchPostsHandler}
                    onChange = {this.onChange}
                  />
        </div>
 
        <ul>
          {filteredPlaces.map ((e)=> {
            return<Place location ={e.location}
                         type ={e.type}
                         max_duration ={e.max_duration}
                        user_id= {e.user_id}
            key = {e.id}/>
             
          })}
        </ul>
        
                   <input
                    type="search"
                    placeholder='Search'
                    value={this.state.search}
                    onKeyDown={this.state.searchPostsHandler}
                    onChange = {this.onChange}
                  />
           
       </div>
    )
  }
}




 