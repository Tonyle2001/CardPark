
   var sel = document.getElementById('start_time');
   var end = document.getElementById('end_time');
   var t;
  
	   var t = Number(sel.selected.value.charAt(0));
	   var et;
	   var choice = sel.selected.value;
	   
	   function onChange(){
		   
			if((selected.parent().attr('label')) == 'AM'){ //If user is scheduling for the morning
				//If reservation time is between 10:00 and 11:30 AM (two-digit hr times)
				if(choice == "10:00")
					et = "12:00";
				else if(choice == "10:30")
					et = "12:30";
				else if(choice == "11:00")
					et = "1:00";
				else if(choice == "11:30")
					et = "1:30";
				else
					et = "0:00";
		   
				//If reservation time is a single-digit hour time			
				t = t + 2;
				if(et == "0:00")
					et = choice.replace(choice.charAt(0), t);
				
				end.textContent = et;
			}
		}	
		sel.onchange = onChange;