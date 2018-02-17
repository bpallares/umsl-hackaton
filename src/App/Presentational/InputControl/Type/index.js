import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import '../index.css'
const types = [
  {
    key: 'j',
    text: 'House',
    value: 'House'
  },
  {
    key: 'o',
    text: 'Apartment',
    value: 'Apartment'
  }
]
const Type = (props) => (
  <Dropdown
    placeholder='Select a Type of Housing'
    selection
    onChange={props.onChange}
    options={types}
  />
)
Type.propTypes = {
  onChange: PropTypes.func
}
export default Type
