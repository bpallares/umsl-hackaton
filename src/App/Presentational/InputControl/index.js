import React from 'react'
import {Container} from 'semantic-ui-react'
import Rooms from './Rooms'
import Job from './Job'
import Type from './Type'
import './index.css'
const InputControl = () => (
  <Container >
    <Job />
    <Rooms />
    <Type />
  </Container>
)

export default InputControl
