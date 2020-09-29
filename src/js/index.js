 var headTopA = document.querySelectorAll('.head-top li a');
    var navA = document.querySelectorAll('.nav li a');
    var fareA=document.querySelectorAll('.fare li a');
    var navigation=document.querySelectorAll('.navigation li a');
    var li=document.querySelectorAll('.content-imgr li');
    var input=document.querySelector('.form input');
    var btn=document.querySelector('.form button');
    var span=document.querySelector('.form span');

    var item=document.querySelectorAll('.banner-ul-img .item');
    var point=document.querySelectorAll(".btn1 .btn2");

    var le=document.querySelector('.icon-arrow-left');
    var rt=document.querySelector('.sidebar-btn span:last-child');
    console.log(rt);
    le.onclick=function () {
        toindex();
    };
    rt.onclick=function () {
        goindex();
    };
    le.onmouseover=function () {
        clearInterval(interval);//停止
    };
    rt.onmouseover=function () {
        clearInterval(interval);//停止
    };
    var index=0;
    var outindex=function () {
        for (var i=0;i<item.length;i++){
            item[i].className="item";
            point[i].className="btn2";
            item[i].style.opacity=0;
        }
    };

    var nextindex=function () {
        outindex();
        item[index].className='item active';
        point[index].className="btn2 active";
        item[index].style.opacity=1;
    };
    var goindex=function () {
        if(index<3){
            index++;
        }
        else {
            index=0;
        }
        nextindex();
    }

    var toindex=function () {
        if (index==0){
            index=3;
        }
        else {
            index--;
        }
        nextindex();
    };
    var interval=setInterval(goindex,5000);//2020/4/25

    console.log(point);

    coloR(headTopA);
    coloR(fareA);
    function coloR(div) {
        console.log(div);
        for (var i = 0; i < div.length; i++) {
            div[i].onmouseover = function () {
                this.style.color = '#fffff2';
            }
            div[i].onmouseleave = function () {
                this.style.color = '';
            }
        }
    }
    colR1(navA);
    colR1(navigation);

    function colR1(sp) {
        for (var i = 0; i < sp.length;i++){
            sp[i].onmouseover = function () {
                this.style.color = '#ff6700';
            }
            sp[i].onmouseleave = function () {
                this.style.color = '';
            }
        }
    }

    topad(li);
    function topad(li) {
        for (var i=0;i<li.length;i++){
            li[i].onmouseover=function () {
                this.style.transform='translateY(-5px)';
                this.style.boxShadow='0 15px 30px rgba(0,0,0,.18)';
            }
            li[i].onmouseleave=function () {
                this.style.transform='translateY(-0px)';
                this.style.boxShadow='';
            }
        }
    }
    /*返回顶部*/




    /*入框获取焦点*/
    var input=document.querySelector('.form input');
    var btn=document.querySelector('.form button');
    var span=document.querySelector('.form span');
    input.onfocus=function () {
        input.style.border='1px solid #0077aa';
    };
    input.onblur=function () {
        input.style.border='';
    };
    btn.onmousedown=function () {
        span.style.fontSize='20px';
    };
    btn.onmouseup=function () {
        span.style.fontSize='25px';
    };


window.onscroll=function () {
    var html=document.body.scrollTop || document.documentElement.scrollTop;
    var navigation=document.querySelector('.go');
    if (html<=500){
        navigation.style.display='none';
    }
    else {
        navigation.style.display='block';
    }
    navigation.onclick=function () {
        goindex();
    }
    function goindex() {
        window.scrollTo(0,0);
    }
};







/*
设置侧边栏动画*/



/*

面向对象封装
*/

