
import React from 'react'
import PropTypes from 'prop-types'

// import Search from './search'
// import UserInfo from './userInfo'
// import Actions from './actions'
// import Repos from './repos'

const List = ({ items }) => (
  <table>
    <thead>
      <tr>
        <td>Nome</td>
        <td>Tamanho</td>
        <td>Status</td>
      </tr>
    </thead>
    <tbody>
      {
        (items.length > 0) ? (
          items.map(i => {
            return (
              <tr key={i.key}>
                <td>#{i.key} {i.name}</td>
                <td>{i.size} bytes</td>
                <td className='sending'>Enviando</td>
              </tr>
            )
          })
        ) : (<tr><td colSpan={3} className='no-items'>Nenhum vídeo enviado</td></tr>)
      }
    </tbody>
  </table>
)

List.defaultProps = {
  items: []
}

List.propTypes = {
  items: PropTypes.array
}

export default List
