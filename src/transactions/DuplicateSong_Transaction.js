import { jsTPS_Transaction } from "jstps";
/**
 * CreateSong_Transaction
 * 
 * This class represents a transaction that works with duplicating songs.
 * It will be managed by the transaction stack.
 * 
 * @author Anubhav Bist
 * @author ?
 */
export default class DuplicateSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex, initSong) {
        super();
        this.app = initApp;
        this.index = initIndex;
        this.song = initSong;
    }

    executeDo() {
        this.app.duplicateSong(this.index, this.song);
    }
    
    executeUndo() {
        this.app.removeSong(this.index);
    }
}