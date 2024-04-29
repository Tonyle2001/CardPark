var model = new LotAModel();

var view = new LotAView(model);


// Function to fetch parking spots status from the server
function fetchParkingSpots() {

    fetch('/api/spots')
    
        .then(response => response.json())
        
        .then(data => {
        
            model.setSpots(data.spots);  // Update model with fetched data
            
            view.updateAllButtons();     // Update view to reflect the new model state
        })
        .catch(error => console.error('Error fetching parking spots:', error));
}

// Fetch parking spots data when the page loads
document.addEventListener('DOMContentLoaded', fetchParkingSpots);

// Setup event listeners
setupListeners(view, model);



