/**
 * Created by 宋大业 on 2018/10/9.
 */
var ren = document.getElementsByClassName('renzu')[0];
var ren_hero = ren.getElementsByClassName('hero')[0];

var mo = document.getElementsByClassName('mozu')[0];
var mo_hero = mo.getElementsByClassName('hero')[0];

var xian = document.getElementsByClassName('xianzu')[0];
var xian_hero = xian.getElementsByClassName('hero')[0];

var gui = document.getElementsByClassName('guizu')[0];
var gui_hero = gui.getElementsByClassName('hero')[0];

var lay = document.getElementsByClassName('layer')[0];
var erweima =  document.getElementsByClassName('erweima')[0];

var nav = document.getElementsByClassName('page-nav')[0];
var innR= document.querySelectorAll('.renzu .inner')[0];
var innM= document.querySelectorAll('.mozu .inner')[0];
var innX= document.querySelectorAll('.xianzu .inner')[0];
var innG= document.querySelectorAll('.guizu .inner')[0];

var iii=document.getElementsByClassName('clik');
var zhongzu = document.getElementsByClassName('page');
var hero = document.getElementsByClassName('hero');




var bool = true;

ren.onclick = function(){
    if(bool){
        bool = false;
    gogogo(ren,ren_hero);
        ren.onclick =null
    }
};

mo.onclick = function(){
    if(bool){
        bool = false;
    gogogo(mo,mo_hero);
        mo.onclick =null
    }
};
xian.onclick = function(){
    if(bool){
        bool = false;
        gogogo(xian,xian_hero);
        xian.onclick =null
    }
};
gui.onclick = function(){
    if(bool){
        bool = false;
        gogogo(gui,gui_hero);
        gui.onclick =null
    }
};


var bool1=true;
    for (let i = 0; i < iii.length; i++) {
        iii[i].onclick=function(){
            ren.onclick = null;
            mo.onclick = null;
            xian.onclick = null;
            gui.onclick = null;
            zhongzu[i].classList.add('act');
            if(bool1==true){
                    bool1=false;
                for (let j = 0; j < zhongzu.length; j++) {
                    iii[j].classList.remove('active');
                    zhongzu[j].classList.remove('active');
                    zhongzu[j].style.left=1920+'px';
                    hero[j].style.left=900+'px';
                    console.log(bool1);
                }
                zhongzu[i].classList.add('active');
                if(i>=1){
                zhongzu[i-1].style.left=0;
                }else {
                    zhongzu[3].style.left=0;
                }
                animate(zhongzu[i],10,0);
                animate2(zhongzu[i],20,1920);
                iii[i].classList.add('active');

        }

        }
    }







    function gogogo (ele,eles){
        //eles.style.left = eles.offsetLeft+100+'PX';
    ele.classList.add('active');
        ele.classList.add('act');
        animate(ele,20,0);
        animate2(ele,50,1920);
    var num = 0;
    var wi=eles.offsetLeft;
    var timer = null;
        clearInterval(timer);
    timer = setInterval(function(){
        num+=1;
        wi+=3;
        if(num<300){
            eles.style.left = wi+'px';
        }else if(num===300){
                lay.classList.add('active');

            setTimeout(function(){
                    lay.classList.remove('active');
                erweima.style.background='rgba(255,255,255,.5)';
                nav.style.display='block';
                innR.style.display='block';
                innM.style.display='block';
                innX.style.display='block';
                innG.style.display='block';

            },200);
            clearInterval(timer);
        }
    },1);
}

function animate(obj, step, target) {
    clearInterval(obj.timer1);
    obj.timer1 = setInterval(function () {
        var leader = obj.offsetLeft;
        step = Math.abs(step);
        step = leader < target ? step : -step;
        //Math.abs(target - leader)  当前位置到目标的位置
        if (Math.abs(target - leader) > Math.abs(step)) {
            leader += step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer1);
            bool1=true
        }
    }, 15);
}

function animate2(obj, step, target) {
    clearInterval(obj.timer2);
    obj.timer2 = setInterval(function () {
        var leader = obj.offsetWidth;

        //Math.abs(target - leader)  当前位置到目标的位置
        if(target-leader>step){
            leader += step;
            obj.style.width = leader + "px";
        }else {
            clearInterval(obj.timer2);
        }

    }, 15);
}
