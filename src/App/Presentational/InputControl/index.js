import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'
import Rooms from './Rooms'
import Job from './Job'
import Type from './Type'
import './index.css'

class InputControl extends Component {
  constructor () {
    super()
    this.state = {
      job: '',
      rooms: '',
      type: '',
      data: []
    }
    this.onJobChange = this.onJobChange.bind(this)
    this.onRoomsChange = this.onRoomsChange.bind(this)
    this.onTypeChange = this.onTypeChange.bind(this)
  }
  onJobChange = (e, { name, value, options }) => {
    this.setState({job: value}, () => this.props.getData(this.state))
  }
  onRoomsChange = (e, { name, value, options }) => {
    this.setState({rooms: value}, () => this.props.getData(this.state))
  }
  onTypeChange = (e, { name, value, options }) => {
    this.setState({ type: value }, () => this.props.getData(this.state))
  }
  render () {
    return (
      <Container style={{
        padding: '30px',
        width: '250px'
      }}>
        <Job job={this.state.job} onChange={this.onJobChange} />
        <Rooms rooms={this.state.rooms} onChange={this.onRoomsChange} />
        <Type type={this.state.type} onChange={this.onTypeChange} />
      </Container>
    )
  }
}
export default InputControl

/**
 *  */
