import { jsTPS_Transaction } from "jstps";
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with removing songs.
 * It will be managed by the transaction stack.
 * 
 * @author Anubhav Bist
 * @author ?
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex, initSong) {
        super();
        this.app = initApp;
        this.index = initIndex;
        this.song = JSON.parse(JSON.stringify(initSong));
    }

    executeDo() {
        this.app.removeSong(this.index);
    }
    
    executeUndo() {
        this.app.createNewSong(this.index, this.song);
    }
}