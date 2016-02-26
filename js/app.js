$().ready(function() {
	$('.add').click( function() {
		var newItem = $('input').val();
				if (newItem.length == 0) {
      				alert('Item is Empty');
				}
				$('.shoppinglist').append(
					$('<li>').append(
						$('<a>').append(newItem+'<button class="del">X</button>')));
	});

	$(".del").on("click", function(){
   			$(this).closest("li").remove(); 
	});
});