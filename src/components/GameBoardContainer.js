import React from 'react'
import { connect } from 'react-redux'
import GameBoard from './GameBoard'
import { loadGame, updateGame } from '../actions/games'

class GameBoardContainer extends React.Component {



  componentDidMount() {
    const { id } = this.props.match.params
    this.props.loadGame(Number(id))
  }  

  render() {
    return (<GameBoard
      game={this.props.game}
    />)
  }
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, {loadGame, updateGame})(GameBoardContainer)