import React, {Component} from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { Chart } from 'react-google-charts'

/* do no use this for now
import googleMapsClient from '@google/maps'

const mapApi = googleMapsClient.createClient({
  key: 'AIzaSyAxlbeo458rZlvcDldjT-KijKkMn3ccvdo',
  Promise: Promise
})

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class Map extends React.PureComponent {
  state = {
    isMarkerShown: false
  }

  componentDidMount () {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render () {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
} */
export default class Map extends Component {
  render () {
    var options = {
      displayMode: 'regions',
      region: 'US',
      resolution: 'provinces'

    }

    var data = [
      ['Alabama', 33],
      ['Alaska', 33],
      ['Arizona', 33],
      ['Arkansas', 33],
      ['California', 33],
      ['Colorado', 33],
      ['Connecticut', 33],
      ['Delaware', 33],
      ['Florida', 33],
      ['Georgia', 33],
      ['Hawaii', 33],
      ['Idaho', 33],
      ['Illinois', 33],
      ['Indiana', 33],
      ['Iowa', 33],
      ['Kansas', 33],
      ['Kentucky', 33],
      ['Louisiana', 33],
      ['Maine', 33],
      ['Maryland', 33],
      ['Massachusetts', 33],
      ['Michigan', 33],
      ['Minnesota', 33],
      ['Mississippi', 33],
      ['Missouri', 33],
      ['Montana', 33],
      ['Nebraska', 33],
      ['Nevada', 33],
      ['New Hampshire', 2],
      ['New Jersey', 3],
      ['New Mexico', 4],
      ['New York', 98],
      ['North Carolina', 3234],
      ['North Dakota', 324],
      ['Ohio', 33],
      ['Oklahoma', 334],
      ['Oregon', 1],
      ['Pennsylvania', 1234],
      ['Rhode Island', 125],
      ['South Carolina', 158],
      ['South Dakota', 124],
      ['Tennessee', 134],
      ['Texas', 1345],
      ['Utah', 1334],
      ['Vermont', 1554],
      ['Virginia', 765],
      ['Washington', 435],
      ['West Virginia', 45],
      ['Wisconsin', 4565],
      ['Wyoming', 778]]

    var columns = [{
      type: 'string',
      label: 'Country'
    },
    {
      type: 'number',
      label: 'Number'
    }]
    return (
      <Chart chartType='GeoChart'
        width={'70em'}
        height={'480px'}
        rows={data}
        columns={columns}
        options={options}
        graph_id='GeoChart'
        legend_toggle />
    )
  }
}
