import React, { Component } from 'react';
import '../Basic.css';
import TrackList from './TrackList.js';



class Playlist extends Component {

    render(){
    
        return(
        <div className="Playlist">
            <input defaultValue={'New List'} onChange={this._handleNameChange}/>
                <TrackList 
                    tracks={this.props.playlistTracks} 
                    isRemoval={true}
                    onRemove={this.props.onRemove}
                />
            <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
        </div>
        );
    }

    _handleNameChange = (e) => {
        this.props.onNameChange(e.target.value);
    }
};


export default Playlist