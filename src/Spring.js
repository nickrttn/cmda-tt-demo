import React, { Component } from 'react';
import { Spring } from 'react-spring';
import styled from 'styled-components/macro';

import { ResponsiveContainer } from './shared';

const Controls = styled.div`
  position: absolute;
  top: 2em;
  left: 2em;
  padding: 1em 1.5em;
  background-color: white;
`;

const Label = styled.label`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0.5em 0;
`;

class SpringDemo extends Component {
  state = { x: 250, y: 250, r: 50 };

  // Set the state based on input[range] values
  setPosition = evt => {
    const { value, name: key } = evt.target;
    this.setState({ [key]: parseInt(value, 10) });
  };

  // Animate the position of the circle every time the state is updated
  render() {
    return (
      <ResponsiveContainer>
        {({ width, height }) => (
          <>
            <svg width={width} height={height}>
              <Spring to={this.state}>
                {props => (
                  <circle
                    cx={props.x}
                    cy={props.y}
                    r={props.r}
                    fill={'skyblue'}
                  />
                )}
              </Spring>
            </svg>
            <Controls>
              <span>Controls</span>
              <Label htmlFor="x">
                <span>x</span>
                <input
                  type="range"
                  name="x"
                  min="0"
                  max={width}
                  step="1"
                  onChange={this.setPosition}
                />
              </Label>
              <Label htmlFor="y">
                <span>y</span>
                <input
                  type="range"
                  name="y"
                  min="0"
                  max={height}
                  step="1"
                  onChange={this.setPosition}
                />
              </Label>
              <Label htmlFor="r">
                <span>r</span>
                <input
                  type="range"
                  name="r"
                  min="1"
                  max="100"
                  step="1"
                  onChange={this.setPosition}
                />
              </Label>
            </Controls>
          </>
        )}
      </ResponsiveContainer>
    );
  }
}

export default SpringDemo;
