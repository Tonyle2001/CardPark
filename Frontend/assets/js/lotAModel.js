function LotAModel() {
    this.spots = [];  // This will hold the parking spot data from the server
}

// Method to set spots with fetched data from the server
LotAModel.prototype.setSpots = function(spotsData) {
    this.spots = spotsData;
};

// Method to update a specific spot's occupied status
LotAModel.prototype.setOccupied = function(index, occupied) {

    if (index >= 0 && index < this.spots.length) {
    
        this.spots[index].occupied = occupied;
        
        this._commit(index, occupied);
    }
};

// Simulate a commit to the server
LotAModel.prototype._commit = function(index, occupied) {

    fetch(`/api/spots/${index}`, {
    
        method: 'POST',
        
        headers: {
        
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ occupied: occupied })
    })
    .then(response => response.json())
    
    .then(data => {
    
        console.log('Spot update success:', data);
        
    })
    
    .catch(error => {
    
        console.error('Error updating spot:', error);
    });
};

