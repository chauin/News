$(function(){
	var zz = /^1[34578]\d{9}$/; 
	var num1 ='';
	var sta; //代表手机号正确

	$(".phone-inp").on("input",function(){
		num1 = $(".phone-inp").val();
		if(!num1 == ''){
			// $(".wro3").css({"display":'block'});
			sta = 1;
			if(!zz.test(num1)){
				sta = 1;
				$(".send").css({"background":'#fdb6be'});
				$(".send-c").css({"background":'#fdb6be'});	
			}else{
				sta = 0;
				$(".send").css({"background":'red'});
				$(".send-c").css({"background":'red'});
				// $(".wro3").css({"display":'none'});					
			}		
		}else{
			// $(".wro3").css({"display":'none'});
			sta = 1;
		}
	})

	var num2 = '';
	$(".name-inp").on("input",function(){
		num2 = $(".name-inp").val();
		if(!num2 ==''){
			$(".wro1").css({"display":'block'});
		}else{
			$(".wro1").css({"display":'none'});
			
		}
	})

	$(".wro1").on("click",function(){
		$(".name-inp").val('');
		$(".wro1").css({"display":'none'});
	})

	//登录页面
	$(window).on("input change",function(){
		if(!$(".name-inp").val() =='' && !$(".pwd-inp").val() == ''){
			$("#login").css({"background":'red'});
		}else{
			$("#login").css({"background":'#fdb6be'});
		}
	})

	//注册页面按钮变色
	// $(window).on("input change",function(){
	// 	if(!$(".phone-inp").val() =='' && !$(".code-inp").val() == '' && !$(".pswd-inp").val() == ''){
	// 		$("#sign").css({"background":'red'});
	// 	}else{
	// 		$("#sign").css({"background":'#fdb6be'});
	// 	}
	// })

	//密码找回按钮变色
	$(window).on("input change",function(){
		if(!$(".phone-inp").val() =='' && !$(".code-inp").val() == '' && !$(".pswd-inp").val() == ''){
			$("#find").css({"background":'red'});
		}else{
			$("#find").css({"background":'#fdb6be'});
		}
	})

	var num3 = '';
	$(".pwd-inp").on("input",function(){
		num3 = $(".pwd-inp").val();
		if(!num3 ==''){
			$(".wro2").css({"display":'block'});
		}else{
			$(".wro2").css({"display":'none'});
		}
	})

	$(".wro2").on("click",function(){
		$(".pwd-inp").val('');
		$(".wro2").css({"display":'none'});
	})
	// $(".wro3").on("click",function(){
	// 	sta = 1;
	// 	$(".phone-inp").val('');
	// 	$(".send").css({"background":'#fdb6be'});
		
	// })

	var i = 6;
	var set;
	var status = 1;
	var json = '';
	var code_val ='';

	function v_code(){ //验证码
		var json = {
			o:Math.floor(Math.random()*9),
			s:Math.floor(Math.random()*9),
			t:Math.floor(Math.random()*9),
			f:Math.floor(Math.random()*9),
		};
		// console.log(json.f)
		code_val =''+json.o+json.s+json.t+json.f; //加上''字符串，后面这些数字相加就会被转化成字符串相加；
		// console.log('验证码:' + code_val);	
		
		return code_val;
	}
	// $(".idcode-span").html(v_code());

	//注册验证码判断
	var t = []; //收到的验证码和输入的验证码 都是t 可以判断是否一致
	$(".send").on("click",function(){
		var name = $(".phone-inp").val();
		if(sta == 1 || sta == undefined){
			show_(".phone-false");
		}else if(sta == 0){			
			// 手机号码对的时候判断是否已注册
			
			$.post("/sign",{'name':name,'style':'select_'},function(data){
				
				if(data == 'a'){  //已注册，错误提示
					show_($(".fail"));
				}
				else if(data == 'b'){  //没注册，可发验证码					
					show_(".phone-true");
					$(".phone-inp").attr("disabled",true);

					//下一步开始发送验证码
					if(status == 1){
					status = 0;
					t=[];
					t.push(v_code());
					console.log(t[0]);//验证码，用全局变量数组 后面可以取t 判断是否一致 而且再次发送时候可以清空，t[0]代表数组里第0个值
					set = setInterval(function(){
						 if(i > 1){
						 	i --;
						 	$(".send").html(i+'秒');
						 }
						 else{
						 	i = 6;
						 	$(".send").html("点击重新发送");
						 	status = 1;
						 	$(".phone-inp").attr("disabled",false);
						 	clearInterval(set);
						 }
					 },1000);				
				  }
				}	
			})		
		}
	})

	//密码找回验证码判断
	var tc = []; //收到的验证码和输入的验证码 都是t 可以判断是否一致
	$(".send-c").on("click",function(){
		var name = $(".phone-inp").val();
		if(sta == 1 || sta == undefined){
			show_(".phone-false");
		}else if(sta == 0){		
			// 手机号码对的时候判断是否已注册
			$.post("/findpwd",{'name':name,'style':'find_'},function(data){	//报错，下行data不能输出
						
				if(data == 'b'){  //没注册，提示错误
					show_($(".fail"));		
				}
				else if(data == 'a'){  //已注册，可以修改						
					show_(".phone-true");
					$(".phone-inp").attr("disabled",true);
					//下一步开始发送验证码
					if(status == 1){
					status = 0;
					tc=[];
					tc.push(v_code());
					console.log(tc[0]);//验证码，用全局变量数组 后面可以取t 判断是否一致 而且再次发送时候可以清空，t[0]代表数组里第0个值
					set = setInterval(function(){
						 if(i > 1){
						 	i --;
						 	$(".send-c").html(i+'秒');
						 }
						 else{
						 	i = 6;
						 	$(".send-c").html("点击重新发送");
						 	status = 1;
						 	$(".phone-inp").attr("disabled",false);
						 	clearInterval(set);
						 }
					 },1000);				
				  }
				}	
			})		
		}
	})

	function show_(say){
		$(say).fadeIn(600,function(){
			setTimeout(function(){
			$(say).stop(true).fadeOut();
			},2000)
		}
		)
	}

	
	var code_ = $(".code-inp").val();
	$(".phone-inp,.code-inp,.pswd-inp,.law-inp").on("input change",function(){
		if(zz.test(num1) && $(".law-inp").attr("checked")){
			$(".log").css({"background":'red'});
		}else{
			$(".log").css({"background":'#fdb6be'});
		}

		
	})

	var zz1 =/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
	$(".pswd-inp").on("blur",function(){
		if(zz1.test($(".pswd-inp").val())){  //正则里$(".pswd-inp").val()不能写成死值
			$(".pwd-false").hide();
		}else{
			show_($(".pwd-false"));
		}
	})

	$(".d-pwd2").on("blur",function(){
		if(zz1.test($(".d-pwd2").val())){  //正则里$(".pswd-inp").val()不能写成死值
			$(".dp-false").hide();
		}else{
			show_($(".dp-false"));
		}
	})

	//密码是否可见 眼睛
	var s1 = 1;
	$(".eye_open1,.eye_clo1").click(function(){
		if(s1 == 1){
			s1 = 0;
			$(".eye_clo1").hide();
			$(".eye_open1").show();
			$(".d-pwd1").prop("type","text");
		}else{
			s1 = 1;
			$(".eye_clo1").show();
			$(".eye_open1").hide();
			$(".d-pwd1").prop("type","password");
		}
	})

	var s2 = 1;
	$(".eye_open2,.eye_clo2").click(function(){
		if(s2 == 1){
			s2 = 0;
			$(".eye_clo2").hide();
			$(".eye_open2").show();
			$(".d-pwd2").prop("type","text");
		}else{
			s2 = 1;			
			$(".eye_clo2").show();
			$(".eye_open2").hide();
			$(".d-pwd2").prop("type","password");
		}
	})

	var s3 = 1;
	$(".eye_open3,.eye_clo3").click(function(){
		if(s3 == 1){
			s3 = 0;
			$(".eye_clo3").hide();
			$(".eye_open3").show();
			$(".pwd-inp").prop("type","text");
		}else{
			s3 = 1;			
			$(".eye_clo3").show();
			$(".eye_open3").hide();
			$(".pwd-inp").prop("type","password");
		}
	})

	var w_t='';

	$(window).scroll(function(){
		w_t = $(window).scrollTop();
		// console.log(w_t);
		if(w_t > 20){
			$(".tit").stop(true).fadeOut(1000);
			$(".news_name").fadeIn(1000);
		}else if(w_t < 66){
			$(".tit").fadeIn(1000);
			$(".news_name").stop(true).fadeOut(1000)
		}
	})

	
	// 注册
	$("#sign").click(function(){
		var name = $(".phone-inp").val();
		var pwd = $(".pswd-inp").val();
		// var id = v_code();
		console.log('id'+t);
		console.log('inp'+$(".code-inp").val());
		if(zz.test($(".phone-inp").val()) && zz1.test($(".pswd-inp").val()) && $(".code-inp").val()==t){
			$.post("/sign",{name:name,pwd:pwd,style:'insert_'},function(data){
				if(data == 'true'){
					$(".alert2").stop(true).show();
					$(".back").hide();
				}else{
					alert('注册失败');
				}
			})
		}else{
			$(".alert4").stop(true).show();
		}
	})

	// 登录
	$("#login").click(function(){
		var name = $(".name-inp").val();
		var pwd = $(".pwd-inp").val();
		$.post("/log",{name:name,pwd:pwd},function(data){
				if(data == 'true'){
					// alert('登录成功');
					$(".alert1").stop(true).show();
					console.log($(".name-inp").val())
					// $(".my_log_name").html($(".name-inp").val())
				}else if(data == 'false'){
					// alert('登录失败');
					show_($(".fail"));
				}
			})
		})

	//密码修改
	$("#find").click(function(){
		var name = $(".phone-inp").val();
		var pwd = $(".pswd-inp").val();

	if(zz.test($(".phone-inp").val()) && zz1.test($(".pswd-inp").val()) && $(".code-inp").val()==tc){
		$.post("/findpwd",{name:name,pwd:pwd,style:'change_'},function(data){
			if(data == 't'){
				$(".alert3").stop(true).show();
				$(".back").hide();
			}else{
				alert('修改失败');
				}
			})
	}else{
		$(".alert4").stop(true).show();
		}
	})
	
	

	//搜索功能见list.js
	

})
