import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback, canAddList} = this.props;
        if(canAddList){
            createNewListCallback();
        }
    };
    render() {
        const { canAddList } = this.props;
        let className = "toolbar-button";
        if (!canAddList) {
            className += " disabled";
        }
        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    className={className}
                    onClick={this.handleClick}
                    value="+" />
                Your Playlists
            </div>
        );
    }
}