import React, { Component } from 'react';
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'

const API_KEY = "jh2HnS2CMRC9Xh37OkbKCxUfJWFd99bbUiJOY6jy";

class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "fhaz",
      sol: "1000",
      images: []

    }

    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
    this.handleImageReq = this.handleImageReq.bind(this);
  }

  handleRover(e){
    this.setState({
      rover: e.target.value
    })
  }

  handleCamera(e){
    this.setState({
      camera: e.target.value
    })
  }

  handleSol(e){
    this.setState({
      sol: e.target.value
    })
  }

  handleImageReq(e){
    e.preventDefault()
    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
    fetch(imageUrl)
    .then(r => r.json())
    .then((json) => this.setState({images: json.photos}))
    .then(data => console.log('in a promise', this.state.images))


  }
//
  render() {

    return (
      <div>
        <form onSubmit={this.handleImageReq}>
          <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="rover" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
          <GetImageButton />
        </form>
        <ImageDisplay images={this.state.images}/>
      </div>
    );
  }

}

export default GetImageForm;
