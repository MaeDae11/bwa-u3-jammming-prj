import React, { Component } from 'react';
import '../Basic.css';
import Track from './Track.js';


class TrackList extends Component {
    render(){
        let tracks = this.props.tracks.map((track) => {
            return <Track 
                key={track.id}
                track={track}
                onAdd={this.props.onAdd}
                isRemoval={this.props.isRemoval}
                onRemove={this.props.onRemove}
            />
        })

        return(
            <div className="TrackList">
                {tracks}
            </div>
        )
    };
    
};

export default TrackList

