import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import styled, { createGlobalStyle } from 'styled-components/macro';

import SpringDemo from './Spring';
import MapDemo from './Map';
import ScrollamaDemo from './Scrollama';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'sans-serif';
    font-variant: common-ligatures;
  }

  code {
    font-family: Monaco, Menlo, monospace;
    font-size: 0.9em;
  }

  a {
    text-decoration-skip-ink: auto;
  }
`;

const Nav = styled.nav`
  height: 3em;
  background-color: #2e2e2e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  margin: 0 0.75em;
`;

const StyledLink = styled(Link)`
  color: white;

  &:hover {
    color: orange;
  }
`;

class App extends Component {
  // App renders a router, the selected route component and a navigation bar
  render() {
    return (
      <>
        <Nav>
          <List>
            <Item>
              <StyledLink to="/">
                <code>react-spring</code>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/scrollama">
                <code>scrollama</code>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/d3-geo">
                <code>d3-geo</code>
              </StyledLink>
            </Item>
          </List>
        </Nav>
        <Router>
          <SpringDemo path="/" />
          <ScrollamaDemo path="/scrollama" />
          <MapDemo path="/d3-geo" />
        </Router>
        <GlobalStyles />
      </>
    );
  }
}

export default App;
