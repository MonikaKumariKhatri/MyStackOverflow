import React from "react";
import { Container, Header, Icon } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import HomePage from "./components/HomePage";
import SearchAnswer from "./containers/searchAnswer";

const Footer = styled(Header)`
  position: relative;
  bottom: 0;
  left: 45%;
`;

function App() {
  return (
    <Container>
      <Header as="h1" icon textAlign="center">
        <Icon name="settings" />
        My Stack Overflow
        <Header.Subheader>
          This will return the first 30 results returned from stack overflow
        </Header.Subheader>
      </Header>
      <Switch>
        <Route path="/searchresults/:id" component={SearchAnswer} />
        <Route component={HomePage} />
      </Switch>
      <Footer>
        <Header.Subheader>
          <br />
          This is bottom
          <Icon name="hand point down" />
        </Header.Subheader>
      </Footer>
    </Container>
  );
}

export default App;
