
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
const wrapper = document.getElementById('parking-lot');

//Event listener for all buttons within the parking lot
wrapper.addEventListener('click', (event) => {
	
	//Check that what is being clicked is a button, so clicking the div doesn't trigger the dialog.
	const isButton = event.target.nodeName === 'BUTTON';
	if(!isButton)
		return;
	
	var ident = event.target.getAttribute('id');
	
	window.parent.postMessage(ident, '*');
	
});

