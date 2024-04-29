function LotAView(model) {

    this.model = model;
    
    this.init();
}

// Initialize the view by updating all buttons based on the model data
LotAView.prototype.init = function() {

    this.updateAllButtons();
};

// Update the display of all buttons
LotAView.prototype.updateAllButtons = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

// Update the display of a single button
LotAView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`a${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
    
    button.textContent = occupied ? 'Occupied' : 'Available'; // Optionally update button text
};

