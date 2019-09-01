import React from "react";
import PropTypes from "prop-types";
import { Segment, Header, Divider } from "semantic-ui-react";
import { decodeHtml } from "../containers/logic";

class SearchAnswer extends React.PureComponent {
  static propTypes = {
    results: PropTypes.array,
    history: PropTypes.shape({
      push: PropTypes.func
    }),
    match: PropTypes.shape({
      params: PropTypes.object
    })
  };

  render() {
    const { results } = this.props;
    const id = this.props.match.params.id;
    const answers =
      results && results[id]
        ? results.filter(
            result =>
              results[id].question_id === result.question_id &&
              result.answer_id !== undefined
          )
        : [];
    return (
      <Segment>
        {results[id] && (
          <>
            <Header as="h1" color="blue">
              {decodeHtml(results[id].title)}
            </Header>
            <Header as="h3">Explanation:</Header>
            <Header as="h4">{decodeHtml(results[id].body)}</Header>
            <Header as="h4">{decodeHtml(results[id].excerpt)}</Header>
            <Divider fitted />
            <Header as="h3">Answers:</Header>
            <Header as="h4">
              {answers && answers.length
                ? answers.map(answer => (
                    <>
                      <Header as="h4">{decodeHtml(answer.body)}</Header>
                      <Divider fitted />
                    </>
                  ))
                : "No Answer found!!!"}
            </Header>
          </>
        )}
      </Segment>
    );
  }
}

export default SearchAnswer;
