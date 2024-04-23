function LotFView(model) {

    this.model = model;
    
    this.init();
}

LotFView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotFView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`f${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};

