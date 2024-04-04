// reportModel.js
class Model {
    constructor() {
        this.issue = null;
        this.lot = null;
        this.spot = null;
        this.text = null;
    }

    setIssue(issue) {
        this.issue = issue;
    }

    getIssue() {
        return this.issue;
    }
    setLot(lot) {
        this.lot = lot;
    }

    getLot() {
        return this.lot;
    }
    setSpot(spot) {
        this.spot = spot;
    }

    getSpot() {
        return this.spot;
    }
    
    setText(text) {
        this.text = text;
    }

    getText() {
        return this.text;
    }
    
}
// sideNavModel part below

var sideNavModel = (function() {
    var sidebarState = false; // false means closed, true means open

    function setSidebarState(state) {
        sidebarState = state;
    }

    function getSidebarState() {
        return sidebarState;
    }

    return {
        setSidebarState: setSidebarState,
        getSidebarState: getSidebarState
    };
})();
