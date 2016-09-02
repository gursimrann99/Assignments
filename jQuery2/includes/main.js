$(function(){

	var $emp = $('#tab');

	$('#find').on('click',function(){

		var $input_text = $('#tex').val();
	//		console.log($input_text);

		$.ajax({
			type: 'GET',
			url:'http://127.0.0.1:3000/employee/'+$input_text,
			dataType:'JSON',
			success: function(emp){
				$emp.append('<tr><td>'+emp.id+'</td>'+'<td>'+emp.age+'</td>'+'<td>'+emp.name+'</td>'+'<td>'+emp.gender+'</td>'+'<td>'+emp.email+'</td>'+'<td><button data-target="#myModal2" data-toggle="modal" id="update" data-id5='+emp.email+ 'data-id4='+emp.gender+' data-id3='+emp.name+' data-id='+emp.id+' data-id2='+emp.age+' class="glyphicon glyphicon-pencil">'+'</button></td>'+'<td><button id="del" data-id='+emp.id+' class="glyphicon glyphicon-remove-circle"></td></tr>');
			}


		});
		
	});

	$('#show').on('click',function(){

		//var $input_text = $('#tex').val();

		$.ajax({
			type: 'GET',
			url:'http://127.0.0.1:3000/employee?_start=0&_end=40',//+$input_text,
			dataType:'JSON',
			success: function(emp){
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
	//	var a = $(this).attr('data-id');
		//console.log('data-id');
		$.ajax({
			type: 'DELETE',
			url:'http://127.0.0.1:3000/employee/'+ $(this).attr('data-id'),

			success: function(){
				$tr.remove();
			}
		});
	});
	

	$('#submi').on('click',function(){
		console.log("line1")
		var add={
			// Age : $Age.val(),
			// Name:$Name.val(),
			// Gender:$Gender.val(),
			// Email : $Email.val(),
			 Age:$('#inputAge').val(),
	 Name : $('#inputName').val(),
	 Gender : $('#inputGender').val(),
	 Email : $('#inputEmail').val()

		};
				/*	console.log(Email);
*/		console.log("line2")

		$.ajax({
			type: 'POST',
			url:'http://127.0.0.1:3000/employee',//+$input_text,
			data:add,
			success: function(push){
				console.log("gursimi");
				//$.each(emp,function(i,item){
				//$emp.append('<tr><td>'+emp.id+'</td>'+'<td>'+emp.age+'</td>'+'<td>'+emp.name+'</td>'+'<td>'+emp.gender+'</td>'+'<td>'+emp.email+'</td></t='r>');
				$emp.append('<tr><td>'+push.Id+'</td>'+'<td>'+push.Age+'</td>'+'<td>'+push.Name+'</td>'+'<td>'+push.Gender+'</td>'+'<td>'+push.Email+'</td>'+'<td><button data-id='+push.id+' id="update" class="glyphicon glyphicon-pencil">'+'</button></td>'+'<td><button data-id='+push.id+' id="del" class="glyphicon glyphicon-remove-circle">'+'</button></td></tr>');
				console.log(push.Age);
			//			console.log(data-id);

						console.log("end")


			}
			// error:function(){
			// 	alert('error saving data');
			// }

		});
	});

	// $emp.delegate('#update','click',function(){
	// 			var a = $(this).attr('data-id1');
	// 			console.log(a);
	// 			var b = $(this).attr('data-id2');
	// 			console.log(b);
	// 			var c = $(this).attr('data-id3');
	// 			console.log(c);
	// 			var d = $(this).attr('data-id4');
	// 			console.log(d);
	// 			var e = $(this).attr('data-id5');
	// 			console.log(e);



	// });
});