
   var sel = document.getElementById('start_time');
	var end = document.getElementById('end_time');
	var t;
	
	var frameURL;
	var lotL;
  
  	var choice = sel.value;
	var et;

	  //Placeholder select option
		if(choice == "choice")
			end.innerHTML = " ";
		  
		function onLoad(){
			var clicked = sessionStorage.getItem("clicked");
			switch(clicked){
				
				case "btnA":
					frameURL = "../assets/LotA.html"
					letL= 'A';
					break;
				
				case "btnB":
					frameURL = "../assets/LotB.html"
					lotL = 'B';
					break;
			  							  
				case "btnC":
					frameURL = "../LoginPage/parkingLotC.html";
					lotL = 'C';
					break;
					
				case "btnD":
					frameURL = "../assets/LotD.html";
					LotL = 'D';
					break;
					
				case "btnE":
					frameURL = "../assets/LotE.html";
					lotL = 'E';
					break;
					
				case "btnF":
					frameURL = "../LoginPage/parkingLotF.html";
					lotL = 'F';
					break;
					
				case "btnG":
					frameURL = "../LoginPage/parkingLotG.html";
					lotL = 'G';
					break;
				
				case "btnH":
					frameURL = "../assets/LotH.html";
					lotL = 'H';
					break;
					
				case "btnI":
					frameURL = "../LoginPage/parkingLotI.html";
					lotL = 'I';
					break;
					
				case "btnJ":
					frameURL = "../assets/LotJ";
					lotL = 'J';
					break;
					
				case "btnL":
					frameURL = "../LoginPage/parkingLotL.html";
					lotL = 'L';
					break;
					
				case "btnM":
					frameURL = "../LoginPage/parkingLotM.html";
					lotL = 'M';
					break;
					
				case "btnO":
					frameURL = "../assets/LotO";
					lotL = 'O';
					break;
					
				case "btnP":
					frameURL = "../assets/LotP";
					lotL = 'P';
					break;
			}
			
			document.getElementById('lot_frame').src=frameURL;
			document.getElementById('letter').innerHTML=lotL;
		}			
		  
		function onChange(value){
			var t = parseInt(value.charAt(0));
			
			if(document.querySelector('select[id="start_time"] option:checked').parentElement.label == 'AM'){ //If user is scheduling for the morning

				//If reservation time is between 10:00 and 11:30 AM (two-digit hr times)
				if (value == "10:00")
					et = "12:00 PM";
				else if(value == "10:30")
					et = "12:30 PM";
				else if(value == "11:00")
					et = "1:00 PM";
				else if(value == "11:30")
					et = "1:30 PM";
				else
					et = "0:00";
		   
				//If reservation time is a single-digit hour time			
				t = t + 2;
				if(et == "0:00")
					et = (value.replace(value.charAt(0), t) + " AM");
				
				end.innerHTML = et;
			}
			else{//If user is scheduling the start time in the afternoon.
				
				et = value.substring(1);
				end.innerHTML = et;
				
				if(value == "20:00")
					et = "10:00";
				if(value == "20:30")
					et = "10:30";
				
				end.innerHTML = et + " PM";
			}
	   }

		window.addEventListener('message', (event) => {
		   if(event.data === 'openConfirmDialog'){
			   
				if(confirm('Is This Spot Okay?')) {
					// Okay is clicked
					
				}
				
		   }
	   });

// sideNavListeners part below
var sideNavListeners = (function() {
    function init() {
        document.querySelector('.openbtn').addEventListener('click', sideNavApp.toggleNav);
        document.querySelector('.closebtn').addEventListener('click', sideNavApp.toggleNav);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init(); // DOMContentLoaded has already fired
    }

    return {
        init: init
    };
})();
