function LotMModel() {
    //this is just in case you want to 
    //localStorage.clear();
    this.spots = JSON.parse(localStorage.getItem('parkingSpots')) || new Array(45).fill({occupied: false, timeoutEnd: null});
    fetch('http://localhost:3000/reservations/lot/M')
    .then(response =>{
        if (!response.ok) {
            throw new Error('network returns error');
            }
        return response.json();
    })
    .then(data => {
        console.log(data.reservations);
        console.log(data.reservations[0].spot_num);
        for(i = 0; i < data.reservations.length; i++){
            const ct = new Date();
            const et = new Date(ct.getTime() + (120*60000)); // 120 minute
            this.spots[data.reservations[i].spot_num - 1]= {
                occupied: true,
                timeoutEnd: et.getTime()
            };
            this._commit();
            this._startTimeout(data.reservations[i].spot_num - 1, (120*60000));
        }

    })
    .catch((error) => {
        // Handle error
        console.log("error ", error);
    });
    this.restoreState();
}

LotMModel.prototype.setOccupied = function(index) {
    const currentTime = new Date();
    const endTime = new Date(currentTime.getTime() + 10000); // 1 minute
    this.spots[index] = {
        occupied: true,
        timeoutEnd: endTime.getTime()
    };
    this._commit();
    this._startTimeout(index, 10000);
};

LotMModel.prototype._startTimeout = function(index, delay) {
    setTimeout(() => {
        this.spots[index].occupied = false;
        this.spots[index].timeoutEnd = null;
        this._commit();
        if (typeof view !== 'undefined') {
            view.updateButton(index, false);
        }
    }, delay);
};

LotMModel.prototype._commit = function() {
    localStorage.setItem('parkingSpots', JSON.stringify(this.spots));
};

LotMModel.prototype.restoreState = function() {
    const currentTime = new Date().getTime();
    this.spots.forEach((spot, index) => {
        if (spot.occupied && spot.timeoutEnd && currentTime < spot.timeoutEnd) {
            const timeLeft = spot.timeoutEnd - currentTime;
            this._startTimeout(index, timeLeft);
        } else {
            spot.occupied = false;
            spot.timeoutEnd = null;
        }
        if (typeof view !== 'undefined') {
            view.updateButton(index, spot.occupied);
        }
    });
    this._commit();
};

