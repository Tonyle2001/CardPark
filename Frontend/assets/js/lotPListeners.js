
function setupListeners(view, model) {

    document.querySelectorAll('.parking-spot').forEach(function(button, index) {
    
        button.addEventListener('click', function() {
        
            if (!model.spots[index].occupied) {
            
                model.setOccupied(index);
                
                view.updateButton(index, true);
            }
        });
    });
}

