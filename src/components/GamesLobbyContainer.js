import React from 'react'
import {loadGames} from '../actions/games'
import {connect} from 'react-redux'
import GamesLobby from './GamesLobby'

class GamesLobbyContainer extends React.Component {
  componentDidMount() {
    this.props.loadGames()
  }

  render() {
    return (<div><GamesLobby games={this.props.games} />
    </div>)}
}

const mapStateToProps = state => ({
  games: state.games
})

export default connect(mapStateToProps, {loadGames})(GamesLobbyContainer)