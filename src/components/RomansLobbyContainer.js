import React from 'react'
import { loadRomans, createRoman } from '../actions/romans'
import {connect} from 'react-redux'
import RomansLobby from './RomansLobby'

class RomansLobbyContainer extends React.Component {

  onClick = () => this.props.createRoman()

  componentDidMount() {
    this.props.loadRomans()
  }

  render() {
    return (<div>
      <button onClick={this.onClick}>Create a new game</button><RomansLobby romans={this.props.romans} />
    </div>)}
}

const mapStateToProps = state => ({
  romans: state.romans
})

export default connect(mapStateToProps, {loadRomans, createRoman})(RomansLobbyContainer)