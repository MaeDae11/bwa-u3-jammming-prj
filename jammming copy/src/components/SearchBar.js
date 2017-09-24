import React, { Component } from 'react';
import '../Basic.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
    }


    render(){
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this._handleTermChange}/>
                <a onClick={this._handleSearch}>SEARCH</a>
          </div>
        );
    };

    _handleTermChange = (e) => {
        this.setState({
            term: e.target.value
        });
    }
    _handleSearch = () => {
        this.props.spotifySearch(this.state.term)
    }
};

export default SearchBar