function LotHView(model) {

    this.model = model;
    
    this.init();
}

LotHView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotHView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`h${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};

