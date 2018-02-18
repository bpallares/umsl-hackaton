import React, {Component} from 'react'
import { Sidebar, Menu, Divider } from 'semantic-ui-react'
import InputControl from '../Presentational/InputControl'
import RightSideData from '../Presentational/RightSideData'
import './index.css'

class MainAuth extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render () {
    return (
      <div>
        <Sidebar as={Menu} animation='overlay' width='very thin' style={{width: '250px'}} visible icon='labeled' vertical inverted className='gradient'>
          <h1 style={{color: 'white', marginTop: '5px'}}>Houses Vs Salaries</h1>
          <center><Divider inverted style={{width: '190px'}} /></center>
          <p style={{color: 'white'}}>Choose your options: </p>
          <InputControl getData={this.props.getInputData} />
        </Sidebar>
        <div style={{ height: '-webkit-fill-available', marginLeft: '150px', paddingLeft: '20px', paddingRight: '20px' }} >
          {this.props.children}
        </div>
        <Sidebar as={Menu} animation='overlay' width='thin' style={{width: '300px'}} visible icon='labeled' vertical inverted direction='right'
          className='gradient'
        >
          <RightSideData passOnData={this.props.dataPass} />
        </Sidebar>
      </div>
    )
  }
}

export default MainAuth
