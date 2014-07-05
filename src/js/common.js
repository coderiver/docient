$(document).ready(function(){

	$(".js-clone-btn").click(function() {   
	       var $div = $(this).parent().find('.contact-input');
	       $div.find("input")
	           .last()
	           .clone()
	           .appendTo($div)
	           .val("")
	       return false;
	   });


});