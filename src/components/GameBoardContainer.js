import React from 'react'
import { connect } from 'react-redux'
import GameBoard from './GameBoard'
import { loadGame, updateGame } from '../actions/games'

class GameBoardContainer extends React.Component {

  state = { editMode: false }


  onEdit = () => {
      this.setState({
      editMode: true,
      formValues: {
        id: this.props.game.id,
        playerOne: this.props.game.playerOne,
        playerTwo: this.props.game.playerTwo
      }
    })
  }

  onChange = game => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [game.target.name]: game.target.value
      }
    })
  }

  onSubmit = (game) => {
    game.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateGame(this.props.game.id, this.state.formValues)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.loadGame(Number(id))
  }  

  render() {
    return (<GameBoard
      game={this.props.game}
      onEdit={this.onEdit}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      editMode={this.state.editMode}
      formValues={this.state.formValues}
    />)
  }
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, {loadGame, updateGame})(GameBoardContainer)