import React from 'react'
import { connect } from 'react-redux'
import RomansBoard from './RomansBoard'
import { loadRoman, updateRoman } from '../actions/romans'

class RomansBoardContainer extends React.Component {



  componentDidMount() {
    const { id } = this.props.match.params
    this.props.loadRoman(Number(id))
  }  

  render() {
    return (<RomansBoard
      roman={this.props.roman}
    />)
  }
}

const mapStateToProps = state => ({
  roman: state.roman
})

export default connect(mapStateToProps, {loadRoman, updateRoman})(RomansBoardContainer)