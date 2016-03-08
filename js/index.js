$(function (){
	$('#body').fullpage({
		anchors: ['page_1', 'page_2', 'page_3', 'page_4', 'page_5', 'page_6','page_7'],
		scrollingSpeed: 800,
		resize : false,
		css3: true,
		scrollOverflow: true,
		navigation:true,
		slidesNavigation:false,
		easing:'easeInQuart',
		afterLoad: function(anchorLink, index){
			if (index==1) {
				window.setTimeout(function(){
					$('#logo').addClass('animated '+$('#logo').data('animation'));
				},parseInt($('#logo').data('timeout'),10));
				window.setTimeout(function(){
					$('#title').addClass('animated '+$('#title').data('animation'));
				},parseInt($('#title').data('timeout'),10));
				window.setTimeout(function(){
					$('#description').addClass('animated '+$('#description').data('animation'));
				},parseInt($('#description').data('timeout'),10));
			} else if (index==2) {
				$('#description,#logo,#title').removeClass('animated zoomInDown slideInRight slideInUp');
			} else if (index==3) {
				$('.title2,.p2_con1,.p2_con2,.p2_con3').removeClass('animated bounceInRight bounce');
			} else if (index==4) {
				$('.p3_active,.title3').removeClass('animated zoomInUp zoomInDown');
			} else if (index==5) {
				$('.title4,.p4_step,.phone_active').removeClass('animated zoomInRight zoomInLeft');
			} else if (index==6) {
				$('.title5,.deng1,.deng2,.ljt,.p5_jxcon').removeClass('animated rollIn zoomInDown zoomInUp zoomIn slideInDown');
			} else {
				$('.title6,.bei_b').removeClass('animated zoomInUp');
			};
		},
		onLeave: function(anchorLink,nextIndex){
			if (nextIndex==2) {
				$('.title2,.p2_con1,.p2_con2,.p2_con3').getActive();
			} else if(nextIndex==3){
				$('.p3_active,.title3').getActive();	
			}else if(nextIndex==4){
				$('.title4,.p4_step,.phone_active').getActive();
			}else if (nextIndex==5){
				$('.title5,.deng1,.deng2,.ljt,.p5_jxcon').getActive();
			}else if (nextIndex==6){
				$('.title6,.bei_b').getActive();
			}else if (nextIndex==7){

			}else{};
		}		
	});
	
	$.fn.getActive=function () {
		$this=$(this);
		$this.each(function(){
			var $this = $(this);
			if ($this.data('timeout')) {
				window.setTimeout(function(){
				$this.addClass('animated '+$this.data('animation'));
			},parseInt($this.data('timeout'),10));
			} else{
				$this.addClass('animated '+$this.data('animation'));
			};
		});
	};
});