import React from 'react'
import {loadGames, createGame} from '../actions/games'
import {connect} from 'react-redux'
import GamesLobby from './GamesLobby'

class GamesLobbyContainer extends React.Component {
  
onClick = () => this.props.createGame()
  
  componentDidMount() {
    this.props.loadGames()
  }

  
  render() {
    return ( <div> <button onClick={this.onClick}>Create a new game</button>
    <GamesLobby games={this.props.games} />
    </div>)}
}

const mapStateToProps = state => ({
  games: state.games
})

export default connect(mapStateToProps, {loadGames, createGame})(GamesLobbyContainer)