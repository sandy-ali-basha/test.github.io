//global: jQuery, document, alert
jQuery(document).ready(function () {

//$("#intro").animate({
//	width:'500px'
//},5000);
	
$window.on('scroll', scrolly);
	

});

//-------//scroll Up Function//----------
function scrollTopAnimated() { 
	$("html, body").animate({ scrollTop: "0" }); 
} 

function scrolly(){
	alert("you scrool the div");
};

