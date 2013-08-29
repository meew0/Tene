
$(document).ready(function() {

// All code goes here.

$('.d-input').each(function() {
	$(this).addClass('i-unfocused-text');
	$(this).val($(this).attr('tene-example'));
});

$('.d-input').focus(function() { 
	if($(this).val() === $(this).attr('tene-example')) {
		$(this).removeClass('i-unfocused-text');
		$(this).val(""); 
	}
});
$('.d-input').blur(function() { 
	if($(this).val() === "") {
		// nothing has changed.
		
		$(this).addClass('i-unfocused-text');
		$(this).val($(this).attr('tene-example'));
		console.log("Test");
	}
});

});