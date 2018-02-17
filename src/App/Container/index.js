import React, {Component} from 'react'
import Map from '../Presentational/Map'
import InputControl from '../Presentational/InputControl'
import { Container } from 'semantic-ui-react'
import './index.css'
class AppContainer extends Component {
  constructor(){
    super()
    this.state = {
      job:'',
      rooms: 3,
      type:'',
      data: []
    }
    this.onJobChange = this.onJobChange.bind(this)
    this.onRoomsChange = this.onRoomsChange.bind(this)
    this.onTypeChange = this.onTypeChange.bind(this)
  }
  onJobChange (value) {
    this.setState({job:value})
  }
  onRoomsChange(value){
    this.setState({rooms:value})
  }
  onTypeChange(value){
    this.setState({type:value})
  }
  render () {
   
    return(
      <Container className='custom-container'>
        <InputControl 
        job={this.state.job} 
        onJobChange={this.onJobChange}
        rooms={this.state.rooms}
        onRoomsChange={this.onRoomsChange}
        type={this.state.type}
        onTypeChange={this.onTypeChange}   />
        <Map />
      </Container>
    )
  }
} 
export default AppContainer