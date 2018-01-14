import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from './Button'
import guess from '../actions/hangman'

class Board extends PureComponent {
  static propTypes = {
      // choicesLeft: PropTypes.number
    }

  updateChoice = () => {
    // console.log(val);
    const field = document.getElementById('guessInput')
    const val = field.value
    this.props.guess(val)
    field.value = ""
  }


  render() {
    console.log(this.props);
    return (
      <div>
      <h1>{this.props.wordState}</h1>
      <label>
        Enter guess (max 1):
        <input id="guessInput" maxLength="1"/>
        </label>
        <Button onClick={this.updateChoice} />
      </div>
    )
  }
}



const mapStateToProps = ({hangman}) => (hangman)

const mapDispatchToProps = { guess }

export default connect(mapStateToProps, mapDispatchToProps)(Board)
// export default connect(mapStateToProps)(Board)
