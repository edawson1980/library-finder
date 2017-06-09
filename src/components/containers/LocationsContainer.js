import React, {Component} from 'react'
import axios from 'axios'
import LocationsList from '../Locations/LocationsList'

class LocationsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      // selected: null,
      locationQuery: "",
      locationResults: ""
    }
     var locationsBase=[
      {name: "Anacostia" , address: "1800 Good Hope Rd SE"},
      {name: "Bellevue" , address: "115 Atlantic St SW"},
      {name: "Benning" , address: "3935 Benning Rd NE"},
      {name: "Capitol View" , address: "5001 Central Ave SE"}
    ]
      // console.log(locationsBase, 'this is working');
    this.handleOnChange = this.handleOnChange.bind(this)
    this.searchLocations = this.searchLocations.bind(this)
  }

  handleOnChange(e) {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  searchLocations(e){
    e.preventDefault()
    let selectedLocation = this.state.locationQuery
    this.setState({
      locationResults: this.state.selectedLocation
    })
    console.log(selectedLocation, 'something is working')
  }


  getMaps(e) {
    e.preventDefault()
    // console.log(this.state.titleQuery)
    let address = this.state.pizza.address
    //pretty sure that's not right

    
    var url = "https://maps.googleapis.com/maps/api/staticmap?center=" + address +"&zoom=14&size=400x400&markers=color:blue%7Csize=small%7C"+ address +"&key=AIzaSyC1VFtSkzUv302ClmH1uGLHwIyzthAAaqo"

    axios.get(url).then((response) => {
      console.log(response)
      this.setState({
        searchResults: response.data.items,
      })
    })
  }




  render (){
  //   let locationsBase=[
  //    {name: "Anacostia" , address: "1800 Good Hope Rd SE"},
  //    {name: "Bellevue" , address: "115 Atlantic St SW"},
  //    {name: "Benning" , address: "3935 Benning Rd NE"},
  //    {name: "Capitol View" , address: "5001 Central Ave SE"}
  //  ]

    // var createDrop = function(locationsBase){
    //   console.log(locationsBase, 'this is working');
    //   let pizza = this.props.locationsBase.map((name, index) => {
    //     console.log(pizza)
    //     return(
    //       <option key={index + 1} value={this.state.locationQuery}>{pizza.name}</option>
    //       //kicks out to 1. Anacostia, etc
    //
    //     )
    //
    //     pizza.unshift(
    //       <option key="0">Pick your location</option>
    //     )
    //   })
    // }

// onClick={this.searchLocations}>

    return (
      <div>
        <h3>Choose your branch!</h3>
        <select className="menu" name="locationQuery" onChange={this.searchLocations}>
          {/* {pizza} */}
          <option value={this.state.locationQuery}>Anacostia</option>
          <option value={this.state.locationQuery}>Bellevue</option>
          <option value={this.state.locationQuery}>Benning</option>
          <option value={this.state.locationQuery}>Capitol View</option>
          <option value={this.state.locationQuery}>Chevy Chase</option>
          <option value={this.state.locationQuery}>Cleveland Park</option>
          <option value={this.state.locationQuery}>Deanwood</option>

        </select>


        <p>{this.state.locationResults}</p>



        <div>
          <LocationsList locations={this.state.locationResults} />
        </div>
      </div>

    )
  }
}


export default LocationsContainer
