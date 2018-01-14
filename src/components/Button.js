import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
// import {connect} from 'react-redux'

class Button extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <button onClick={this.props.onClick}>Update</button>
    )

  }


}

export default Button
