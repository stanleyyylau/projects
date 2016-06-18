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


	document.getElementById("0").addEventListener("click",getValue);
	document.getElementById("1").addEventListener("click",getValue);
	document.getElementById("2").addEventListener("click",getValue);
	document.getElementById("3").addEventListener("click",getValue);
	document.getElementById("4").addEventListener("click",getValue);
	document.getElementById("5").addEventListener("click",getValue);
	document.getElementById("6").addEventListener("click",getValue);
	document.getElementById("7").addEventListener("click",getValue);
	document.getElementById("8").addEventListener("click",getValue);
	document.getElementById("9").addEventListener("click",getValue);

	document.getElementById("divide").addEventListener("click",getValue);
	document.getElementById("multiply").addEventListener("click",getValue);
	document.getElementById("subtract").addEventListener("click",getValue);
	document.getElementById("add").addEventListener("click",getValue);
	document.getElementById("dot").addEventListener("click",getValue);
	document.getElementById("ac").addEventListener("click",getValue);
	document.getElementById("getmould").addEventListener("click",getValue);

	document.getElementById("deleteOne").addEventListener("click",backWard);

	document.getElementById("result").addEventListener("click",test);

}; //end window onload
