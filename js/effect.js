/* start loader coding */
window.onload = function()
 
{
	$(document).ready(function()
{
		$(".icon").fadeOut(1000,function(){
		$(".slide-left").animate({width:'0%'},500);
		$(".slide-right").animate({width:'0%'},500,function(){
		$(".loader-con").fadeOut();
		});
	});
});
	
};

	$(function(){
		$("#menu").slicknav({
			label : '',
			brand : 'Er. Dillip',
		});
	});
/* end loader coding */

/* start big slider*/
$(document).ready(function() {
	"use strict";
  $(".skitter-large").skitter({
	  label : false,
	  dots : false,
	  
  });
});


$(document).ready(function(){
	$(".picone-header").slideDown(1000,function(){
		$(".picone-btn").fadeIn(1500,function(){
			$(".picone-header,.picone-btn").delay(50).fadeOut(function(){
				$(".slider-label").css({'background':'rgba(0,0,0,0.8)'});
				$(function(){
					$(".pictwo-header").fadeIn(1000,function(){
						$(".pictwo-para").show(1500,function(){
							$(".pictwo-btn").fadeIn(1000,function(){
								$(".pictwo-header,.pictwo-para,.pictwo-btn").delay(2800).fadeOut(function(){
									if($(window).width()>992)
									{$(".slider-label").css({'background':'inherit'})};
								});
							});
						});

											});
				})
			});
		});
	});
});





$(document).ready(

function(){setInterval(
	function(){
	$(".picone-header").slideDown(1000,function(){
		$(".picone-btn").fadeIn(1500,function(){
			$(".picone-header,.picone-btn").delay(50).fadeOut(function(){
				$(".slider-label").css({'background':'rgba(0,0,0,0.8)'});
				$(function(){
					$(".pictwo-header").fadeIn(1000,function(){
						$(".pictwo-para").show(1500,function(){
							$(".pictwo-btn").fadeIn(1000,function(){
								$(".pictwo-header,.pictwo-para,.pictwo-btn").delay(2800).fadeOut(function(){
									if($(window).width()>320){
									$(".slider-label").css({'background':'inherit'});}
								});
							});
						});

											});
				});
			});
		});
	});
},10500
);
}
);



/* end big slider*/


/* start project slider*/

$(document).ready(function(){
	"use strict";
	$(".center").slick({
		dots:false,
		infinite:true,
		centerMode:true,
		slidesToShow:5,
		slidesToScroll:3,
		responsive:[
			{
				breakpoint:768,
				settings:{
						dots:false,
						infinite:true,
						centerMode:true,
						slidesToShow:3,
						slideToScroll:3,
						centerPadding:'40px',
				}
			},
			
			{
				breakpoint:480,
				settings:{
					arrows:false,
					dots:false,
					infinite:true,
					slidesToShow:1,
					slidesToScroll:1,
					centerPadding:'20px',
				}
			},
			
		]
});

});

/* end project slider*/

/* start progressbar*/



/* end progressbar*/

/*start scroll effect coding*/
$(document).ready(function(){
	if($(window).width()>1024)
	{
	$(window).scroll(function(){
		var sh = window.pageYOffset;
		if (sh>667) 
		{
			$(".aboutme-header,.web-design h2,.graphic-design h2,.online-mkt h2,.seo h2").show();
			$(".about-me p").show();
			$(".aboutme-header,.web-design h2,.graphic-design h2,.online-mkt h2,.seo h2").addClass("animated slideInRight");
			$(".about-me p").addClass("animated slideInRight");
			$(".about-me img").show();
			$(".about-me img").addClass("animated slideInLeft");
		}
		else{
			$(".aboutme-header,.web-design h2,.graphic-design h2,.online-mkt h2,.seo h2").hide();
			$(".about-me p").hide();
			$(".about-me img").hide();
		}
		if (sh>1086) 
		{
			$(document).ready(function(){
					var pone = $('.progress-one').html();
					var ptwo = $('.progress-two').html();
					var pthree = $('.progress-three').html();
					var pfour = $('.progress-four').html();
					var pfive = $('.progress-five').html();
					$(".progress-one").animate({'width':pone},1000,function(){
						$('.progress-two').animate({'width':ptwo},500,function(){
							$('.progress-three').animate({'width':pthree},500,function(){
								$('.progress-four').animate({'width':pfour},500,function(){
									$('.progress-five').animate({'width':pfive},500);
								});
							});
						});
					});
				});
		}
		if (sh>1600) 
		{
			$(".p-o").addClass("animated slideInLeft");
			$(".p-o").fadeIn(400,function(){
				$(".p-t").addClass("animated slideInLeft");
				$(".p-t").fadeIn(700,function(){
					$(".p-th").fadeIn(700);
					$(".p-th").addClass("animated slideInLeft");
				});
			});
		}
		else{
			$(".people").hide();
		}
	});
	}
	else{
			$(document).ready(function(){
					var pone = $('.progress-one').html();
					var ptwo = $('.progress-two').html();
					var pthree = $('.progress-three').html();
					var pfour = $('.progress-four').html();
					var pfive = $('.progress-five').html();
					$(".progress-one").animate({'width':pone},1000,function(){
						$('.progress-two').animate({'width':ptwo},500,function(){
							$('.progress-three').animate({'width':pthree},500,function(){
								$('.progress-four').animate({'width':pfour},500,function(){
									$('.progress-five').animate({'width':pfive},500);
								});
							});
						});
					});
				});
		}
});
/*end scroll effect coding*/

//scroll to top coding start
 $(document).ready(function(){
 	$(window).scroll(function(){
 		if ($(window).scrollTop()>200) 
 		{
 			$(".scrolltop").slideDown();
 		}
 		else{
 			$(".scrolltop").slideUp();
 		}
 	});
 	$(".scrolltop").click(function(){
 		$("html,body").animate({scrollTop:0},500)
 	});
 });
//scroll to top coding end

/*/change heading's color coding
$(document).ready(function(){
		if ($(".color-box").offsetWidth==0) 
		{
			$(".setting").click(function()
			{
				$(".color-box").animate({'width':'15%'},200);
			});
		}
		else{
			$(".setting").click(function()
			{
				$(".color-box").animate({'width':'0%'},200);
			});
		}
});
//end change heading's color coding*/