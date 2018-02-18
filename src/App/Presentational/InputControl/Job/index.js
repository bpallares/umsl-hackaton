import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import '../index.css'

const types = [
  {
    key: 'j',
    text: 'Software Engineer',
    value: 'se'
  },
  {
    key: 'o',
    text: 'Front End Developer',
    value: 'etse'
  }
]
const Job = (props) => (
  <Dropdown
    placeholder='Select a Type of Job'
    selection
    onChange={props.onChange}
    options={types}
    style={{marginBottom: '10px'}}
  />
)
export default Job
