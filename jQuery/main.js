$(function(){

	var $ticket = $('#tab');
	 var tic =$('#tab');
	var tbody=tic.find("tbody");




		 $('#smovie').on('click',function(){
		 	
		 	var $input_text = $('#tie').val();
		 	//console.log(title);
		 	$.ajax({
		 		type:'GET',
				url:'http://www.omdbapi.com/?s='+$input_text,
				dataType:'JSON',
					success: function(ticket){
						tbody.empty();
						console.log("before if")
						if(ticket.Response=="True")
						{
							console.log("inif")
							
							$.each(ticket.Search,function(i,item){
							$ticket.append('<tr><td>'+item.Title+'</td>'+'<td>'+item.Year+'</td>'+'<td>'+item.imdbID+'</td>'+'<td>'+item.Type+'</td>'+'<td>'+"<img class=img-responsive src="+item.Poster+">"+'</td></tr>');
								

		 				});
					}
					else
					{
						var $itsid = $("#itsid");
						$itsid.append("Input incorrect");
					}

				}
				
					
			});

	});
});