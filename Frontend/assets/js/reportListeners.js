// reportListeners.js
function setupListeners(view, controller) {

    view.submitButton.addEventListener('click', () => {
    
        const issue = view.getSelectedIssue();
        
        controller.handleIssueSelection(issue);
    });
}



// sideNavListeners part below

var sideNavListeners = (function() {
    function init() {
        document.querySelector('.openbtn').addEventListener('click', sideNavApp.toggleNav);
        document.querySelector('.closebtn').addEventListener('click', sideNavApp.toggleNav);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init(); // DOMContentLoaded has already fired
    }

    return {
        init: init
    };
})();
