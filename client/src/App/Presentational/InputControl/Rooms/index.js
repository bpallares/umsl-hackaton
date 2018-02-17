import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import '../index.css'
const types = [
  {
    key: 'j',
    text: '1-Bedroom',
    value: 1
  },
  {
    key: 'f',
    text: '2-Bedroom',
    value: 2
  },
  {
    key: 'h',
    text: '3-Bedroom',
    value: 3
  }
]
const Rooms = (props) => (
  <Dropdown
    placeholder='Select a Type of Housing'
    selection
    onChange={props.onChange}
    options={types}
    style={{marginRight: '15px'}}

  />
)
export default Rooms
