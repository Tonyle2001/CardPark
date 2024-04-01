// reportView.js
class View {
    constructor() {
        this.issueSelector = document.getElementById('issue-selector');
        
        this.submitButton = document.getElementById('submit-button');
    }

    getSelectedIssue() {
        return this.issueSelector.value;
    }

    navigateToIssuePage(issue) {
    
        const issuePageMap = {
            'parked-car': 'reportParkedCar.html',
            
            'hazard-item': 'reportHazardItem.html',
            
            'weather-issue': 'reportWeatherIssue.html',
        };

        const targetPage = issuePageMap[issue];
        
        if (targetPage) {
        
            window.location.href = targetPage;
        } else {
        
            alert('Please select an issue.');
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
