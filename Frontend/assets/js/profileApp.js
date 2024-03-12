// profileApp.js
var profileApp = {
  
    init: function() {
      
        profileListeners.attachSubmitListener(profileModel, profileView);
    }
};

profileApp.init();

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

