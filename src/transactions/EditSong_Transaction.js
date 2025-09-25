import { jsTPS_Transaction } from "jstps";
/**
 * CreateSong_Transaction
 * 
 * This class represents a transaction that works with making songs.
 * It will be managed by the transaction stack.
 * 
 * @author Anubhav Bist
 * @author ?
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, prevSong, newSong) {
        super();
        this.app = initApp;
        this.index = index;
        this.prevSong = prevSong;
        this.newSong = newSong;
    }

    executeDo() {
        this.app.editSong(this.index, this.newSong);
    }
    
    executeUndo() {
        this.app.editSong(this.index, this.prevSong);
    }
}