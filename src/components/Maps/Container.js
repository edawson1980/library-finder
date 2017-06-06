import React, {Component} from 'react'
import {GoogleApiWrapper} from 'GoogleMapsReactComponent'

import Map from './Map.js'

export class Container extends Component{
  render (){
    const style = {
      width: '400px',
      height: '400px'
    }
    if(!this.props.loaded){
      return <div>Loading...</div>
    }
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: '__AIzaSyC1VFtSkzUv302ClmH1uGLHwIyzthAAaqo__'
})(Container)
