
import React from 'react'
import Dropzone from 'react-dropzone'
import List from './videoList'
// import PropTypes from 'prop-types'

// import Search from './search'
// import UserInfo from './userInfo'
// import Actions from './actions'
// import Repos from './repos'

class Uploader extends React.Component {
  constructor () {
    super()
    this.state = {
      files: []
    }
  }

  onDrop (files) {
    // gerando uma chave única para cada arquivo
    files.map((item, index) => {
      item.key = this.state.files.length + index
      return item
    })
    this.setState({
      files: this.state.files.concat(files)
    })
  }

  render () {
    return (
      <div className='video-uploader'>
        <Dropzone className='dropzone' acceptClassName='accept' rejectClassName='reject' accept='video/*' onDrop={this.onDrop.bind(this)}>
          <p>Arraste e solte seus videos aqui</p>
        </Dropzone>
        <List items={this.state.files} />
      </div>
    )
  }
}

// videoUploader.propTypes = {
//   userinfo: PropTypes.object,
//   repos: PropTypes.array.isRequired,
//   starred: PropTypes.array.isRequired
// }

export default Uploader
