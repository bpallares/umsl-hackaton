import React from 'react'
import PropTypes from 'prop-types'
import {Container} from 'semantic-ui-react'
import Rooms from './Rooms'
import Job from './Job'
import Type from './Type'
import './index.css'
const InputControl = (props) => (
  <Container style={{
    padding: '30px',
    width: '250px'
  }}>
    <Job job={props.job} onChange={props.onJobChange} />
    <Rooms rooms={props.rooms} onChange={props.onRoomsChange} />
    <Type type={props.type} onChange={props.onTypeChange} />
  </Container>
)
InputControl.propTypes = {
  job: PropTypes.string,
  rooms: PropTypes.number,
  type: PropTypes.string,
  onJobChange: PropTypes.func,
  onRoomsChange: PropTypes.func,
  onTypeChange: PropTypes.func
}
export default InputControl
