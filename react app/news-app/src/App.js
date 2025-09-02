import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
// import Spinner from './components/spinner';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* <Spinner/> */}
        <News/>
      </div>
    )
  }
}

