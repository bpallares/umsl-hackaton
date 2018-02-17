import React, {Component} from 'react'
import Map from '../Presentational/Map'
import InputControl from '../Presentational/InputControl'
import { Container } from 'semantic-ui-react'
import './index.css'
class AppContainer extends Component {
  constructor () {
    super()
    this.state = {
      job: '',
      rooms: 3,
      type: 'Type State default',
      data: []
    }
    this.onJobChange = this.onJobChange.bind(this)
    this.onRoomsChange = this.onRoomsChange.bind(this)
    this.onTypeChange = this.onTypeChange.bind(this)
  }
  onJobChange = (e, { name, value, options }) => {
    this.setState({job: value})
  }
  onRoomsChange = (e, { name, value, options }) => {
    this.setState({rooms: value})
  }
  onTypeChange = (e, { name, value, options }) => {
    this.setState({ type: value }, () => console.log(this.state))
  }
  render () {
    return (
      <Container className='custom-container'>
        <InputControl
          job={this.state.job}
          onJobChange={this.onJobChange}
          rooms={this.state.rooms}
          onRoomsChange={this.onRoomsChange}
          type={this.state.type}
          onTypeChange={this.onTypeChange} />
        <Map />
      </Container>
    )
  }
}
export default AppContainer
