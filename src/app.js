
import React, { Component } from 'react'
// import create from 'create-react-class'
import Uploader from './components/videoUploader'
// import List from './components/videoList'

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div className='container'>
        <h1>Video converter</h1>
        <Uploader />
      </div>
    )
  }
}

export default App
