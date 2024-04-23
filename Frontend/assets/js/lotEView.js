function LotEView(model) {

    this.model = model;
    
    this.init();
}

LotEView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotEView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`e${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};

