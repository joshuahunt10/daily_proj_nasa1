// https://api.nasa.gov/planetary/apod?api_key=jh2HnS2CMRC9Xh37OkbKCxUfJWFd99bbUiJOY6jy

import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetImageForm />
      </div>
    );
  }
}

export default App;
