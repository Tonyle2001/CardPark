
	var sel = document.getElementById('start_time');
	var end = document.getElementById('end_time');
	var t;
  
  	var choice = sel.value;
	var et;

	   
	   function onChange(value){
			var t = parseInt(value.charAt(0));
		   
			if(document.querySelector('select[id="start_time"] option:checked').parentElement.label == 'AM'){ //If user is scheduling for the morning
				//If reservation time is between 10:00 and 11:30 AM (two-digit hr times)
				if (value == "10:00")
					et = "12:00";
				else if(value == "10:30")
					et = "12:30";
				else if(value == "11:00")
					et = "13:00";
				else if(value == "11:30")
					et = "13:30";
				else
					et = "0:00";
		   
				//If reservation time is a single-digit hour time			
				t = t + 2;
				if(et == "0:00")
					et = value.replace(value.charAt(0), t);
				
				end.innerHTML = et;
			}
			else{//If user is scheduling the start time in the afternoon.
				
				et = value.substring(1);
				end.innerHTML = et;
				
				if(value == "20:00")
					end.innerHTML = "10:00";
				if(value == "20:30")
					end.innerHTML = "10:30";
			}
	   }	