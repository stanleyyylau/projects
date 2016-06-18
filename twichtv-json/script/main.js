
//let define some global valibables first
	var urlun="#";
	var resultObject={};
	resultObject.logo=[];
	resultObject.url=[];
	resultObject.namee=[];
	resultObject.statuss=[];
	resultObject.append=appendContent;
	var statushtml="";


	var channelArr=["freecodecamp","storbeck","sheevergaming","habathcx","RobotCaleb","ESL_SC2","ogamingsc2","noobs2ninjas","beohoff","askjoshy","ggnetworktv","fjiejfijijijij","comster404"];


//this function is to get all channel's info, those that are not streaming
function getAllnotStreaming(data){
	var thisItemIsAppend=false;
	for(var i=0;i<resultObject.namee.length;i++){
		if (resultObject.namee[i]==data.display_name) {
			thisItemIsAppend=true;
		};
	}// end for
	//real thing
	if (thisItemIsAppend==false){
		if(data.status==404){
			resultObject.logo.push("https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F");
			resultObject.url.push("#");

			resultObject.statuss.push("Account Not exist");
			var str=data.message;
			var start=str.indexOf("'");
			var end=str.indexOf("'",start+1);
			var finalstr=str.substring(start+1,end);
			resultObject.namee.push(finalstr);
		}else if(data.status==422){
			resultObject.logo.push("https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F");
			resultObject.url.push("#");

			resultObject.statuss.push("Account closed");
			var str=data.message;
			var start=str.indexOf("'");
			var end=str.indexOf("'",start+1);
			var finalstr=str.substring(start+1,end);
			resultObject.namee.push(finalstr);
		}else{
		resultObject.logo.push(data.logo);
		resultObject.url.push(data.url);
		resultObject.namee.push(data.display_name);
		resultObject.statuss.push("offline");
		}
	}


	//this the the last part, appending
	if(resultObject.logo.length==channelArr.length){
		console.log(resultObject);
		for(var ii=0; ii<channelArr.length;ii++){
		resultObject.append(resultObject.logo[ii],resultObject.url[ii],resultObject.namee[ii],resultObject.statuss[ii]);
		}
	}
}





//get all streaming channle's info
function getAllnowStreaming(data){
	if(data.stream){
		resultObject.logo.push(data.stream.channel.logo);
		resultObject.url.push(data.stream.channel.url);
		resultObject.namee.push(data.stream.channel.display_name);
		resultObject.statuss.push(data.stream.channel.status);
	}
}




//to append channel to page, wheather it's streaming or not, all you need a one function
function appendContent(logo,url,name,status){
	if (logo==null) {
		logo="https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
	};
	if(status!="offline" && status!="Account closed" && status!="Account Not exist"){
	statushtml+='<div class="row channels onlinenow"> <div class="col-md-2"><img class="logoimg" src="'+logo+'"></div> <div class="col-md-4"><div class="name"><a target="_blank" href="'+url+'">'+name+'</a></div></div> <div class="col-md-6"><div class="streaming">'+status+'</div></div></div>';
	}else{
	statushtml+='<div class="row channels offlinenow"> <div class="col-md-2"><img class="logoimg" src="'+logo+'"></div> <div class="col-md-4"><div class="name"><a target="_blank" href="'+url+'">'+name+'</a></div></div> <div class="col-md-6"><div class="streaming">'+status+'</div></div></div>';
	}
	$("#content").html(statushtml);
	}


//below are control buttons
function showOnlineOnly(){
	$(".offlinenow").show();
	$(".onlinenow").show();
	$(".offlinenow").hide();
}
function showOfflineOnly(){
	$(".offlinenow").show();
	$(".onlinenow").show();
	$(".onlinenow").hide();
}
function showAll(){
	$(".offlinenow").show();
	$(".onlinenow").show();
}







$(document).ready(function() {
//regestor contol event
$("#showOnlineOnly").click(showOnlineOnly);
$("#showOfflineOnly").click(showOfflineOnly);
$("#showAll").click(showAll);

// get all now streaming channel first
	for(var i=0;i<channelArr.length;i++){
		var url="https://api.twitch.tv/kraken/streams/"+channelArr[i]+"?callback=?";
		$.ajax({
			dataType:"json",
			async:false,
			url:url,
			success:getAllnowStreaming,
		});
	}//end of for loop


// let's now get not steaming channels
	for(var i=0;i<channelArr.length;i++){
		var url="https://api.twitch.tv/kraken/channels/"+channelArr[i]+"?callback=?";
		$.ajax({
			dataType:"json",
			async:false,
			url:url,
			success:getAllnotStreaming,
		});
	}//end of another for loop



});
