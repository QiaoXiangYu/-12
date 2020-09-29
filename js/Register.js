window.onload=function () {
    //获取用户输入等等
    var btn=document.getElementById("btn1");
    var user1=document.querySelector('#user1');
    var pass1=document.querySelector('#pass1');
    var um = /^[\u4e00-\u9fa5]{2,4}$/; //验证用户
    var pa = /^\w{6,12}$/;//验证密码
    console.log(user1);
    console.log(pass1);

    //获取输入检查正确并提醒用户
    f1(user1,um);
    f1(pass1,pa);
    function f1(ele,reg) {
        ele.onblur=function () {
            if(reg.test(this.value)){
                console.log('输入正确');
            }
            else {
                console.log('输入错误');
            }
        };
    }
    //点击注册开始验证用户名和密码是否符合规范
    btn.onclick=function () {
        if (um.test(user1.value) && pa.test(pass1.value)){
            console.log('验证正确');
            transmit();
        }
        else {
            alert('输入有错误');
        }
    };
    //调用php页面
    function transmit() {
        var input=document.getElementsByTagName("input");
        $.ajax({
            method:"post",
            url:"php/user.php",
            data:{
                Name:input[0].value,
                Password:input[1].value,
                Time:showTime()
            },
            success:function (result) {
                var obj=JSON.parse(result);
                alert(obj.message);
            },
            error:function (msg) {
                alert(msg);
            }
        })
    }
};