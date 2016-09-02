$(function(){

	var $emp = $('#tab');
	var tic =$('#tab');
	var tbody=tic.find("tbody");

	$('#find').on('click',function(){

		var $input_text = $('#tex').val();
	//		console.log($input_text);
	console.log($input_text);

	if($input_text.trim())
	{

		$.ajax({
			type: 'GET',
			url:'http://127.0.0.1:3000/employee/'+$input_text,
			dataType:'JSON',
			success: function(data){
				tic.empty();
				console.log(data.age);
				$emp.append('<tr><td>'+data.id+'</td>'+'<td>'+data.age+'</td>'+'<td>'+data.name+'</td>'+'<td>'+data.gender+'</td>'+'<td>'+data.email+'</td>'+'<td><button data-target="#myModal2" data-toggle="modal" id="update"  data-id='+data.id+' class="glyphicon glyphicon-pencil">'+'</button></td>'+'<td><button id="del" data-id='+data.id+' class="glyphicon glyphicon-remove-circle"></td></tr>');
				
			},
			error:function(){
				alert("Please enter correct ID. This does'nt exist");
			}
		});
	}
	else{
		alert("Please enter data");
	}
	
});

	$('#show').on('click',function(){

		//var $input_text = $('#tex').val();

		$.ajax({
			type: 'GET',
			url:'http://127.0.0.1:3000/employee?_start=0&_end=40',//+$input_text,
			dataType:'JSON',
			success: function(emp){
				tic.empty();
				$.each(emp,function(i,item){
				//$emp.append('<tr><td>'+emp.id+'</td>'+'<td>'+emp.age+'</td>'+'<td>'+emp.name+'</td>'+'<td>'+emp.gender+'</td>'+'<td>'+emp.email+'</td></tr>');
				$emp.append('<tr><td>'+item.id+'</td>'+'<td>'+item.age+'</td>'+'<td>'+item.name+'</td>'+'<td>'+item.gender+'</td>'+'<td>'+item.email+'</td>'+'<td><button data-target="#myModal2" data-toggle="modal" data-id='+item.id+' id="update" class="glyphicon glyphicon-pencil">'+'</button></td>'+'<td><button data-id='+item.id+' id="del" class="glyphicon glyphicon-remove-circle"></td></tr>');
			//			console.log(data-id);

		});

			}

		});
	});

	$emp.delegate('#del','click',function(){
		var $tr =$(this).closest('tr');
		var a = $(this).attr('data-id');
		//console.log('data-id');
		$.ajax({
			type: 'DELETE',
			url:'http://127.0.0.1:3000/employee/'+ $(this).attr('data-id'),

			success: function(){
				alert("Deleted Id---> "+a)
				$tr.remove();
			}
		});
	});
	
	//add button
$('#submi').on('click',function()
	{
		console.log("one");
		email = $('#inputEmail').val();
		
		var add={
			age:$('#inputAge').val(),
			name : $('#inputName').val(),
			gender : $('#inputGender').val(),
			email : $('#inputEmail').val()
		};

					if(add.age.length==2&&add.age>0)

					{
						var na=add.name;
						console.log(na);
						if(na.match(/^[a-zA-Z ]+$/))
						{

						
							function validateEmail(email){
													var e=email;
													console.log(true);
													console.log(e);
       									 var pattern =/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
									        if (!pattern.test(email)) 
									        {
									            return false;
									        }
       									 return true;
												}
							console.log(add.email);
							var flag=validateEmail(add.email);

							console.log(flag);
							if(flag)
							{

								$.ajax({
									type: 'POST',
										url:'http://127.0.0.1:3000/employee',//+$input_text,
										data:add,
										success: function(push){
											tic.empty();
											// console.log(hii");
											console.log("gursimi");
											//$.each(emp,function(i,item){
											//$emp.append('<tr><td>'+emp.id+'</td>'+'<td>'+emp.age+'</td>'+'<td>'+emp.name+'</td>'+'<td>'+emp.gender+'</td>'+'<td>'+emp.email+'</td></t='r>');
											$emp.append('<tr><td>'+push.id+'</td>'+'<td>'+push.age+'</td>'+'<td>'+push.name+'</td>'+'<td>'+push.gender+'</td>'+'<td>'+push.email+'</td>'+'<td><button data-target="#myModal2" data-toggle="modal" data-id='+push.id+' id="update" class="glyphicon glyphicon-pencil">'+'</button></td>'+'<td><button data-id='+push.id+' id="del" class="glyphicon glyphicon-remove-circle">'+'</button></td></tr>');
											console.log(push.age);
										//			console.log(data-id);

										console.log("end")

									}
										
									});
								$('#Addb').on('click',function(){
								$('#inputAge').val(" ");
								$('#inputName').val(" ");
							 $('#inputGender').val(" ");
								$('#inputEmail').val(" ");
								});
							}
							else
							{
								alert("Insert valid email");
							}
						}
						else{
							alert("Enter name");
						}
					}
					else{
						alert("Insert valid age");
					}
					

				});

	var a;
	var $tr1;
	$emp.delegate('#update','click',function(){
		a= $(this).attr('data-id');
		$tr1 =$(this).closest('tr');

		$.ajax({
			type: 'GET',
			url:'http://127.0.0.1:3000/employee/'+$(this).attr('data-id'),
			dataType: 'JSON',
			success: function(data)
			{
				$('#inputA').val(data.age),
				$('#inputN').val(data.name),
				$('#inputG').val(data.gender),
				$('#inputE').val(data.email)
				
			}
			
		});
	});

	$('#save').on('click',function(){
		//console.log("one");
		var add={

			
			age:$('#inputA').val(),
			name : $('#inputN').val(),
			gender : $('#inputG').val(),
			email : $('#inputE').val()

		};
		email = $('#inputE').val();
					// console.log(Age);
					if(add.age.length==2&&add.age>0)

					{
							if(add.name.match(/^[a-zA-Z]+$/))
						{
							function validateEmail(email){
													var e=email;
													console.log(true);
													console.log(e);
       									 var pattern =/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
									        if (!pattern.test(email)) 
									        {
									            return false;
									        }
       									 return true;
												}
							console.log(add.email);
							var flag=validateEmail(add.email);

							
							if(flag)
							{			
								$.ajax({
									type: 'PATCH',
			url:'http://127.0.0.1:3000/employee/'+a,//+$input_text,
			data:add,
			success: function(push){
				tic.empty();
				$tr1.remove();
				// console.log(hii");
				console.log("gursimi");
					$emp.append('<tr><td>'+push.id+'</td>'+'<td>'+push.age+'</td>'+'<td>'+push.name+'</td>'+'<td>'+push.gender+'</td>'+'<td>'+push.email+'</td>'+'<td><button data-id='+push.id+' data-target="#myModal2" data-toggle="modal" id="update" class="glyphicon glyphicon-pencil">'+'</button></td>'+'<td><button data-id='+push.id+' id="del" class="glyphicon glyphicon-remove-circle">'+'</button></td></tr>');
				console.log(push.age);
			//			console.log(data-id);

			console.log("end")


		}
			
		});
							}
							else
							{
								alert("Insert valid email");
							}
						}
						else{
							alert("Enter name");
						}
					}
					else{
						alert("Insert valid age");
					}


				});

	
	var start=0;
	var end =40;
	$(window).scroll(function()
	{
		if($(window).scrollTop() == $(document).height() - $(window).height())
		{
			$('div#loadmoreajaxloader').show();
			$.ajax({
				
				url: 'http://localhost:3000/employee?_start='+(start+40)+'&_end='+(end+40),
		//http://localhost:3000/db?_start=0&_end=10
		success: function(html)
		{
			start = start+40;
			end = end+40;

			if(html)
			{
				$("#postswrapper").append(html);
				$(html).each(function(index,html)

				{
					
					$emp.append('<tr><td>'+html.id+'</td>'+'<td>'+html.age+'</td>'+'<td>'+html.name+'</td>'+'<td>'+html.gender+'</td>'+'<td>'+html.email+'</td>'+'<td><button data-target="#myModal2" data-toggle="modal" data-id='+html.id+' id="update" class="glyphicon glyphicon-pencil">'+'</button></td>'+'<td><button data-id='+html.id+' id="del" class="glyphicon glyphicon-remove-circle"></td></tr>');
					


				});


				$('div#loadmoreajaxloader').hide();
			}else
			{
				$('div#loadmoreajaxloader').html('<center>No more posts to show.</center>');
			}
		}
});
		}
	});

});