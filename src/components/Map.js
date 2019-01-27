import React from 'react';

class Map extends React.Component {
  state = {
    loading: true
  }

  componentDidMount(){
    this.map = L.map('mapid').setView([0, 0], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    var heat = L.heatLayer([
      [50.1163, -122.9574, 100], //whistler
      [49.2798, -123.2425, 100], //wreck beach
      [49.2624, -123.2449, 100], // life sceinces
      [49.2768, -123.1120, 100], // bc place
      [49.2888, -123.1111, 100] // canada place
    ], {radius: 25}).addTo(this.map);

    this.getLocation();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.panToCurrLoc);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  panToCurrLoc = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    this.map.panTo(new L.LatLng(lat, long))
    this.setState(() => ({loading: false}))
  }

  render(){
    return (
      <div>
      <div className="logo">News Radar</div>
        {
          this.state.loading && 
          <div style={{position: "fixed", zIndex: 200000, width: "100%", textAlign: "center"}}>
            <h1>Loading</h1>
            <i>If using iOS, go to Privacy > Location Services > Safari Websites > allow location access</i>
          </div>
        }
        <div id="mapid"></div>
      </div>
    )
  }
}

export default Map;
