import React from "react";
import PropTypes from "prop-types";
import { Input, Form, Container } from "semantic-ui-react";
import { Route } from "react-router-dom";

import SearchResults from "../containers/searchResults";
import { getResponseLogic } from "../containers/logic";

class HomePage extends React.PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    })
  };

  searchClickHandler = async formValues => {
    await getResponseLogic(formValues.target.search.value);
    this.props.history.push("/searchresults");
  };
  render() {
    return (
      <>
        <Form onSubmit={this.searchClickHandler}>
          <Form.Group>
            <Container>
              <Input
                action={{ color: "blue", content: "Search", type: "submit" }}
                icon="search"
                iconPosition="left"
                placeholder="Search..."
                fluid
                name="search"
              />
            </Container>
          </Form.Group>
        </Form>
        <Route path="/searchresults" component={SearchResults} />
      </>
    );
  }
}

export default HomePage;
