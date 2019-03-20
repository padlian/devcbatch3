// $("#btn1").click(function(){
// 	$("#kotak").css("background", "RED")
// });

// $("#btn2").click(function(){
// 	$("#kotak").css("background", "GREEN")
// });

// $("#btn3").click(function(){
// 	$("#kotak").css("background", "BLUE")
// });

// $("#btn4").click(function(){
// 	$("#kotak").css("background", "none")
// });


$(".tombol").click(function(){
	var warna = $(this).html();
	$("#kotak").css("background", warna);
});