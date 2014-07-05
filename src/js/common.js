$(document).ready(function(){

	$(function() {
    $( "#datepicker" ).datepicker({
    	showOtherMonths: true,
    	firstDay: 1,
    	minDate: 0
    });
  });

	$(".js-clone-btn").click(function() {   
	       var $div = $(this).parent().find('.contact-input');
	       $div.find("input")
	           .last()
	           .clone()
	           .appendTo($div)
	           .val("")
	       return false;
	   });

	$(".js-login-switcher").change(function(){
		if($('.js-login-switch-tab1').find('.cfe-radio').hasClass('checked')){
				$('.js-login-switch-tab1').addClass('is-active');
				$('.js-login-tab1').addClass('is-active');
				$('.js-login-switch-tab2').removeClass('is-active');
				$('.js-login-tab2').removeClass('is-active');
		}
		if($('.js-login-switch-tab2').find('.cfe-radio').hasClass('checked')){
				$('.js-login-switch-tab2').addClass('is-active');
				$('.js-login-tab2').addClass('is-active');
				$('.js-login-switch-tab1').removeClass('is-active');
				$('.js-login-tab1').removeClass('is-active');
		}
	});



});