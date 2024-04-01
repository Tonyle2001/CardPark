// reportApp.js
document.addEventListener('DOMContentLoaded', () => {

    const model = new Model();
    
    const view = new View();
    
    const controller = new Controller(model, view);
    
    setupListeners(view, controller);
});

// Part of reportApp.js

class Controller {

    constructor(model, view) {
    
        this.model = model;
        
        this.view = view;
    }

    handleIssueSelection(issue) {
    
        this.model.setIssue(issue);
        
        this.view.navigateToIssuePage(issue);
    }
}
// sideNavApp part below

var sideNavApp = (function() {
    function toggleNav() {
    
        var currentState = sideNavModel.getSidebarState();
        
        sideNavModel.setSidebarState(!currentState);
        
        sideNavView.updateSidebar();
    }

    return {
        toggleNav: toggleNav
    };
})();

