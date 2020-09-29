function animate(obj, target){
    clearInterval(obj.timer1);
    obj.timer1 = setInterval(function(){
        //盒子本身无的位置+步长
        var step = (target - obj.offsetTop)/10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style.top = obj.offsetTop + step + "px";
        if(obj.offsetTop == target){
            clearInterval(obj.timer1);
        }
    },20);
}