function LotGView(model) {

    this.model = model;
    
    this.init();
}

LotGView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotGView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`g${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};

