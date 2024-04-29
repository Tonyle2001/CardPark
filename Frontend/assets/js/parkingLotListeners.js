// const { response } = require("express");
// const { check_in } = require("../../../Backend/controllers/reservations");

	var sel = document.getElementById('start_time');
	var end = document.getElementById('end_time');
	var t;
	
	var frameURL;
	var lotL;
  
  	var choice = sel.value;
	var et;
	var end_time;

	  //Placeholder select option
		if(choice == "choice")
			end.innerHTML = " ";
		  
		function onLoad(){ //When a lot is chosen, its page url is passed to the iframe in the parking lot page.
			var clicked = sessionStorage.getItem("clicked");
			switch(clicked){
				
				case "btnA":
					frameURL = "ParkingLotA.html"
					letL= 'A';
					break;
				
				case "btnB":
					frameURL = "ParkingLotB.html"
					lotL = 'B';
					break;
			  							  
				case "btnC":
					frameURL = "ParkingLotC.html";
					lotL = 'C';
					break;
					
				case "btnD":
					frameURL = "ParkingLotD.html";
					LotL = 'D';
					break;
					
				case "btnE":
					frameURL = "ParkingLotE.html";
					lotL = 'E';
					break;
					
				case "btnF":
					frameURL = "ParkingLotF.html";
					lotL = 'F';
					break;
					
				case "btnG":
					frameURL = "ParkingLotG.html";
					lotL = 'G';
					break;
				
				case "btnH":
					frameURL = "ParkingLotH.html";
					lotL = 'H';
					break;
					
				case "btnI":
					frameURL = "ParkingLotI.html";
					lotL = 'I';
					break;
					
				case "btnJ":
					frameURL = "ParkingLotJ.html";
					lotL = 'J';
					break;
					
				case "btnL":
					frameURL = "ParkingLotL.html";
					lotL = 'L';
					break;
					
				case "btnM":
					frameURL = "ParkingLotM.html";
					lotL = 'M';
					break;
					
				case "btnO":
					frameURL = "ParkingLotO";
					lotL = 'O';
					break;
					
				case "btnP":
					frameURL = "ParkingLotP";
					lotL = 'P';
					break;
			}
			
			document.getElementById('lot_frame').src=frameURL;
			document.getElementById('letter').innerHTML=lotL;
		}			
		  
		function onChange(value){ // Update displayed 'End Time' when the start-time dropdown is changed.
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
				end_time = t;
				if(et == "0:00")
					end_time = value.replace(value.charAt(0), t);
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

				//end_time = parseInt(value.charAt(0)) + 14;
				end_time = value.replace(value.charAt(1), t + 2);
				console.log(end_time);
				end.innerHTML = et + " PM";
			}
	   }

		window.addEventListener('message', (event) => {// Prompts user after they click a parking spot.
			var spot;
			
			
			var time;
			
			spot = event.data;
			
			if(sel.value == "choice"){ // Prompt user with error message if they pick a spot before choosing a reservation time.
				window.alert("Please Select a Starting Time");
			}
			 else if(confirm('Is Spot ' + spot + ' Okay?')) {
				// If 'Okay' is clicked, send spot id and res time to backend. 
				time = sel.value;
				console.log(time);
				console.log(end_time);
				console.log(spot);
				const form = {
					uid: 135,
					lid: spot.charAt(0),
					spot: spot.substring(1),
					check_in: false,
					start_time: time,
					end_time: end_time,
				};
				//payload = JSON.stringify(form);
				const payload = new URLSearchParams(form)
				console.log(payload);
				//change local host address just incase of errors
				fetch('http://localhost:3000/reservations/add', {
					method: "POST",
					headers: {
					  "Content-Type": "application/x-www-form-urlencoded"
				  },
				  	body: payload,
				})
				.then(response =>{
					if (!response.ok) {
						throw new Error('network returns error');
					  }
				})
				.then(data => console.log(data))
				.catch((error) => {
					// Handle error
					console.log("error ", error);
				});
			}
			
			 else{
				 return;
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
