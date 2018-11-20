import React, { Component } from 'react';
import styled from 'styled-components/macro';

// Container can be passed a background prop
export const Container = styled.div`
  min-height: calc(100vh - 3em);
  background: ${props => props.background || 'orange'};
  position: relative;
`;

// Responsive container passes its' dimensions to
// its' children _after_ it renders for the first time.
// In this component, children should always be a function
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
