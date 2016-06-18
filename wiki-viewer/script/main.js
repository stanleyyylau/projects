$(document).ready(function() {

  function getResult(event) {
    event.preventDefault();
    var searchTerm = $("#search").val();
    var url = "https://en.wikipedia.org/w/api.php?callback=?&action=opensearch&limit=20&namespace=0&format=json&search=" + searchTerm;

    // $.getJSON(url,function(data){
    // 	alert(date);
    // });
function success(data){
			console.log(data);
			$("#resultContent").html("");
			if(data[1].length==0){
				alert("We can't find what you're looking for, try typing in something else");
			}else{
			var statusHTML='<ul>';
			for(i=0;i<data[1].length;i++){
				statusHTML += '<Li><a href="'+data[3][i]+'" target="_blank"><h1>'+data[1][i]+'</h1></a><p>'+data[2][i]+'</p></li>';
			}
			statusHTML += '</ul>';
			$("#resultContent").html(statusHTML);
			}
		}//end success function

    $.ajax({
      dataType: "json",
      url: url,
      success: success
    });

  }

  $("#confirmInput").click(getResult);
  $("#search").val();
});
