// CURRENTLY NOT USED

import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          id="search-bar"
          placeholder="Search for shit"
          value={this.state.term}
          onSubmit={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    console.log(this.state.term);
  }
}

export default SearchBar;
