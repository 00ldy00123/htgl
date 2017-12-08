!function(window,document,$,undefined){

	var init = function(){
		bindevent()
		donwfocus()
		
	};

	var bindevent = function(){
		$("#newclick").on('click',onnewbtnclick);
	}
	var donwfocus=function(){
		$('#username,#email,#password,.password_again').focus(donwtxt);
	}
	
		var onnewbtnclick = function(){
			var name=$('#username').val();
  			var email=$('#useremail').val();
  			var password=$("#password").val();
			var pass_again=$(".pass_again").val();
			var pone_again=$(".phone_again").val();
			var arr=[name,email,password,pass_again,pone_again]
			var booluser=(arr[0]).length>=8
			var reemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g ;//邮箱
            var boolemail = reemail.test(arr[1]);//邮箱
            var boolpwd=(arr[2]).length>=6
            var boolpwd1 = (arr[2]) == (arr[3])
            var retel =/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g   //电话
          	var booltel = retel.test(arr[4]);//电话
  		
		if(!booluser){
               $('#usertiger').text('用户名不能少于8位');
            }
            if(!boolpwd){
                $('#pwtiger').text('不能少于6位');
            }
            if(!boolpwd1){
                $('#pwagaintiger').text('两次输入密码不一致');
            }
            if(!booltel){
               $('#phonetiger').text('请输入正确的电话号');
            }
            if(!boolemail){
                $('#emailtiger').text('请输入正确的邮箱格式');
            }
		
		 if(booluser && boolpwd && boolpwd1 && booltel && boolemail){                
                $.ajax({
                    type:"post",
                    url:"reg.php",
                    async:true,
                    data:{
                        supplier_user_name:$('#username').val(),
                        pass_word:$("#password").val(),
                        tel:$(".phone_again").val(),
                        email:$('#useremail').val()
                    },
                    success : function(data){
            
                      if(data.user_exist == fasle){
                        $('#usertiger').text('用户已存在')
                      }

                     if(data.phone_exist == false){}

                        $('#phonetiger').text('手机号已存在')
                    }
                });
            }

        }
		var donwtxt = function(){
			var name=$("#username").val();
			var password=$("#password").val();
			var pass_again=$(".pass_again").val();
			var password_again=$(".password_again").val();
			$("#usertiger").text("")
			$("#emailtiger").text("")
			$("#pwtiger").text("")
			$("#pwagaintiger").text("")
			$("#phonetiger").text("")
		}
		




		$(document).ready(init);

}(window,document,jQuery);
   
