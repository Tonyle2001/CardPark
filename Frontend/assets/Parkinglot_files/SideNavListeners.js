
var sideNavListeners = (function() {

    function init() {
    
        document.querySelector('.openbtn').addEventListener('click', sideNavApp.toggleNav);
        
        document.querySelector('.closebtn').addEventListener('click', sideNavApp.toggleNav);
    }

    // Ensure listeners are initialized when the DOM is fully loaded
    if (document.readyState === 'loading') {
    
        document.addEventListener('DOMContentLoaded', init);
        
    } else {
    
        init();  // DOMContentLoaded has already fired
    }

    return {
    
        init: init
    };
})();
