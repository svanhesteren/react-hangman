import React, {PureComponent} from 'react'
import { connect } from 'react-redux'


class Gallow extends PureComponent {
  render () {
    const { choicesLeft } = this.props
    return(
      <div>
        <img
          src={require(`../images/state-${choicesLeft < 0 ? 0 : choicesLeft}.png`)}
          alt="gallow"
          style={{height:300}} />
      </div>
    )
  }
}

const mapStateToProps = ({hangman}) => (hangman)

export default connect(mapStateToProps)(Gallow)
