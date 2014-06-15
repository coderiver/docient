head.ready(function() {

	console.log("These aren't the droids you're looking for!");

	$(".js-setup-options .radio input[type=radio]").change(function(){
		$('.js-setup-options .radio').removeClass('is-checked');
		$(this).parent().parent().addClass('is-checked');
	});




});