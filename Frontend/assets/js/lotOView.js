function LotOView(model) {

    this.model = model;
    
    this.init();
}

LotOView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotOView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`o${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};

