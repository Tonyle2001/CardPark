function LotBView(model) {

    this.model = model;
    
    this.init();
}

LotBView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotBView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`b${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};

