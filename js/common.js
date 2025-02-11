
$(function() {
	$(function() {
		$('.head_sub .open').click(function() {
			if ($(this).siblings('.head_sub_box').css("display") == 'none') {
				$(this).siblings('.head_sub_box').show();
				$(this).toggleClass('active');
				$(this).parents('header').toggleClass('active');
			} else {
				$(this).siblings('.head_sub_box').hide();
				$(this).toggleClass('active');
				$(this).parents('header').toggleClass('active');
			}
		});
		
		function hamburger() {
			$('.nav.mobile').toggleClass('on');
		};
	
		var $this = $(this), $menu_li = $this.find('.mobile .menu > ul > li > ul > li');
		$menu_li.click(function() {
			var $this = $(this);
			$this.parents('.mobile > .menu').find('ul > li > ul > li').removeClass('active');
			$this.addClass('active');
		});
	});
	
	$(document).ready(function() {
		
		var jbOffset = $('.header').offset();
		$(window).scroll(function() {
			if ($(document).scrollTop() > jbOffset.top) {
				$('.header').addClass('Fixed');
			} else {
				$('.header').removeClass('Fixed');
			}
		});
		
		// $(".gnb .menu-var").on("mouseover", function(){
		// 	$(this).find(".submenu").stop().slideDown(300);
		// });
		// $(".gnb .menu-var").on("mouseout", function(){
		// 	$(this).find(".submenu").stop().slideUp(300);
		// });
		
		
		$(".nav.mobile .menu > ul > li > a").click(function(){
			
			if($(this).attr("href") == "#"){
				var tg=$(this).siblings(".nav.mobile .menu > ul > li .msub");
		        var dis=tg.css("display");
		        if(dis=="block"){
		            $(this).removeClass("on");
		            tg.slideUp(300);
		        }
		        if(dis=="none"){
		            $(".nav.mobile .menu > ul > li > a").removeClass("on");
		            $(this).addClass("on");
		            $(".nav.mobile .menu > ul > li .msub").slideUp(300);
		            tg.slideDown(300);
		        };
			}else{
				$(this).location.href = $(this).attr("href");
			}
	        
	        return false;
	    });
		
	});
	$(".context-menu").click(function(){
		$(".context-menu-list").toggle();
		
	});
});

function hamburger() {
	$('.nav.mobile').toggleClass('on');
}
