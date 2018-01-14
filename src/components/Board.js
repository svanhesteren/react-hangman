import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import update from '../actions/update'
import Button from './Button'

class Board extends PureComponent {
  static propTypes = {
      choicesLeft: PropTypes.number
    }

  updateChoice = () => {
    this.props.update(this.props.choicesLeft)
  }

  render() {
    console.log(this.props);
    return (
      // <h1>hi</h1>
      <div>
      <h1>{this.props.choicesLeft}</h1>
      <Button onClick={this.updateChoice} />
      </div>
    )
  }
}


// const mapStateToProps = (state) => {
//     return {
//         choicesLeft: this.props.choicesLeft
//     };
// }

const mapStateToProps = ({hangman}) => ({
  choicesLeft: hangman.choicesLeft
})

const mapDispatchToProps = { update }

export default connect(mapStateToProps, mapDispatchToProps)(Board)
