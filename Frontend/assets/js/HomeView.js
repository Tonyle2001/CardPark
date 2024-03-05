
var HomeView = (function() {

    function updateSidebar() {
    
        var isOpen = HomeModel.getSidebarState();
        
        document.getElementById("mySidenav").style.width = isOpen ? "250px" : "0";
        
        document.getElementById("main").style.marginLeft = isOpen ? "250px" : "0";
    }

    return {
    
        updateSidebar: updateSidebar
    };
})();
