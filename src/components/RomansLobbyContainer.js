import React from 'react'
import { loadRomans } from '../actions/romans'
import {connect} from 'react-redux'
import RomansLobby from './RomansLobby'

class RomansLobbyContainer extends React.Component {
  componentDidMount() {
    this.props.loadRomans()
  }

  render() {
    return (<div><RomansLobby romans={this.props.romans} />
    </div>)}
}

const mapStateToProps = state => ({
  romans: state.romans
})

export default connect(mapStateToProps, {loadRomans})(RomansLobbyContainer)