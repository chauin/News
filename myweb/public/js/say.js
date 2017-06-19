$(function(){


	function news_deta(data,num){
		var d_html = '<div class="tit">'+
						'<div class="title">'+ data[num].t +'</div>'+
						'<div class="date">'+ data[num].d +'&nbsp;&nbsp;'+ data[num].h +'</div>'+
					 '</div>'+
					 '<div class="con_m">'+
						'<div class="cons">'+
							'<div class="aut">'+'文:&nbsp;'+data[num].type+'</div>'+
							'<div class="part1">'+ data[num].p1 +'</div>'+
							'<div class="p1"><img src="'+data[num].img+'"></div>'+
							'<div class="part2">'+ data[num].p2 +'</div>'+
							'<div class="part3">'+ data[num].p3 +'</div>'+
							'<div class="claim">'+
							'<p>免责声明</p>'+
							'<p>本文来自腾讯新闻客户端自媒体，不代表腾讯新闻的观点和立场。</p>'+
						'</div>'+
					 '</div>'+
					 '<div class="say">'+
						'<div class="say_tit">'+'-&nbsp;用户评论&nbsp;-'+'</div>'+
						'<div class="say_con">'+
							'<div class="say_con_name"><div class="photo"></div>&nbsp;&nbsp;'+data[num].name+'</div>'+
							'<div class="say_con_p">'+data[num].sp+'</div>'+
							'<div class="say_con_t">'+data[num].st+'&nbsp;&nbsp;'+data[num].res+'</div>'+
						'</div>'+			
					 '</div>';					 
	return d_html;
	}

	var arr_d = [];
	// $(".news2-span").on("click",,function(){
		// alert(1);
		// location.href = "http://127.0.0.1:3000/detailed";
		$.post("/detailed",function(data){

		arr_d = data;
		$(".d-con").append(news_deta(arr_d,0));
		console.log(data);
		});
		
	// })
	
	$(".note").on("click",function(){
		$(".argm").css({"bottom":0});
	})
	$(".cancle").on("click",function(){
		$(".argm").css({"bottom":-200});
	})
	


})



	