import { connect } from "react-redux";
import SearchAnswer from "../components/SearchAnswer";

const mapStateToProps = state => ({
  results: state.domain.searchResults
});

export default connect(
  mapStateToProps,
  null
)(SearchAnswer);
