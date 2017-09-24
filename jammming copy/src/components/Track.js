import React, { Component } from 'react';
import '../Basic.css';




class Track extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRemoval: true
        }   
    }

    render(){

        return(
        <div className="Track" >
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.name}</p>
            </div>
            {this._renderAction()}
        </div>
        )
    }

    _renderAction = () => {
        if(this.props.isRemoval){
            return <a className="Track-action" onClick={this._removeTrack}>-</a>
        }
        return <a className="Track-action" onClick={this._addTrack}>+</a>
    }
    _addTrack = (e) => {
        this.props.onAdd(this.props.track)
    }
    _removeTrack = (e) => {
        this.props.onRemove(this.props.track)
    }
    
}

export default Track