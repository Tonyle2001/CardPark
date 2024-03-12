// profileView.js
var profileView = {
  
    displayVehicleInfo: function(model) {
      
        var vehicleInfo = 'Vehicle Information: <br> Make: ' + model.carMake +
          
            '<br>Model: ' + model.carModel +
          
            '<br>Color: ' + model.carColor +
          
            '<br>Year: ' + model.carYear +
          
            '<br>License Plate: ' + model.carLicensePlate;
      
        document.getElementById('vehicleInfo').innerHTML = vehicleInfo;
    }
};

// sideNavView part below

var sideNavView = (function() {
  
    function updateSidebar() {
      
        var isOpen = sideNavModel.getSidebarState();
      
        document.getElementById("mySidenav").style.width = isOpen ? "250px" : "0";
      
        document.getElementById("main").style.marginLeft = isOpen ? "250px" : "0";
    }

    return {
        updateSidebar: updateSidebar
    };
})();
