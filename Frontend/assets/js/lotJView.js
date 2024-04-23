function LotJView(model) {

    this.model = model;
    
    this.init();
}

LotJView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotJView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`j${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};

