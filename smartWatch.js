/*Function to display Day, Date, Time*/
function smartTime(){
	var today = new Date();
	var month=today.getMonth();
	var monthlist=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var date=today.getDate();
	var day = today.getDay();
	var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
	var hour = today.getHours();
	var minute = today.getMinutes();
	var prepand = (hour >= 12)? " PM ":" AM ";
	hour = (hour > 12)? hour - 12: hour;
	var t= hour  +':'+ minute
	var d = daylist[day] + " "
	
		if(date<10){
			date='0'+date;
		}
		else{
			date=date;
		}
		if(hour<10){
			hour='0'+hour;
		}
		else{
			hour=hour;
		}
		if(minute<10){
			minute='0'+minute;
		}
		else{
			minute=minute;
		}

	document.getElementById('time').innerHTML =t;
	document.getElementById('day').innerHTML =d;
	document.getElementById('date').innerHTML =monthlist[month]+' '+date;
}


function messageIcon(icon){
	x= document.getElementById("homescreen")
	x.style.display="none";
	c= document.getElementById("message")
	c.style.display="none";
	z= document.getElementById("music")
	z.style.display="none"; 
	z= document.getElementById("timer")
	z.style.display="none"; 
		if(icon==="me"){
			y= document.getElementById("message")
			y.style.display="block"; 
		}
		else if(icon==="mu"){
			z= document.getElementById("music")
			z.style.display="block"; 
		}
		else if(icon==="cl"){
			a= document.getElementById("timer")
			a.style.display="block"; 
		}
		else if(icon==="hs"){
			k=document.getElementById("homescreen")
	  		k.style.display="block";
		}
}
