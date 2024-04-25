
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
        
        //add the cookie info here
        const userData = {
        
            fname: 'John',
            
            lname: 'Doe',
            
            email: 'johndoe@example.com',
            
            uid: '12345'
        };
        const info = {
            uid: '12345'
        };
        const outputInfo = {};
        const payload = new URLSearchParams(info)
        console.log([...payload]);

        fetch('http://localhost:3000/user/getByID', {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
          },
              body: info,
        })
        .then(response =>{
            if (!response.ok) {
                throw new Error('network returns error');
                }
        })
        .then(data =>{
            console.log(data);
            outputInfo = data;
        })
        .catch((error) => {
            // Handle error
            console.log("error ", error);
        });

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
