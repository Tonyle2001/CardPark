function LotOModel() {
    this.spots = JSON.parse(localStorage.getItem('parkingSpots')) || new Array(51).fill({occupied: false, timeoutEnd: null});
    this.restoreState();
}

LotOModel.prototype.setOccupied = function(index) {
    const currentTime = new Date();
    const endTime = new Date(currentTime.getTime() + 10000); // 1 minute
    this.spots[index] = {
        occupied: true,
        timeoutEnd: endTime.getTime()
    };
    this._commit();
    this._startTimeout(index, 10000);
};

LotOModel.prototype._startTimeout = function(index, delay) {
    setTimeout(() => {
        this.spots[index].occupied = false;
        this.spots[index].timeoutEnd = null;
        this._commit();
        if (typeof view !== 'undefined') {
            view.updateButton(index, false);
        }
    }, delay);
};

LotOModel.prototype._commit = function() {
    localStorage.setItem('parkingSpots', JSON.stringify(this.spots));
};

LotOModel.prototype.restoreState = function() {
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

