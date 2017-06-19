$(function(){
	var news_con = [
	{s:'中国军队直升机“侵犯”印度“领空”？国防部回应',
	 t:'10分钟前',
	 im:'../img/0.jpg'},
	{s:'日本媒体自己都不看好索尼复兴',
	 t:'20分钟前',
	 im:'../img/4.jpg'},
	{s:'考神附体！他们曾是高考状元',
	 t:'30分钟前',
	 im:'../img/1.jpg'},
	{s:'老人卖菜攒千元全是假币 民警伸援手',
	 t:'40分钟前',
	 im:'../img/2.jpg'},
	 {s:'逃过恐怖袭击 只因多吃一根玉米',
	 t:'40分钟前',
	 im:'../img/3.jpg'},
	 {s:'香港一架客机飞行近1小时后 机长发现忘带航图',
	 t:'40分钟前',
	 im:'../img/5.jpg'},
	 {s:'女子传销被骗60万 欲跳楼',
	 t:'40分钟前',
	 im:'../img/6.jpg'},
	 {s:'张靓颖个唱“夭折” 票务方告代理公司索赔240万',
	 t:'40分钟前',
	 im:'../img/7.jpg'},
	 {s:'薛之谦巡演导演竟是选秀冠军 偶像惨变大叔太震惊',
	 t:'40分钟前',
	 im:'../img/8.jpg'},
	 {s:'阿Sa童年跟她爸这些经历，够我笑一年',
	 t:'40分钟前',
	 im:'../img/9.jpg'},
	 ];

var zz = /^[0-9]*$/;
function html_(data,num,p){
	if(!zz.test(p/3)){
		var news1 = '<div class="news1">'+
					'<div class="news1-span">'+'<a href="http://127.0.0.1:3000/detailed" style="color:black">'+ data[num].s +'</a>'+
						'<div class="t1">'+data[num].t+'</div>'+
					'</div>'+
					'<div class="news1-pic">'+
						'<img src='+data[num].im+'>'+
					'</div>'+
				'</div>';
		return news1;
	}else{
		var news2 =  '<div class="news2">'+
					'<div class="news2-span">'+'<a href="http://127.0.0.1:3000/detailed" style="color:black">'+ data[num].s +
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
	

	for(var i = 0;i < news_con.length;i++){
		$(".con").append(html_(news_con,i,i));
	}

	//搜索功能
	// $(".seac").on("click",function(){
	// 	var txt = $(".sea-inp input").val();
	// 	if()
	// 	$(".con.m").show();
	// })	




})