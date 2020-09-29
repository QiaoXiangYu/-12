window.onload=function () {
    var btn=document.getElementById("btn1");
    var input=document.getElementsByTagName("input");
    btn.onclick=function () {
        $.ajax({
            method:"post",
            url:"php/register.php",
            data:{
                Name:input[0].value,
                Password:input[1].value,
                Time:showTime()
            },
            success:function (result) {
                var obj=JSON.parse(result);
                if (obj.code==4){
                    alert(obj.message);
                }
                else{
                    alert(obj.message);
                    window.location.href='Userli.html';
                }
            },
            error:function (msg) {
                alert(msg);
            }
        })
    }
};