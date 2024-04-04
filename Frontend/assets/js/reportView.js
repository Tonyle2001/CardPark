// reportView.js
class View {
    constructor() {
        this.issueSelector = document.getElementById('issue-selector');
        
        this.submitButton = document.getElementById('submit-button');
        
        this.parkingLotSelector = document.getElementById('parkingLot-selector');
        
        this.subject = null;
        
        this.pickedLot = null;
    }

    getSelectedIssue() {
    
        return this.issueSelector.value;
    }
    
    getSelectedLot(){
    	
    	return this.parkingLotSelector.value;
    
    }

    issueSelection(issue) {
    
        const issueMap = {
            'parked-car': 'Other Vechile Parked In Your Spot',
            
            'hazard-item': 'Hazard Item In A Spot',
            
            'weather-issue': 'Weather Preventing No Parking',
        };

        const targetIssue = issueMap[issue];
        
        if (targetIssue) {
        
            this.subject = targetIssue; // For Email Subject
            alert(this.subject);
        } else {
        
            alert('Please select an issue.');
        }
    }
    lotSelection(lot){
    	
    	const lotMap = {
            'A': 'Lot A Selected',
            
            'B': 'Lot B Selected',
            
            'C': 'Lot C Selected',
            
            'E': 'Lot E Selected',
            
            'F': 'Lot F Selected',
            
            'G': 'Lot G Selected',
            
            'H': 'Lot H Selected',
            
            'I': 'Lot I Selected',
            
            'J': 'Lot J Selected',
            
            'L': 'Lot L Selected',
            
            'M': 'Lot M Selected',
            
            'O': 'Lot O Selected',
            
            'P': 'Lot P Selected'
        };
        const targetLot = lotMap[lot];
        
    	if (targetLot) {
        
            this.pickedLot = targetLot; // For Email Subject
            
            alert(this.pickedLot);
        } else {
        
            alert('Please select a lot.');
        }
    	
    }
}

// sideNavView part below

var sideNavView = (function() {
    function updateSidebar() {
    
        var isOpen = sideNavModel.getSidebarState();
        
        document.getElementById("mySidenav").style.width = isOpen ? "250px" : "0";
        
        document.getElementById("main").style.marginLeft = isOpen ? "250px" : "0";
    }

    return {
        updateSidebar: updateSidebar
    };
})();
