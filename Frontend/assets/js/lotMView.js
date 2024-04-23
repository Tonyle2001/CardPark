function LotMView(model) {

    this.model = model;
    
    this.init();
}

LotMView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotMView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`m${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};

