// reportListeners.js

document.getElementById('parkingLot-selector').addEventListener('change', function() {
    updateSpotNumberValidation(this.value);
});

function updateSpotNumberValidation(selectedLot) {
    var spotNumberInput = document.getElementById('spotNumber');

    // Remove previous event listeners to avoid stacking them
    spotNumberInput.removeEventListener('input', validateSpotNumber);

    switch(selectedLot) {
        case 'A':
            spotNumberInput.dataset.allowedMax = 137;
            break;
            
        case 'B':
        
            spotNumberInput.dataset.allowedMax = 200; 
            break;
            
        case 'C':
            
            spotNumberInput.dataset.allowedMax = 124; 
            break;
            
        case 'E':
            
            spotNumberInput.dataset.allowedMax = 200; 
            break;
            
        case 'F':
            
            spotNumberInput.dataset.allowedMax = 200; 
            break;
            
        case 'G':
            
            spotNumberInput.dataset.allowedMax = 200; 
            break;
            
        case 'H':
            
            spotNumberInput.dataset.allowedMax = 200; 
            break;
            
        case 'I':
            
            spotNumberInput.dataset.allowedMax = 200; 
            break;
            
        case 'J':
            
            spotNumberInput.dataset.allowedMax = 200; 
            break;
            
        case 'L':
            
            spotNumberInput.dataset.allowedMax = 200; 
            break;
            
        case 'M':
            
            spotNumberInput.dataset.allowedMax = '200'; 
            break;
            
        case 'O':
            
            spotNumberInput.dataset.allowedMax = '200'; 
            break;
            
        case 'P':
            
            spotNumberInput.dataset.allowedMax = '200'; 
            break;
            
        default:
            spotNumberInput.dataset.allowedMax = '1'; // Default or max value for other lots
            break;
    }

    spotNumberInput.addEventListener('input', validateSpotNumber);
}

function validateSpotNumber() {

    var max = this.dataset.allowedMax;
    
    var value = parseInt(this.value, 10);

    if ((isNaN(value) || value < 0 || value > max) && this.value !== '') {
    
        this.style.borderColor = 'red'; // Indicate error
        
        alert('Please enter a valid spot number.');
        
    } else {
    
        this.style.borderColor = 'green'; // Reset to default or valid color
        
        this.setCustomValidity('');
        
        
    }
}

function setupListeners(view, controller) {

    view.submitButton.addEventListener('click', () => {
    
        const issue = view.getSelectedIssue();
        
        const lot = view.getSelectedLot();
        
        controller.handleIssueSelection(issue);
        
        controller.handleLotSelection(lot);
    });
}

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
