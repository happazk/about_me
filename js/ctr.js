$(document).ready(function($) {
	 $('#fullpage').fullpage(
	 	 {
	 	 	// sectionsColor : ['#ccc', '#444', '#463', '#847'],
	 	 	 anchors:['firstPage', 'secondPage', 'thirdPage', 'fourPage'],
	 	 	// 页面进入执行回调
	 	 	afterLoad: function(anchorLink, index){
            //using index
		        switch(index){
		        	case 1:		        	 	
		        	 	move('#about_me h2')	   
		        	 		.scale(3)
		        	 		.duration('2s')
		        	 		.end();	
		        	 	move('#about_me h3')
		        	 		.set('opacity', 0)
		        	 			.then()
			        	 			.set('margin-top', '30px')
			        	 			.set('opacity', 1)
			        	 			.duration('2s')
								    .pop()
		        	 		.end();

		        		break;
		        	case 2:
		        		move('.one_pro .text')
		        			.set('opacity', 0)
		        			.then()
		        				.set('opacity', .8)
		        				.duration('2s')
		        				.pop()
		        			.end(function(){
		        				move('.two_pro .text')
		        				.set('opacity', 0)
		        				.then()
		        					.set('opacity', .8)
		        					.duration('2s')
		        					.pop()
		        				.end(function(){
		        					move('.three_pro .text')
		        					.set('opacity', 0)
		        					.then()
		        						.set('opacity', .8)
		        						.duration('2s')
		        						.pop()
		        					.end();
		        				});
		        			});
		        		

		        		break;
		        	case 3:
		        		
		        		break;
		        	case 4:
		        		
		        		break;

		        	default:
		        		
		        		break;
		        }
        	},
	 	 	//页面离开时回调
	 	 	onLeave: function(index, nextIndex, direction){
	 	 		switch(index){
		        	case 1:
		        		move('#about_me h2')
		        	 		.scale(1)
		        	 		.end();
		        		break;
		        	case 2:
		        		
		        		break;
		        	case 3:
		        		
		        		break;
		        	case 4:
		        		
		        		break;

		        	default:
		        		
		        		break;
		        }
	 	 	},
        	// 页面加载完成后执行
        	afterRender: function(){
        		
        	}
       	});

});