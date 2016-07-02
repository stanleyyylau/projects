window.onload=function(){
	var stop=false;
	function getValue(e){
		if (stop) {
			document.getElementById("valueBox").innerText="";
			stop=!stop;
		}
		var valueBox=document.getElementById("valueBox");
		var currentValue=valueBox.innerText;
		var beingClick=e.target;
		if(beingClick.innerText=="AC"){
			valueBox.innerText="";
		}else{
		valueBox.innerText=currentValue+beingClick.innerText;
		}
	}//end get value function

	function test(){
		if(!stop){
		var valueBox=document.getElementById("valueBox");
		var tobecalculated=valueBox.innerText;
		valueBox.innerText=eval(tobecalculated);
		stop=!stop
		}//end if
		}// end test function

	function backWard(){
		var valueBox=document.getElementById("valueBox");
		var tobedeleted=valueBox.innerText;
		tobedeleted=tobedeleted.split("");
		var newArray=[];
		for (i=0;i<tobedeleted.length-1;i++){
			newArray.push(tobedeleted[i]);
		}
		newArray=newArray.join("");
		valueBox.innerText=newArray;
		}




	document.getElementById("deleteOne").addEventListener("click",backWard);

	document.getElementById("result").addEventListener("click",test);


	// Event listening for all input keys
	var $inputs = document.querySelectorAll(".input-control");
	for(var i=0; i < $inputs.length;i++){
		$inputs[i].addEventListener("click",getValue);
	}




}; //end window onload
