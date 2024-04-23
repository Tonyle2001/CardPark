function LotIView(model) {

    this.model = model;
    
    this.init();
}

LotIView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotIView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`i${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};

