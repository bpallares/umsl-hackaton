import React, {Component} from 'react'
import AppContainer from './Container'
import SideBar from './Sidebar'
import {getSalaryCity, getCityObject, getSalary, getBedRooms} from './Utils/getCity'
/* ~~~~~~~
Data handler...
@children appContainer
~~~~~ */
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formsData: ''
    }
  }

  getState = (parameters) => {
    let mapDataOr = []
    let mapDataPoint = []

    this.setState({formsData: parameters}, () => {
      this.state.formsData.job && (
        getSalary(this.state.formsData.job).map(e => {
          mapDataOr.push(getBedRooms(e.city))
        })

      )
      this.state.formsData.job && (
        getSalary(this.state.formsData.job).map(e => {
          mapDataPoint.push(getCityObject(e.city))
        })

      )

      this.setState({roomData: mapDataOr})
      this.setState({mapPoints: mapDataPoint})
      this.setState({salaryCarrer: getSalary(this.state.formsData.job)})
    })
  }

  getClick = (parameters, e) => {
    this.setState({city: parameters, data: e})
  }

  render () {
    return (
      <div>
        <SideBar getInputData={(e) => this.getState(e)} dataPass={this.state}>
          <AppContainer dataFromForm={this.state} click={(e, f) => this.getClick(e, f)} />
        </SideBar>
      </div>
    )
  }
}
export default App
