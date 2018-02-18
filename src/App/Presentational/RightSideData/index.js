import React, {Component} from 'react'
import { Chart } from 'react-google-charts'
import {getCityObject} from '../../Utils/getCity'
import { Divider } from 'semantic-ui-react'
import {getSalaryCity, getBedRooms, getRating} from '../../Utils/getCity'
import { Header, Image, Table } from 'semantic-ui-react'

import './index.css'

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
    const salary = this.props.passOnData.city && this.props.passOnData.formsData
      ? getSalaryCity(this.props.passOnData.formsData.job, this.props.passOnData.city.city).salary : null
    const rooms = this.props.passOnData.city && this.props.passOnData.formsData ? getBedRooms(this.props.passOnData.city.city) : null
    return (
      <div style={{padding: '30px', color: 'white', height: '100vh'}} >
        <h1>HighLights</h1>
        <h4>City Population</h4>
        <h6>Your city compared with some bigger cities</h6>
        { this.props.passOnData.salaryCarrer ? (
          <Chart
            chartType='BarChart'
            data={[
              ['City', 'Salary'],
              [this.props.passOnData.salaryCarrer[0].city, Number(this.props.passOnData.salaryCarrer[0].salary)],
              [this.props.passOnData.salaryCarrer[1].city, Number(this.props.passOnData.salaryCarrer[1].salary)],
              [this.props.passOnData.salaryCarrer[2].city, Number(this.props.passOnData.salaryCarrer[2].salary)]

            ]}
            style={{margin: '50px'}}
            options={{backgroundColor: 'none', legend: 'none'}}
            graph_id='ScatterChart'
            width='100%'
            height='200px'
            legendTextStyle={{color: '#FFF'}}
            titleTextStyle={{ color: '#FFF' }}
            legend_toggle

          />
        ) : (
          <Chart
            chartType='BarChart'
            data={[
              ['City', 'Salary'],
              ['None', 0]

            ]}
            style={{margin: '50px'}}
            options={{backgroundColor: 'none', legend: 'none'}}
            graph_id='ScatterChart'
            width='100%'
            height='200px'
            legend_toggle

          />
        )
        }
        <Divider inverted />
        <h4>Information</h4>
        {this.props.passOnData.city && this.props.passOnData.formsData &&
            (<span>
              <h2>{this.props.passOnData.city.city}</h2>
              {this.props.passOnData.city.state}
              <p>
                Population:  {this.props.passOnData.city.population && (this.props.passOnData.city.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))} <br />
                Growth:  {this.props.passOnData.city.growth_from_2000_to_2013}<br />
                Average Salary for a {this.props.passOnData.formsData.jobName} is : $
                { salary && (salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))}<br />
                Average Cost of a house : $
                {rooms[this.props.passOnData.formsData.rooms] && (rooms[this.props.passOnData.formsData.rooms].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))}
              </p>
              <Divider inverted />

              <Table basic='very' celled collapsing inverted>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>City</Table.HeaderCell>
                    <Table.HeaderCell>Rank</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>

                  { getRating(salary, this.props.passOnData.formsData.rooms, this.props.passOnData.roomData).map((e, index) => (
                    // console.log(e)
                    index < 5 && (
                      <Table.Row key={index} >
                        <Table.Cell>
                          <Header as='h4' image>
                            <Header.Content style={{color: 'white'}}>
                              {e.city}
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>
                          {index + 1}
                        </Table.Cell>
                      </Table.Row>
                    )
                  ))}

                </Table.Body>
              </Table>

            </span>
            )
        }
      </div>
    )
  }
}

export default RightSideData
