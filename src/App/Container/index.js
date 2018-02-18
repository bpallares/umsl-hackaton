import React, {Component} from 'react'
import Map from '../Presentational/Map'
import { Container } from 'semantic-ui-react'
import './index.css'

class AppContainer extends Component {
  render () {
    return (
      <Container className='custom-container'>
        <Map formData={this.props.dataFromForm} getTheClick={this.props.click} />
      </Container>
    )
  }
}
export default AppContainer
