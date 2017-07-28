jQuery(function ($){
	// // 方法一 增加含有display：block的类
	// $("#select").bind("click",function(){
	// 	$(".icon").toggleClass("iconchang");
	// 	$(".list").toggleClass("active");
	// });

	// $(".txt").bind("click",function(){
	// 	var a=$(this).html();
	// 	$(".selectTitle").html(a);

	// })


	// // 方法二 直接使用slideDown
	// $("#select").bind("click",function(){
	// 	$(".icon").toggleClass("iconchang");
	// 	$(".list").slideDown();
	// });

	// $(".txt").bind("click",function(){
	// 	var a=$(this).html();
	// 	$(".selectTitle").html(a);
	// 	$(".list").slideUp();
	// })


	// 方法三 用animation+@keyframes在CSS中设置

	$("#select").bind("click",function(){
		$(".icon").toggleClass("iconchang");
		$(".list").toggleClass("open");
	});

	$(".txt").bind("click",function(){
		var a=$(this).html();
		$(".selectTitle").html(a);
		$(".list").toggleClass("open");
		
	})


// ========input&label-for==================================================================
$(".radiolab").bind("click",function(){
	$(".btnOpen").removeClass("btnOpen").addClass("btnClose");
	// $(".radiolab").find(".radioBtn").removeClass("btnClose").addClass("btnOpen");
	$(this).find(".radioBtn").removeClass("btnClose").addClass("btnOpen");
	// 不能用radiolab，这是泛指，用this指针单只点击的那一个radiolab

});


//==================开关选择器switch==================================================

$(".switchBtn").bind("click",function(){
	$(this).toggleClass("slideOpen");
	$(".switch").toggleClass("bgOpen");
});

// =====================banner=======================
// var html='<div class="width-height"></div>';
for (var i = 0; i < 6; i++) {
	var $html=$('<div class="width-height spin">'+(i+1)+'</div>');
	$html.css("transform","rotateY("+60*i+"deg)");
	// $html.css("background-color", "#"+(111*(i+1)));
	
	$html.css("background-image",'url("image/'+(i+1)+'.jpg")');
	$(".bannerRotate").append($html);
}




})