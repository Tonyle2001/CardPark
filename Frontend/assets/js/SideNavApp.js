
var HomeApp = (function() {

    function toggleNav() {
    
        var currentState = HomeModel.getSidebarState();
        
        HomeModel.setSidebarState(!currentState);
        
        HomeView.updateSidebar();
    }

    return {
    
        toggleNav: toggleNav
    };
})();
