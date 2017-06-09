import React, {Component} from 'react'
import axios from 'axios'
import LocationsList from '../Locations/LocationsList'

class LocationsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      // selected: null,
      locationQuery: "",
      locationResults: "",
      locationsBase: []

    }

      // console.log(locationsBase, 'this is working');
    this.handleOnChange = this.handleOnChange.bind(this)
    this.searchLocations = this.searchLocations.bind(this)
  }
  componentDidMount(){
    this.setState({
      locationsBase:[
        {name: "Pick a branch" , address: ""},
        {name: "Anacostia" , address: "1800 Good Hope Rd SE"},
        {name: "Bellevue" , address: "115 Atlantic St SW"},
        {name: "Benning" , address: "3935 Benning Rd NE"},
        {name: "Capitol View" , address: "5001 Central Ave SE"},
        {name: "Chevy Chase" , address: "5625 Connecticut Ave NW"},
        {name: "Cleveland Park" , address: "4340 Connecticut Ave NW"},
        {name: "Deanwood" , address: "1350 49th St NE"},
        {name: "Francis A. Gregory" , address: "3660 Alabama Ave SE"},
        {name: "Georgetown" , address: "3260 R St NW"},
        {name: "Lamond-Riggs" , address: "5401 South Dakota Ave NE"},
        {name: "Library Express" , address: "1990 K St NW"},
        {name: "MLK Memorial" , address: "901 G St NW"},
        {name: "Mt. Pleasant" , address: "3160 16th St NW"},
        {name: "Northeast" , address: "330 7th St NE"},
        {name: "Northwest One" , address: "155 L St NW"},
        {name: "Palisades" , address: "4901 V St NW"},
        {name: "Parklands-Turner" , address: "1547 Alabama Ave SE"},
        {name: "Petworth", address: "4200 Kansas Ave NW"},
        {name: "Rosedale" , address: "1701 Gales St NE"},
        {name: "Shaw" , address: "1630 7th St NW"},
        {name: "Shepherd Park" , address: "7420 Georgia Ave NW"},
        {name: "Southeast" , address: "403 7th St SE"},
        {name: "Southwest" , address: "900 Wesley Place SW"},
        {name: "Takoma Park" , address: "416 Cedar St NW"},
        {name: "Tenley-Friendship" , address: "4450 Wisconsin Ave NW"},
        {name: "West End" , address: "2522 Virginia Ave NW"},
        {name: "Woodridge" , address: "1801 Hamlin St NE"}
      ]
    }, () => {
      console.log(this.state.locationsBase)
    })
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

      let options = this.state.locationsBase.map((item, index) => {
        return(
          <option key={index + 1} value={this.state.locationsBase}>{item.name}</option>
          //kicks out to 1. Anacostia, etc
        )
        options.unshift(
          <option key="0">Pick your location</option>
        )
      })

// onClick={this.searchLocations}>

    return (
      <div>
        <h3>Choose your branch!</h3>
        <select className="menu" name="locationQuery" onChange={this.searchLocations}>
          {options}
          {/* <option value={this.state.locationQuery}>Anacostia</option>
          <option value={this.state.locationQuery}>Bellevue</option>
          <option value={this.state.locationQuery}>Benning</option>
          <option value={this.state.locationQuery}>Capitol View</option>
          <option value={this.state.locationQuery}>Chevy Chase</option>
          <option value={this.state.locationQuery}>Cleveland Park</option>
          <option value={this.state.locationQuery}>Deanwood</option> */}

        </select>


        <p>{this.state.locationResults}</p>



        <div>
          {/* <LocationsList locations={this.state.locationResults} /> */}
        </div>
      </div>

    )
  }
}


export default LocationsContainer
