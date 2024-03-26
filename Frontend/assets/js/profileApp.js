
// profileApp.js
var profileApp = {

    init: function() {
    
        profileListeners.attachSubmitListener(profileModel, profileView);
    }
};

profileApp.init();

// Simulate data fetching from a server
function fetchUserData() {

    setTimeout(() => {
        // Simulated user data - replace this with an actual call
        const userData = {
        
            fname: 'John',
            
            lname: 'Doe',
            
            email: 'johndoe@example.com',
            
            uid: '12345'
        };

        // Update the UI with the fetched data
        document.getElementById('fname').textContent = userData.fname;
        
        document.getElementById('lname').textContent = userData.lname;
        
        document.getElementById('email').textContent = userData.email;
        
        document.getElementById('uid').textContent = userData.uid;
    }, 1000); // Simulate a network delay
}

// Invoke the fetch function when is initialized
profileApp.init = function() {

    fetchUserData();
    
    profileListeners.attachSubmitListener(profileModel, profileView);
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
