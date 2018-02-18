import React, {Component} from 'react'
import { Chart } from 'react-google-charts'
import {getCityObject} from '../../Utils/getCity'
import { Divider } from 'semantic-ui-react'

class RightSideData extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cities: []
    }
  }
  componentWillMount () {
    var tempCities = this.state.cities
    tempCities.push(getCityObject('New York'))
    tempCities.push(getCityObject('Chicago'))
    tempCities.push(getCityObject('San Francisco'))
    tempCities.push(getCityObject('Orlando'))

    this.setState({cities: tempCities})
  }

  render () {
    console.log(this.props.passOnData)
    return (
      <div style={{padding: '30px', color: 'white'}}>
        <h1>HighLights</h1>
        <h4>City Population</h4>
        <Chart
          chartType='PieChart'
          data={[
            ['City', 'Population'],
            [this.state.cities[0].city, Number(this.state.cities[0].population)],
            [this.state.cities[1].city, Number(this.state.cities[1].population)],
            [this.state.cities[2].city, Number(this.state.cities[2].population)],
            [this.state.cities[3].city, Number(this.state.cities[3].population)]

          ]}
          style={{margin: '50px'}}
          options={{backgroundColor: 'none', legend: 'none'}}
          graph_id='ScatterChart'
          width='100%'
          height='200px'
          legend_toggle

        />
        <Divider inverted />
        <h4>Information</h4>
        {this.props.passOnData.city && (<h6>{this.props.passOnData.city.city}</h6>)}
      </div>
    )
  }
}

export default RightSideData
