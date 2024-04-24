function LotAView(model) {

    this.model = model;
    
    this.init();
}

LotAView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotAView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`a${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};

