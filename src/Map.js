import React, { Component } from 'react';
import { json as fetchJSON } from 'd3-fetch';
import { geoPath, geoMercator } from 'd3-geo';

import { ResponsiveContainer } from './shared';

const publicPath = process.env.PUBLIC_URL;

class Map extends Component {
  // Create a projection and path on creation
  constructor(props) {
    super(props);
    const { width, height } = props;
    this.projection = geoMercator().fitExtent(
      [[100, 100], [width - 100, height - 100]],
      props.districts
    );
    this.path = geoPath(this.projection);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width) {
      const { width, height } = this.props;
      this.projection = geoMercator().fitExtent(
        [[100, 100], [width - 100, height - 100]],
        this.props.districts
      );
      this.path = geoPath(this.projection);
    }
  }

  render() {
    return (
      <g>
        <path d={this.path(this.props.districts)} fill="#2e2e2e" />
      </g>
    );
  }
}

async function fetchDistricts() {
  return await fetchJSON(`${publicPath}/GEBIED_STADSDELEN_EXWATER.json`);
}

class MapDemo extends Component {
  state = { districts: null };

  // When the page first mounts, fetch the district GeoJSON file
  componentDidMount() {
    fetchDistricts().then(districts => {
      this.setState({ districts });
    });
  }

  // If there is a districts in state, pass it to Map
  render() {
    return (
      <ResponsiveContainer>
        {({ width, height }) => (
          <svg width={width} height={height}>
            {this.state.districts && (
              <Map
                districts={this.state.districts}
                width={width}
                height={height}
              />
            )}
          </svg>
        )}
      </ResponsiveContainer>
    );
  }
}

export default MapDemo;
