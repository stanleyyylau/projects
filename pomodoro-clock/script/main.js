window.onload=function(){
var toStop=false;
var startCountDown;
var resume=false;
var cantSetSession=false;
var dateNow = new Date();
var dateEnd = new Date();
var thisTime="";

//here's four click functions
function breakPlus(){
	var currentContent=document.getElementById("breakContent").innerText;
	var finalContent=parseInt(currentContent,10);
	finalContent++;
	document.getElementById("breakContent").innerText=finalContent;
}

function sessionPlus(){
	if(!cantSetSession){
	var currentContent=document.getElementById("sessionCentent").innerText;
	var finalContent=parseInt(currentContent,10);
	finalContent++;
	document.getElementById("sessionCentent").innerText=finalContent;
	document.getElementById("countDown").innerText=finalContent;
	if(startCountDown!==undefined){
		resume=false;
	}
}
}

function breakMinus(){
	var currentContent=document.getElementById("breakContent").innerText;
	if(currentContent>1){
		var finalContent=parseInt(currentContent,10);
		finalContent--;
		document.getElementById("breakContent").innerText=finalContent;
	}
}

function sessionMinus(){
	if(!cantSetSession){
	var currentContent=document.getElementById("sessionCentent").innerText;
	if(currentContent>1){
		var finalContent=parseInt(currentContent,10);
		finalContent--;
		document.getElementById("sessionCentent").innerText=finalContent;
		document.getElementById("countDown").innerText=finalContent;
	}
	if(startCountDown!==undefined){
		resume=false;
	}
	}
}


function breakDisplay(){
	dateEnd=new Date();
	dateNow=new Date();
	var sessionLength=parseInt(document.getElementById("breakContent").innerText,10);
	dateEnd.setMinutes(dateNow.getMinutes()+sessionLength);
	toStop=true;
	cantSetSession=true;
	startCountDown=window.setInterval(function(){
	dateNow = new Date();
	var timeDifference = dateEnd-dateNow;
	if(parseInt(timeDifference,10)/1000<1){
		window.clearInterval(startCountDown);
		document.getElementById("sessionOrBreak").innerText="SESSION";
		toStop=true;
		getAndShowCurrentTime();

	}
	var min=Math.floor(timeDifference/(1000*60));
	var sec=timeDifference-(min*60*1000);
	sec=(sec/1000).toString().slice(0,2);
	if(sec<10){
		sec="0"+parseInt(sec,10);
	}
	var result=min+":"+sec;
	document.getElementById("countDown").innerText=result;
	},1);

}


function getTime(){
	//this code will get time remaining run based on your end date//
	dateNow = new Date();
	var timeDifference = dateEnd-dateNow;
	if(parseInt(timeDifference,10)/1000<1){
		window.clearInterval(startCountDown);
		document.getElementById("sessionOrBreak").innerText="Times up!!!";
		toStop=false;
		resume=false;
		cantSetSession=false;
		breakDisplay();

	}
	var min=Math.floor(timeDifference/(1000*60));
	var sec=timeDifference-(min*60*1000);
	sec=(sec/1000).toString().slice(0,2);
	if(sec<10){
		sec="0"+parseInt(sec,10);
	}
	var result=min+":"+sec;
	document.getElementById("countDown").innerText=result;
	// get time remaining based on your end date
}


function getAndShowCurrentTime(){
	thisTime="session";
	if(resume){
	// this code is for getting end date
	dateEnd = new Date();
	dateNow = new Date();
	document.getElementById("sessionOrBreak").innerText="SESSION";
	sessionLength=document.getElementById("countDown").innerText;
	sessionLength=sessionLength.split(":");
	dateEnd.setMinutes(dateNow.getMinutes()+parseInt(sessionLength[0]));
	dateEnd.setSeconds(dateNow.getSeconds()+parseInt(sessionLength[1]));
	// we get end date from a paused time now
	toStop=true;
	cantSetSession=true;
	startCountDown=window.setInterval(getTime,1);
	}else{
	// not from resume instead it's countdowning from a whole number
	dateNow = new Date();
	dateEnd = new Date();
	document.getElementById("sessionOrBreak").innerText="SESSION";
	var sessionLength=parseInt(document.getElementById("sessionCentent").innerText,10);
	dateEnd.setMinutes(dateNow.getMinutes()+sessionLength);
	// finishing setting end date
	toStop=true;
	cantSetSession=true;
	startCountDown=window.setInterval(getTime,1);
	}//end if else
}// end this fucking getAndShowCurrentTime function


function start(){
	if(!toStop){
		if(document.getElementById("sessionOrBreak").innerText==="Times up!!!"){
			return;
		}else{
		getAndShowCurrentTime();
			}
	}else{

		window.clearInterval(startCountDown);
		resume=true;
		toStop=false;
		cantSetSession=false;

	}// end if
}//end start function



document.getElementById("breakPlus").addEventListener("click",breakPlus);
document.getElementById("sessionPlus").addEventListener("click",sessionPlus);
document.getElementById("breakMinus").addEventListener("click",breakMinus);
document.getElementById("sessionMinus").addEventListener("click",sessionMinus);
document.getElementById("theClock").addEventListener("click",start);
};
