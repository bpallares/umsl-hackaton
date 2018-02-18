import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import '../index.css'

const types = [
  {
    key: 1,
    text: 'Software Engineer',
    value: 'se'
  },
  {
    key: 2,
    text: 'Entry Level Software Engineer',
    value: 'etse'
  },
  {
    key: 3,
    text: 'Accountant',
    value: 'ac'
  },
  {
    key: 4,
    text: 'Pharmacist',
    value: 'ph'
  },
  {
    key: 5,
    text: 'Data Scientist',
    value: 'dt'
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
