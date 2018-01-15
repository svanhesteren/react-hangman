import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
// import {connect} from 'react-redux'

class Button extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string
  }
  render() {
    return (
      <button id={this.props.id} onClick={this.props.onClick}>Guess</button>
    )

  }


}

export default Button
