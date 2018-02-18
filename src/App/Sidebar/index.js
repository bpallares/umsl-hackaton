import React, {Component} from 'react'
import { Sidebar, Menu, Divider } from 'semantic-ui-react'
import InputControl from '../Presentational/InputControl'
import RightSideData from '../Presentational/RightSideData'

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
        <Sidebar as={Menu} animation='overlay' width='very thin' style={{width: '250px'}} visible icon='labeled' vertical inverted>
          <h1 style={{color: '#1E90FF', marginTop: '5px'}}>Salary Vs Housing Tool Scrapper</h1>
          <center><Divider inverted style={{width: '190px'}} /></center>
          <InputControl getData={this.props.getInputData} />
        </Sidebar>
        <div style={{ height: '-webkit-fill-available', marginLeft: '150px', paddingLeft: '20px', paddingRight: '20px' }} >
          {this.props.children}
        </div>
        <Sidebar as={Menu} animation='overlay' width='thin' style={{width: '300px'}} visible icon='labeled' vertical inverted direction='right'
        >
          <RightSideData passOnData={this.props.dataPass} />
        </Sidebar>
      </div>
    )
  }
}

export default MainAuth
