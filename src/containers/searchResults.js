import { connect } from "react-redux";
import SearchResults from "../components/SearchResults";

const mapStateToProps = state => ({
  results: state.domain.searchResults
});

export default connect(
  mapStateToProps,
  null
)(SearchResults);
