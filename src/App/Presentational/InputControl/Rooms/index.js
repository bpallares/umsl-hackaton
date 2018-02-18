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
  },
  {
    key: 'jf',
    text: '4-Bedroom',
    value: '4 BED'
  },
  {
    key: 'k',
    text: '5-Bedroom',
    value: '5 BED'
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
