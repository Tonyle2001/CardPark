// reportModel.js
class Model {
    constructor() {
        this.issue = null;
    }

    setIssue(issue) {
        this.issue = issue;
    }

    getIssue() {
        return this.issue;
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
