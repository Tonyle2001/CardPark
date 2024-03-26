// profileListeners.js
var profileListeners = {

    attachSubmitListener: function(model, view) {
    
        var submitButton = document.getElementById('vehicleForm').querySelector('button');
        
        submitButton.onclick = function() {
        
            var make = document.getElementById('carMake').value;
            
            var modelValue = document.getElementById('carModel').value;
            
            var color = document.getElementById('carColor').value;
            
            var year = document.getElementById('carYear').value;
            
            var licensePlate = document.getElementById('carLicensePlate').value;
            
            model.updateCarInfo(make, modelValue, color, year, licensePlate);
            
            view.displayVehicleInfo(model);
        };
    }
};

// sideNavListeners part below

var sideNavListeners = (function() {
    function init() {
    
        document.querySelector('.openbtn').addEventListener('click', sideNavApp.toggleNav);
        
        document.querySelector('.closebtn').addEventListener('click', sideNavApp.toggleNav);
    }

    if (document.readyState === 'loading') {
    
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init(); // DOMContentLoaded has already fired
    }

    return {
        init: init
    };
})();
