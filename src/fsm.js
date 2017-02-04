class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
		if(!config){
			alert('ERROR');
		}
		else {
			this.initial=config.initial;
			this.states=['normal','busy','hungry','sleeping'];
		}
	}

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
//		console.log('this.initial= ',this.initial);
//		console.log('this.states= ',this.states);
		return this.initial;
	}

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
		for(var i=0;i<this.states.length;i++){
			if(state==this.states[i]){
				this.initial=this.states[i];
				return;
			}			
		}
		alert('ERROR');
//		if(state!=this.initial){
//			alert('ERROR');	
	}

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {}

    /**
     * Resets FSM state to initial.
     */
    reset() {
		this.initial='normal';
	}

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
