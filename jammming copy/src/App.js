import React, { Component } from 'react';
import './reset.css';
import './Basic.css';

import SearchBar from './components/SearchBar.js';
import SearchResults from './components/SearchResults.js';
import Playlist from './components/Playlist.js';
import Spotify from './components/Spotify.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchResults: [],
            playlistName: 'New Playlist',
            playlistTracks: [],
            message: 'Add music to your playlist'
        }
    }

    spotifySearch = (term) => {
        Spotify.search(term)
        .then(searchResults => {
            this.setState({
                searchResults: searchResults
            });
        });
    }

    addTrack = (track) => {
        if(this.state.playlistTracks.includes(track)){
            this.setState({
                message: `${track.name} has already been added`
            })
        } else {
            let tracks = this.state.playlistTracks;
            tracks.push(track);
            this.setState({
                playlistTracks: tracks,
                message: 'Add music to your playlist'
            });
        };
    }

    removeTrack = (track) => {
        let tracks = this.state.playlistTracks;
        tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
        this.setState({
            playlistTracks: tracks
        });
    }

    upsdatePlaylistName = (name) => {
        this.setState({
            playlistName: name
        });
    }

    savePlaylist = () => {
        const trackURI = this.state.playlistTracks.map(track => track.uri);
        Spotify.savePlaylist(this.state.playlistName, trackURI)
        .then(() => {
            this.setState({
                playlistName: 'New Playlist',
                playlistTracks: []
            });
        });
    }

  render() {
    return (
      <div className="App">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="search-container">
            <SearchBar spotifySearch={this.spotifySearch}/>
            <div className="Error-Message">{this.state.message}</div>

            <div className="App-playlist">
                <SearchResults 
                    searchResults={this.state.searchResults} 
                    onAdd={this.addTrack}
                />

                <Playlist 
                    playlistTracks={this.state.playlistTracks}
                    onRemove={this.removeTrack}
                    onNameChange={this.upsdatePlaylistName}
                    onSave={this.savePlaylist}
                />
        
             </div>
        </div>
      </div>
    );
  }
}

export default App;
