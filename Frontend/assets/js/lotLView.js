function LotLView(model) {

    this.model = model;
    
    this.init();
}

LotLView.prototype.init = function() {

    this.model.spots.forEach((spot, index) => {
    
        this.updateButton(index, spot.occupied);
    });
};

LotLView.prototype.updateButton = function(index, occupied) {

    var button = document.getElementById(`l${index + 1}`);
    
    button.className = 'parking-spot ' + (occupied ? 'occupied' : 'available');
};

