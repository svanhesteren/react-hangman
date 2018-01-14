import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class Title extends PureComponent {
  static propTypes = {
    titleText: PropTypes.string
  }
  render() {
    return(
      <h1 className="App-title">{this.props.titleText}</h1>
    )
  }


}

const mapStateToProps = ({hangman}) => (hangman)

export default connect(mapStateToProps)(Title)
