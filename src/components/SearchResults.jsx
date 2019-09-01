import React from "react";
import PropTypes from "prop-types";
import SearchContent from "./SearchContent";
import { Segment, Header, Divider } from "semantic-ui-react";

class SearchResults extends React.PureComponent {
  static propTypes = {
    results: PropTypes.array
  };
  render() {
    const { results } = this.props;
    return (
      <Segment>
        {results.length ? (
          results.map(
            (result, index) =>
              result.answer_id === undefined && (
                <>
                  <Header as="h5">
                    <SearchContent result={result} key={index} index={index} />
                  </Header>
                  <Divider fitted />
                </>
              )
          )
        ) : (
          <Header as="h5">No Results found</Header>
        )}
      </Segment>
    );
  }
}

export default SearchResults;
