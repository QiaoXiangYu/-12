window.onload=function () {
        var sub=document.getElementById("submit");
        var aInput=document.getElementsByTagName("input");
        sub.onclick=function (){
            $.ajax({
                method:"post",
                url:"php/AddGrades.php",
                data:{
                    name:aInput[0].value,
                    yw:aInput[1].value,
                    sx:aInput[2].value,
                    yy:aInput[3].value,
                    ty:aInput[4].value,
                },
                success:function(result) {
                    var obj=JSON.parse(result);
                    alert(obj.message);
                },
                error:function (msg) {
                    alert(msg);
                }
            })
        }
};