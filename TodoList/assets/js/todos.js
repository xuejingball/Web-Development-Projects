// check off specific todos by clicking
$('ul').on('click', 'li', function(){
	$(this).toggleClass("completed");
});

// click on X to delete todo
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// enter new todo to the list in input
$('input[type="text"]').on('keypress', function(event){
	if (event.which === 13){
		// grabbing new todo text from input
		var text = $(this).val();
		$(this).val("");

		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + text + "</li>");
	}
})

$(".fa-pencil-alt").click(function(){
	$('input[type="text"]').fadeToggle();
});