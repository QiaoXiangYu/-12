window.onload=function () {
        var btn=document.getElementById("btn1");
        var t1=document.getElementById("t1");
        btn.onclick=function () {
            $.ajax({
                method:"get",//异步 同步
                url:"php/Score.php",  //文件位置
                success:function (result) {
                    var arr=JSON.parse(result); //转换为字符串
                    console.log(arr);
                    var str=``;
                    for (var i=0;i<arr.length;i++){
                        str +=` <tr style='text-align: center;'>
                    <td>${arr[i].id}</td>
                    <td>${arr[i].name}</td>
                    <td>${arr[i].yw}</td>
                    <td>${arr[i].sx}</td>
                    <td>${arr[i].yy}</td>
                    <td>${arr[i].ty}</td>
                </tr>`;
                    }
                    t1.innerHTML=str;
                },
                error:function (msg) {
                    alert(msg);
                }
            })
        }
};