import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { decodeHtml } from "../containers/logic";

class SearchContent extends React.PureComponent {
  static propTypes = {
    result: PropTypes.object,
    index: PropTypes.number
  };
  render() {
    const { index, result } = this.props;
    return (
      <div>
        <Link to={`searchResults/${index}`}>{decodeHtml(result.title)}</Link>
      </div>
    );
  }
}

export default SearchContent;
