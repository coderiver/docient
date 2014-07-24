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

	$('.proc-date-options-table td').on('click', function() {
		// $(this).find('label').addClass('ololo');
		$(this).siblings().find('.cfe-radio').trigger('click');
		// $(this).find('.cfe-radio').addClass('checked');
		// alert('ok');
	});

	$('.js-hierarchlist-save').on('click', function() {
		$(this).parent().parent().removeClass('is-editable');
		return false;
	});

	$('.js-hierarchlist-edit').on('click', function() {
		$(this).parent().parent().addClass('is-editable');
		return false;
	});


});