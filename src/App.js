import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import styled, { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'sans-serif';
    font-variant: common-ligatures;
  }
`;

const Nav = styled.nav`
  height: 2em;
  background-color: #2e2e2e;
  color: #fff;
`;

class App extends Component {
  render() {
    return (
      <>
        <Nav>
          <ul>
            <li>
              <Link to="/">
                <code>react-spring</code>
              </Link>
            </li>
            <li>
              <Link to="/scrollama">
                <code>scrollama</code>
              </Link>
            </li>
            <li>
              <Link to="/a-map">
                <code>een kaart</code>
              </Link>
            </li>
          </ul>
        </Nav>
        <Router />
      </>
    );
  }
}

export default App;
