// import React from 'react'

// class Map extends React.Component {

// 	constructor(props) {
// 	    super(props);

// 	    const {lat, lng} = this.props.initialCenter;
// 	    this.state = {
// 	      currentLocation: {
// 	        lat: lat,
// 	        lng: lng
// 	      }
// 	    }
// 	}

// 	renderChildren() {
// 	    const {children} = this.props;

// 	    if (!children) return;
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 	    if (prevProps.google !== this.props.google) {
// 	      this.loadMap();
// 	    }
// 	}

// 	loadMap() {
// 	    if (this.props && this.props.google) {
// 	      const {google} = this.props;
// 	      const maps = google.maps;
// 	      const mapRef = this.refs.map;
// 	      const node = ReactDOM.findDOMNode(mapRef);

// 	      let {initialCenter, zoom} = this.props;
// 	      const {lat, lng} = this.state.currentLocation;
// 	      const center = new maps.LatLng(lat, lng);
// 	      const mapConfig = Object.assign({}, {
// 	        center: center,
// 	        zoom: zoom
// 	      })
// 	      this.map = new maps.Map(node, mapConfig);
// 	    }
// 	}
	
// 	render() {
// 		<div ref='map'>
// 	        Loading map...
// 	        {this.renderChildren()}
// 	    </div>
// 	}
// }

// Map.propTypes = {
//   google: React.PropTypes.object,
//   zoom: React.PropTypes.number,
//   initialCenter: React.PropTypes.object
// }

// Map.defaultProps = {
//   zoom: 13,
//   // San Francisco, by default
//   initialCenter: {
//     lat: 37.774929,
//     lng: -122.419416
//   }
// }

// export default Map