window.onload=function () {
    var sidebar_ul=document.querySelector('.sidebar_ul');
    var sidebar=document.querySelector('.sidebar');
    sidebar.onmouseover=function(){
        $.ajax({
            method:"get",
            url:"php/img.php",
            success:function (result) {
                var arr=JSON.parse(result);
                var str=``;
                for(var i=0;i<arr.length;i++){
                    str+=`<li>
                    <a href="#">${arr[i].sj1}<span class="iconfont icon-arrow-right">&#xe501;</span></a>
                    <div class="sidebar_hidden">
                    </div>
                </li>
                <li><a href="#">${arr[i].sj2}<span class="iconfont icon-arrow-right">&#xe501;</span></a></li>
                <li><a href="#">${arr[i].sj3}<span class="iconfont icon-arrow-right">&#xe501;</span></a></li>
                <li><a href="#">${arr[i].sj4}<span class="iconfont icon-arrow-right">&#xe501;</span></a></li>
                <li><a href="#">${arr[i].sj5}<span class="iconfont icon-arrow-right">&#xe501;</span></a></li>
`;
                    console.log(str);
                    sidebar_ul.innerHTML=str;
                }
            },
            error:function (msg) {
                alert(msg);
            },
        });
    }
};