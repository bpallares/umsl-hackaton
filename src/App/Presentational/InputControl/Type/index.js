import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import '../index.css'
const types = [
  {
    text: 'House',
    value: 'House'
  },
  {
    text: 'Apartment',
    value: 'Apartment'
  }
]
const Type = (props) => (
  <Dropdown
    placeholder='Select a Type of Housing'
    fluid
    selection
    onChange={props.onTypeChange}
    options={types}
    text={props.type}
    value={props.type} />
)
Type.propTypes = {
  type: PropTypes.string,
  onTypeChange: PropTypes.func
}
export default Type
