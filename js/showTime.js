function showTime(time) {
    var today=new Date();  //创建日期对象
    var n=today.getFullYear(); //年
    var y=today.getMonth()+1;//月
    var r=today.getDate();//日
    var xq= new Date().getDay();//星期
    var hour=today.getHours();//获取小时数
    var minu=today.getMinutes();//获取分数
    var seco=today.getSeconds();//获取秒数
    return n+"年"+y+"月"+r+"日"+xq+"星期"+hour+"小时"+minu+"分"+seco+"秒";
}