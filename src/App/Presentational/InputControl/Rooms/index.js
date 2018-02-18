import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import '../index.css'
const types = [
  {
    key: 'j',
    text: '1-Bedroom',
    value: '1 BED'
  },
  {
    key: 'f',
    text: '2-Bedroom',
    value: '2 BED'
  },
  {
    key: 'h',
    text: '3-Bedroom',
    value: '3 BED'
  }
]
const Rooms = (props) => (
  <Dropdown
    placeholder='Select a Type of Housing'
    selection
    onChange={props.onChange}
    options={types}
    style={{marginBottom: '10px'}}

  />
)
export default Rooms
