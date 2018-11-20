import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { Container } from './shared';
import scrollama from 'scrollama';

const Step = styled.div`
  padding: 1em 1.5em;
  background-color: white;
  margin: 80vh 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(20vh, 30em);
`;

const Left = styled.div`
  grid-column: 1;
  grid-row: 1;
  position: sticky;
  top: 0;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  grid-column: 2;
  grid-row: 1;
  padding: 0 2em;
`;

const Emoji = styled.span`
  font-size: 10em;
`;

class ScrollamaDemo extends Component {
  state = { background: 'orange' };
  scroller = scrollama();

  // Setup a scrollama scroller that observes elements with a 'data-step' attribute inside
  // an element with a 'data-container' attribute
  componentDidMount() {
    this.scroller
      .setup({
        step: '[data-step]',
        container: '[data-container]'
      })
      .onStepEnter(this.handleStepEnter);
  }

  handleStepEnter = evt => {
    const { element: el } = evt;
    const background = el.dataset.step;
    this.setState({ background });
  };

  // data-step that pass the default threshold will set the background color of the Container
  render() {
    return (
      <Container background={this.state.background} data-container>
        <Grid>
          <Left>
            <Emoji>🥳</Emoji>
          </Left>
          <Right>
            <Step data-step="crimson">Rood</Step>
            <Step data-step="skyblue">Blauw</Step>
            <Step data-step="rebeccapurple">Paars</Step>
          </Right>
        </Grid>
      </Container>
    );
  }
}

export default ScrollamaDemo;
