function LotAModel() {
    this.spots = [];  // This will hold the parking spot data from the server
}

function getDatabase(){
    fetch('http://localhost:3000/reservations')
    .then(response =>{
        if (!response.ok) {
            throw new Error('network returns error');
            }
        return response.json();
    })
    .then(data => console.log(data))
    .catch((error) => {
        // Handle error
        console.log("error ", error);
    });
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

    //This will output data from the table in the database of lot A
    getDatabase();

};

