
function setupListeners(view, model) {

    document.querySelectorAll('.parking-spot').forEach(function(button, index) {
    
        button.addEventListener('click', function() {
        
            if (!model.spots[index].occupied) {
            
                // Attempt to reserve the spot
                
                model.setOccupied(index, true);
                
                view.updateButton(index, true);
            } else {
            
                // Display message if the spot is already occupied
                alert('This spot is taken and cannot be reserved.');
            }
        });
    });

    // Additional listener setup, if any
}


const wrapper = document.getElementById('parking-lot');

// Event listener for all buttons within the parking lot
wrapper.addEventListener('click', (event) => {

    const isButton = event.target.nodeName === 'BUTTON';
    
    if (!isButton) return;
    
    var ident = event.target.getAttribute('id');
    
    window.parent.postMessage(ident, '*'); // Send message to parent window if needed
});


