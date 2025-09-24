import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.currentTarget;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }
    handleDragEnd = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));
    }
    

    getItemNum = () => {
        return this.props.id.substring("song-card-".length);
    }

    handleDeleteCard = (event) => {
        console.log("deleting song")
    }
    handleDuplicateCard = (event) => {
        console.log("duplicating song")
    }

    render() {
        const { song } = this.props;
        let num = this.getItemNum();
        // console.log("num: " + num);
        let itemClass = "song-card unselected-song-card";
        if (this.state.draggedTo) {
            itemClass = "song-card song-card-dragged-to";
        } 
        if (this.state.isDragging){
            itemClass = "song-card is-dragging"
        }
        return (
            <div
                id={'song-' + num}
                className={itemClass}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                onDragEnd={this.handleDragEnd}
                draggable="true"
            >
                <span>
                    {num}. 
                    <a className = "song-card-title" href={"https://www.youtube.com/watch?v="+song.youTubeId}>{song.title}</a> 
                    ({song.year}) by 
                    <span className = "song-card-artist"> {song.artist}</span>
                </span>  
                <div style={{flexGrow:1}}></div>
                <input 
                    className = "card-button" 
                    type="button" 
                    value ={"⎘"}
                    onClick={this.handleDuplicateCard}
                />
                <input 
                    className = "card-button" 
                    type="button" 
                    value ={"\u2715"}
                    onClick={this.handleDeleteCard}
                />
            </div>
        )
    }
}