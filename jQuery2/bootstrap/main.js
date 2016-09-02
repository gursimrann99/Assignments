$(function(){

	var $emp = $('#tab');

	$('#find').on('click',function(){

		var $input_text = $('#tex').val();
			console.log($input_text);

		$.ajax({
			type: 'GET',
			url:'http://127.0.0.1:3000/employee/'+$input_text,
			dataType:'JSON',
			success: function(emp){
				$emp.append('<tr><td>'+emp.id+'</td>'+'<td>'+emp.age+'</td>'+'<td>'+emp.name+'</td>'+'<td>'+emp.gender+'</td>'+'<td>'+emp.email+'</td>'+'<td><button id="update" data-id='+emp.id+' class="glyphicon glyphicon-pencil">'+'</button></td>'+'<td><button id="del" data-id='+emp.id+' class="glyphicon glyphicon-remove-circle"></td></tr>');
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
				$emp.append('<tr><td>'+item.id+'</td>'+'<td>'+item.age+'</td>'+'<td>'+item.name+'</td>'+'<td>'+item.gender+'</td>'+'<td>'+item.email+'</td>'+'<td><button data-id='+item.id+' id="update" class="glyphicon glyphicon-pencil">'+'</button></td>'+'<td><button data-id='+item.id+' id="del" class="glyphicon glyphicon-remove-circle"></td></tr>');
			//			console.log(data-id);

				});

			}

		});
	});

	$emp.delegate('#del','click',function(){
		var $tr =$(this).closest('tr');
		//console.log('data-id');
		$.ajax({
			type: 'DELETE',
			url:'http://127.0.0.1:3000/employee/'+ $(this).attr('data-id'),
			success: function(){
				$tr.remove();
			}
		});
	});
	var $Age = $('inputAge');
	var $Name = $('inputName');
	var $Gender = $('inputGender');
	var $Email = $('inputEmail');

	$('#submi').on('click',function(){
		var add={
			Age : $Age.val(),
			Name:$Name.val(),
			Gender:$Gender.val(),
			Email : $Email.val(),

		};
					console.log(Email);

		$.ajax({
			type: 'POST',
			url:'http://127.0.0.1:3000/employee',//+$input_text,
			data:add,
			success: function(push){
				console.log("gursimi");
				//$.each(emp,function(i,item){
				//$emp.append('<tr><td>'+emp.id+'</td>'+'<td>'+emp.age+'</td>'+'<td>'+emp.name+'</td>'+'<td>'+emp.gender+'</td>'+'<td>'+emp.email+'</td></t='r>');
				$emp.append('<tr><td>'+'</td>'+'<td>'+push.Age+'</td>'+'<td>'+push.Name+'</td>'+'<td>'+push.Gender+'</td>'+'<td>'+push.Email+'</td>'+'<td>'+'</td>'+'<td>'+'</td></tr>');
				console.log(push.Age);
			//			console.log(data-id);

				

			},

		});
	});
});