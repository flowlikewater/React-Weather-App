import React, {Component} from 'react'

class GoogleMap extends Component {
  // one of the lifecycle methods that is called when the component is rendered into the screen
  // Mam( target element, { details of map } )
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render(){
    return <div ref="map" />
  }
}

export default GoogleMap
