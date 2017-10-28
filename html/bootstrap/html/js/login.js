$(document).ready(function (){
	$("#to-recover").click(function(){
		// $("#loginform").fadeTo(400,0.01).css('z-index','100');
		$("#loginform").fadeTo(400,0).css("display","none");
		$("#recoverform").fadeTo(400,1).css('z-index','200');
	});
	$('#to-login').click(function(){
		$('#recoverform').fadeTo(400,0).css('display','none');
		$('#loginform').fadeTo(400,1).css('z-index','200');
	});
});