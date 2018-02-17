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
    fluid
    selection
    onChange={props.onChange}
    options={types}
    // text={props.type}
    // value={props.type}
  />
)
Type.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func
}
export default Type
