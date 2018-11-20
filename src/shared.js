import React, { Component } from 'react';
import styled from 'styled-components/macro';

export const Container = styled.div`
  min-height: calc(100vh - 3em);
  background: ${props => props.background || 'orange'};
  position: relative;
`;

export class ResponsiveContainer extends Component {
  state = { width: 0, height: 0 };
  el = React.createRef();

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    let { width, height } = this.el.current.getBoundingClientRect();
    this.setState({ width, height });
  };

  render() {
    return (
      <Container ref={this.el}>{this.props.children(this.state)}</Container>
    );
  }
}
