
   var sel = document.getElementById('start_time');
   var end = document.getElementById('end_time');
   var int t;
   select.addEventListener('change', function handleChange(event){
	   var t = Number(sel.selected.value.charAt(0));
	   var str et;
	   var val = sel.selected.value;
	   if((selected.parent().attr('label')) == 'AM'){ //If user is scheduling for the morning
			//If reservation time is between 10:00 and 11:30 AM (two-digit hr times)
			if(sel.selected.value == "10:00" )
				et = "12:00";
			if(sel.selected.value == "10:30")
				et = "12:30";
			if(sel.selected.value == "11:00")
				et = "1:00";
			if(sel.selected.value == "11:30")
				et = "1:30";
		   
			//If reservation time is a single-digit hour time
			function setCharAt(str,index,chr) {
				if(index > str.length-1) return str;
					return str.substring(0,index) + chr + str.substring(index+1);
			}			
			t = t + 2;
			if(et == "")
				et = setCharAt(et, 0, t);
			end.textContent = et;
			
   }