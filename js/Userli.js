window.onload=function () {
    var t1=document.getElementById("t1");
        $.ajax({
            method:"post",
            url:"php/userlit.php",
            success:function (result) {
                var arr=JSON.parse(result);
                var str=``;
                for(var i=0;i<arr.length;i++){
                    str+=`<tr style='text-align: center;'>
                    <td>${arr[i].id}</td>
                    <td>${arr[i].Name}</td>
                    <td>${arr[i].Password}</td>
                    <td>${arr[i].Time}</td>
                    <td id="${arr[i].id}">
                    <button type="button" class="btn btn-primary">修改</button>
                    <button type="button" class="btn btn-danger" id="delete">删除</button>
                    </td>
                </tr>`;
                    t1.innerHTML=str;
                }
                del();
            },
            error:function (msg) {
                alert(msg);
            },
        });
        //删除
    function del() {
        var id = t1.querySelectorAll('tr td:last-child');
        console.log(id);
        for (var i = 0; i < id.length; i++) {
            id[i].onclick=function () {
                console.log(this.innerHTML);
                $.ajax({
                    method:"post",
                    url:"php/del.php",
                    data:{
                        id:this.id,
                    },
                    success:function (result) {
                        window.location.href='Userli.html';
                    },
                    error:function (msg) {
                        alert(msg);
                    },
                })
            };
        }
    }
};