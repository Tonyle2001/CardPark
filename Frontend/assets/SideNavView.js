
var sidNavView = (function() {

    function updateSidebar() {
    
        var isOpen = sideNavModel.getSidebarState();
        
        document.getElementById("mySidenav").style.width = isOpen ? "250px" : "0";
        
        document.getElementById("main").style.marginLeft = isOpen ? "250px" : "0";
    }

    return {
    
        updateSidebar: updateSidebar
    };
})();
