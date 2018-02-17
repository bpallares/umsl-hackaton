import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import '../index.css'

const types = [
  {
    key: 'j',
    text: 'Software Engineer',
    value: 'Software Engineer'
  },
  {
    key: 'o',
    text: 'Front End Developer',
    value: 'Front End Developer'
  }
]
const Job = (props) => (
  <Dropdown
    placeholder='Select a Type of Job'
    selection
    onChange={props.onChange}
    options={types}
    style={{marginRight: '15px'}}
  />
)
export default Job
