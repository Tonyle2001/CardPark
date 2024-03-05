
var HomeListeners = (function() {

    function init() {
    
        document.querySelector('.openbtn').addEventListener('click', HomeApp.toggleNav);
        
        document.querySelector('.closebtn').addEventListener('click', HomeApp.toggleNav);
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
