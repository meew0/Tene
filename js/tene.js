
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
	}
});

$('.toggler').click(function() {
	var toggled = $(this).attr('tene-toggle');
	console.log(toggled);
	switch($(this).attr('tene-effect')) {
	case "slide":
		$(toggled).slideToggle();
		break;
	case "fade":
		$(toggled).fadeToggle();
		break;
	default:
		$(toggled).toggle();
		break;
	}
});

$('.embed-yt').each(function() {
	var dims = $(this).attr('tene-dims').split('x');
	var w = dims[0];
	var h = dims[1];
	var vid = $(this).attr('tene-embed');
	$(this).html('<iframe width="' + w + '" height="' + h + '" src="http://www.youtube.com/embed/' + vid + '" frameborder="0" allowfullscreen></iframe>');
});

});