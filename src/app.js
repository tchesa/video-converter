
import React, { Component } from 'react'
// import create from 'create-react-class'
import Uploader from './components/videoUploader'
import List from './components/videoList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Cesar Olimpio',
        login: 'tchesa',
        photo: 'https://avatars3.githubusercontent.com/u/10653761?v=4',
        repos: 12,
        followers: 10,
        following: 4
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    }
  }

  render () {
    return (
      <div className='container'>
        <h1>Video converter</h1>
        <Uploader />
        <List />
      </div>
    )
  }
}

export default App
