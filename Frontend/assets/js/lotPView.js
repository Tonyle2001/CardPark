function LotPView(model) {

    this.model = model;
    
    this.init();
}

LotPView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotPView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`p${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};

