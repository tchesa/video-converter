
import React from 'react'
// import PropTypes from 'prop-types'

// import Search from './search'
// import UserInfo from './userInfo'
// import Actions from './actions'
// import Repos from './repos'

const list = ({ items }) => (
  <table>
    <thead>
      <tr>
        <td>Nome</td>
        <td>Status</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nome do video</td>
        <td>Enviando</td>
      </tr>
      <tr>
        <td>Nome do video</td>
        <td>Enviando</td>
      </tr>
      <tr>
        <td>Nome do video</td>
        <td>Enviando</td>
      </tr>
    </tbody>
  </table>
)

// list.propTypes = {
//   userinfo: PropTypes.object,
//   repos: PropTypes.array.isRequired,
//   starred: PropTypes.array.isRequired
// }

export default list
