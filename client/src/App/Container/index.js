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
      data: [],
      response: ''
    }
    this.onJobChange = this.onJobChange.bind(this)
    this.onRoomsChange = this.onRoomsChange.bind(this)
    this.onTypeChange = this.onTypeChange.bind(this)
    this.callApi = this.callApi.bind(this)
  }
  componentDidMount () {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err))
  }
  callApi = async () => {
    const response = await fetch('api/hello')
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message)
    return body
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
        <h2> {this.state.response}</h2>
        <InputControl
          job={this.state.job}
          onJobChange={this.onJobChange}
          rooms={this.state.rooms}
          onRoomsChange={this.onRoomsChange}
          type={this.state.type}
          onTypeChange={this.onTypeChange} />
        <br />
        <Map />
      </Container>
    )
  }
}
export default AppContainer
