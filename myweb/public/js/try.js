$(function(){
	// var news_con = [
	//  {s:'中国军队直升机“侵犯”印度“领空”？国防部回应',
	//   t:'10分钟前',
	//  im:'img/0.jpg'},
	// {s:'日本媒体自己都不看好索尼复兴',
	//  t:'20分钟前',
	//  im:'../img/4.jpg'},
	// {s:'考神附体！他们曾是高考状元',
	//  t:'30分钟前',
	//  im:'../img/1.jpg'},
	// {s:'老人卖菜攒千元全是假币 民警伸援手',
	//  t:'40分钟前',
	//  im:'../img/2.jpg'},
	//  {s:'逃过恐怖袭击 只因多吃一根玉米',
	//  t:'40分钟前',
	//  im:'../img/3.jpg'},
	//  {s:'香港一架客机飞行近1小时后 机长发现忘带航图',
	//  t:'40分钟前',
	//  im:'../img/5.jpg'},
	//  {s:'女子传销被骗60万 欲跳楼',
	//  t:'40分钟前',
	//  im:'../img/6.jpg'},
	//  {s:'张靓颖个唱“夭折” 票务方告代理公司索赔240万',
	//  t:'40分钟前',
	//  im:'../img/7.jpg'},
	//  {s:'薛之谦巡演导演竟是选秀冠军 偶像惨变大叔太震惊',
	//  t:'40分钟前',
	//  im:'../img/8.jpg'},
	//  {s:'阿Sa童年跟她爸这些经历，够我笑一年',
	//  t:'40分钟前',
	//  im:'../img/9.jpg'},
	//  ];

var zz = /^[0-9]*$/;
function html_(data,num){ //data代表数组 num代表第几个新闻 
	if(!zz.test(num/3)){
		var news1 = '<div class="news1">'+
					'<div class="news1-span"><a href="http://127.0.0.1:3000/detailed" style="color:black">'+ data[num].s +'</a>'+
						'<div class="t1">'+data[num].t+'</div>'+
					'</div>'+
					'<div class="news1-pic">'+
						'<img src='+data[num].im+'>'+
					'</div>'+
				'</div>';
		return news1;
	}else{
		var news2 =  '<div class="news2">'+
					'<div class="news2-span"><a href="http://127.0.0.1:3000/detailed" style="color:black">'+ data[num].s +
					'</a>'+'</div>'+
					'<div class="news2-pic">'+
						'<img src='+data[num].im+'>'+
					'</div>'+
					'<div class="t2">'+data[num].t+'</div>'+
				'</div>';
		return news2;
	}
	// if(Math.floor(Math.random()*10) >= 5){
	// 	var news1 = '<div class="news1">'+
	// 				'<div class="news1-span">'+ data[num].s +
	// 					'<div class="t1">'+data[num].t+'</div>'+
	// 				'</div>'+
	// 				'<div class="news1-pic">'+
	// 					'<img src='+data[num].im+'>'+
	// 				'</div>'+
	// 			'</div>';
	// 	return news1;
	// }else{
	// 	var news2 =  '<div class="news2">'+
	// 				'<div class="news2-span">'+ data[num].s +
	// 				'</div>'+
	// 				'<div class="news2-pic">'+
	// 					'<img src='+data[num].im+'>'+
	// 				'</div>'+
	// 				'<div class="t2">'+data[num].t+'</div>'+
	// 			'</div>';
	// 	return news2;
	// }	
}

// var de_news = [
// 		{"t":"徐静蕾：都散了吧，她身上已没了新故事",
// 		"d":"06-08",
// 		"h":"07:15",
// 		"type":"腾讯娱乐",
// 		"p1":"六年前在《亲密敌人》宣传期时，我采访过一次徐静蕾，是一次时尚杂志封面拍摄，她与黄立行的双人封面。每组照片拍摄完，徐静蕾都会来到电脑前把刚才的照片全部审阅一遍，与拍摄团队沟通意见，同时也是为了接下来的拍摄做自我修正。黄立行倒是什么都不管，摄影师和徐静蕾怎么要求，他怎么配合，任由徐静蕾伸手去纠正他脸的角度。这是导演与演员的关系，也是一种男女朋友的关系。",
// 		"img":"img/p1.jpg",
// 		"p2":'徐静蕾也是一个喊着不想当女明星的人。但那时候，这“不想”里的较劲比现在多一点，那是严格的自我监视下的“不想""女明星”实在是太蠢太让人发笑了，过一种标准的“女明星式生活”，会让徐静蕾自己看不起自己。而如今她的不想当女明星，则要放松很多，包含着实实在在对自己的认可。她连要求自己“卓尔不群”的心气都淡了很多。他人已经无法再成为她的镜子，时刻提醒她要正衣冠明得失。",
// 		"p3":'而如今她的采访姿态也是放松的——她穿着睡衣款的丝绒套装，对摄影师配合度极高，不会拍完以后要求看图。她点起烟，是中南海的0.3，一边聊着一边在房间里走来走去，有时候搭着椅子，有时候靠着墙壁。我们要聊什么，她就配合回答什么，对整个采访的方向毫不在乎。",
// 		"name":"张三",
// 		"sp":"徐静蕾和黄立行不是同一年的吗？为什么说是小男朋友？这是真心祝福么，怎么感觉有点酸味呢.||划界:努力的女人都值得幸运，幸福，和小男朋友天长地久吧，他身材实在太好了，三观也正，雅痞男是女性最爱。",
// 		"st":"44分钟前",
// 		"res":"2回复"}];
	
// function news_deta(datas,num){
// 		var d_html = '<div class="tit">'+
// 						'<div class="title">'+ datas[num].t +'</div>'+
// 						'<div class="date">'+ datas[num].d +'&nbsp;&nbsp;'+ datas[num].h +'</div>'+
// 					 '</div>'+
// 					 '<div class="con_m">'+
// 						'<div class="cons">'+
// 							'<div class="aut">'+'文:&nbsp;'+datas[num].type+'</div>'+
// 							'<div class="part1">'+ datas[num].p1 +'</div>'+
// 							'<div class="p1"><img src="'+datas[num].im+'"></div>'+
// 							'<div class="part2">'+ datas[num].p2 +'</div>'+
// 							'<div class="part3">'+ datas[num].p3 +'</div>'+
// 							'<div class="claim">'+
// 							'<p>免责声明</p>'+
// 							'<p>本文来自腾讯新闻客户端自媒体，不代表腾讯新闻的观点和立场。</p>'+
// 						'</div>'+
// 					 '</div>';					 
// 	return d_html;
// 	}

// function news_say(data,num){
// 		var s_html =  '<div class="say">'+
// 						'<div class="say_tit">'+'-&nbsp;用户评论&nbsp;-'+'</div>'+
// 						'<div class="say_con">'+
// 							'<div class="say_con_name"><div class="photo"></div>&nbsp;&nbsp;'+data[num].name+'</div>'+
// 							'<div class="say_con_p">'+data[num].sp+'</div>'+
// 							'<div class="say_con_t">'+data[num].st+'&nbsp;&nbsp;'+data[num].res+'</div>'+
// 						'</div>'+			
// 					  '</div>';
					 
// 	return s_html;
// 	}

	
	
	var arr = [];
	$.post("/index",function(data1){
		arr = data1;
		// console.log(data1);
	for(var i = 0;i < arr.length;i++){
		// console.log(arr[i]);
		$(".con").append(html_(arr,i));
	}


	//搜索功能，必须放在数据库渲染页面的方法里面，才可以找到数组arr
	var txt = $(".sea-inp input").val();
	$(".seac").on("click",function(){
		txt = $(".sea-inp input").val();
		for(var j = 0;j < arr.length;j++){

			if(txt == ''){
				$(".con-m").stop(true).hide();
			}else{
				if(arr[j].s.indexOf(txt) > -1){
					console.log(arr[j].s.indexOf(txt));
					$(".con-m").stop(true).show();
					$(".con-m").append(html_(arr,j));
				}
			}	
				
			// else{

			// 	$(".con-m").stop(true).show();
			// 	$(".con-m").html('暂未搜索到该内容');
			// }
		}	
	})
	//输入框变化时清空
	$(window).on("input change",function(){
		if($(".sea-inp input").val() == ''){
			$(".con-m").html('');
			$(".con-m").stop(true).hide();
			
		}
	})


	
	
	
	//搜索栏侧面推出
	$(".sea").on("click",function(){
	
		$(".all").stop(true).animate({"left":0});
	})
	$(".closed1").on("click",function(){
		$(".con-m").html('');
		$(".con-m").stop(true).hide();
		$(".sea-inp input").val('')
		$(".all").stop(true).animate({"left":-400});	
	})


})



	$(".news2-span").on("click",function(){	
		location.href = "http://127.0.0.1:3000/detailed";
	})
})