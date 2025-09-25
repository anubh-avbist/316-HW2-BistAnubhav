import React, { Component, useEffect } from 'react';

export default class SongEditModal extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        const {confirmEditCallback} = this.props;
        let modal = document.getElementById("song-edit-modal");
        if(event.key == "Enter" && modal.classList.contains("is-visible")){
            confirmEditCallback();
        }
    };


    render() {
        
        const { confirmEditCallback, hideSongEditModalCallback, song } = this.props;
        
        return (
            <div 
                class="modal" 
                id="song-edit-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-song-edit-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                <div id="title-prompt" class="modal-prompt">Title:</div>
                                <input id="edit-song-modal-title-textfield" class='modal-textfield' type="text" />
                                <div id="artist-prompt" class="modal-prompt">Artist:</div>
                                <input id="edit-song-modal-artist-textfield" class='modal-textfield' type="text" />
                                <div id="you-tube-id-prompt" class="modal-prompt">YouTube Id:</div>
                                <input id="edit-song-modal-youTubeId-textfield" class='modal-textfield' type="text" />
                                <div id="year-prompt" class="modal-prompt">Year:</div>
                                <input id="edit-song-modal-year-textfield" class='modal-textfield' type="number" />
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="song-edit-confirm-button" 
                                class="modal-button" 
                                onClick={() => {
                                    confirmEditCallback();
                                }}
                                value='Confirm' />
                            <input type="button" 
                                id="song-edit-cancel-button" 
                                class="modal-button" 
                                onClick={hideSongEditModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}