
var sideNavModel = (function() {

    var sidebarState = false; // false means closed, true means open

    function setSidebarState(state) {
    
        sidebarState = state;
    }

    function getSidebarState() {
    
        return sidebarState;
    }

    // more functions to handle user preferences or other data-related aspects

    return {
        setSidebarState: setSidebarState,
        
        getSidebarState: getSidebarState
    };
})();
