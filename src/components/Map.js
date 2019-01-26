import React from 'react';

class Map extends React.Component {

  componentDidMount(){
    this.map = L.map('mapid').setView([0, 0], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    var heat = L.heatLayer([
      [50.5, 30.5, 0.2], // lat, lng, intensity
      [50.6, 30.4, 2000],
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
  }

  render(){
    return (
      <div>
        <div id="mapid"></div>
      </div>
    )
  }
}

export default Map;
