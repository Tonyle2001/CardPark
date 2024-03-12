// profileModel.js
var profileModel = {
  
    carMake: '',
  
    carModel: '',
  
    carColor: '',
  
    carYear: '',
  
    carLicensePlate: '',

    updateCarInfo: function(make, model, color, year, licensePlate) {
      
        this.carMake = make;
      
        this.carModel = model;
      
        this.carColor = color;
      
        this.carYear = year;
      
        this.carLicensePlate = licensePlate;
    }
};

// sideNavModel part below

var sideNavModel = (function() {
  
    var sidebarState = false; // false means closed, true means open

    function setSidebarState(state) {
      
        sidebarState = state;
    }

    function getSidebarState() {
      
        return sidebarState;
    }

    return {
      
        setSidebarState: setSidebarState,
      
        getSidebarState: getSidebarState
    };
})();
