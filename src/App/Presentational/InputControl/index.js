import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'
import Rooms from './Rooms'
import Job from './Job'
import Type from './Type'
import './index.css'
import { get } from 'http'

class InputControl extends Component {
  constructor () {
    super()
    this.state = {
      job: '',
      rooms: '',
      type: ''
    }
    this.onJobChange = this.onJobChange.bind(this)
    this.onRoomsChange = this.onRoomsChange.bind(this)
  }
  getvalue (value) {
    let stringValue = null
    switch (value) {
      case 'se':
        stringValue = 'Software Engineer'
        break
      case 'etse':
        stringValue = 'Entry Software Engining'
        break
      case 'ac':
        stringValue = 'Accountant'
        break
      case 'ph':
        stringValue = 'Pharmacist'
        break
      case 'dt':
        stringValue = 'Data Scientist'
        break
    }
    return stringValue
  }
  onJobChange = (e, {value, text}) => {
    const stringValue = this.getvalue(value)
    this.setState({job: value, jobName: stringValue}, () => this.props.getData(this.state))
  }
  onRoomsChange = (e, { name, value, options }) => {
    this.setState({rooms: value}, () => this.props.getData(this.state))
  }

  render () {
    return (
      <Container style={{
        padding: '30px',
        width: '250px'
      }}>
        <Job job={this.state.job} onChange={this.onJobChange} />
        <Rooms rooms={this.state.rooms} onChange={this.onRoomsChange} />
      </Container>
    )
  }
}
export default InputControl

/**
 *  */
