import React from "react";
class SearchBar extends React.Component {
  state = {
    term: ""
  };
  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="wrap-input" style={{ marginTop: "20px" }}>
        <form onSubmit={this.onFormSubmit}>
          <div className="label">
            <label>Search Videos</label>
          </div>
          <div className="ui fluid input">
            <input
              type="text"
              placeholder="Search Youtube videos"
              onChange={this.handleChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
