function LotCView(model) {

    this.model = model;
    
    this.init();
}

LotCView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotCView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`c${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};
