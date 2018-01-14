import React, {PureComponent} from 'react'
// import { Form, Control } from 'react-redux-form'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import UPDATE from '../actions/updateGuess'

class InputForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateChoice(val) {
    this.props.UPDATE(val)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.value);
    // alert('A name was submitted: ' + this.state.value);
    // console.log(val);
    console.log(this.state.value);
    this.props.update(this.state.value)
    event.preventDefault()
  }
  render() {


    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>


    )
  }
}

export default InputForm
