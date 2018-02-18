import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, MarkerWithLabel } from 'react-google-maps'
import {getCityObject} from '../../Utils/getCity'

/* do no use this for now
import googleMapsClient from '@google/maps'

const mapApi = googleMapsClient.createClient({
  key: 'AIzaSyAxlbeo458rZlvcDldjT-KijKkMn3ccvdo',
  Promise: Promise
}) */

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `900px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={4}
    defaultOptions={{
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      disableDefaultUI: true,
      draggable: false,
      styles: [
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [
            {
              saturation: 36
            },
            {
              color: '#000000'
            },
            {
              lightness: 40
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#000000'
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 29
            },
            {
              weight: 0.2
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 17
            }
          ]
        }
      ]
    }}

    defaultCenter={{ lat: 42.877742, lng: -97.380979 }}
  >

    {
      props.isMarkerShown && props.data.mapPoints && (
        <span>
          {
            props.data.mapPoints.map((e, index) => (
              e && (
                <Marker key={index} position={{ lat: e.latitude, lng: e.longitude }} onClick={() => props.getTheClicky(e, props.data)} />
              )
            ))
          }
        </span>
      )
    }
  </GoogleMap>
)

export default class Map extends React.PureComponent {
  state = {
    isMarkerShown: false,
    dataPassedOn: ''
  }

  componentWillReceiveProps () {
    this.setState({dataPassedOn: this.props.formData})
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
    // console.log(this.props)
    return (
      this.state.dataPassedOn && (
        <MyMapComponent
          data={this.state.dataPassedOn}
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          getTheClicky={this.props.getTheClick}
        />)

    )
  }
}

/*
export default class Map extends Component {
  render () {
    var options = {
      displayMode: 'markers',
      region: 'US',
      resolution: 'provinces',
      colorAxis: {colors: ['#08ff00']},
      backgroundColor: 'none',
      datalessRegionColor: '#515861',
      legend: 'none',
      width: 1200,
      height: 700

    }

    var data = [
      ['St. Louis', 1132413310],
      ['San Francisco', 1132413310] ]

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
        rows={data}
        columns={columns}
        options={options}
        graph_id='GeoChart'
        // legend_toggle
      />
    )
  }
}
*/
