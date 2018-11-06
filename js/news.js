/**
 * Created by 宋大业 on 2018/10/5.
 */
var aLi = document.querySelectorAll('.article-main>ul>li');
var pre = document.getElementById('prev');
var nex = document.getElementById('next');
var aPoint = document.querySelectorAll('.article-left-bottom .page li');
//var aNum = document.getElementById('No');
//var aText = document.getElementById('text');
//var aJump = document.getElementById('jump');



console.log(aPoint);
console.log(aLi);

function oncolor(x){
    x.style.backgroundColor='#6a7d9b';
    x.style.color='#f5fafe';
}

function upcolor(y){
    y.style.backgroundColor='white';
    y.style.color='#6a7d9b';
}

pre.onmousedown = function (){
    oncolor(pre)
};

pre.onmouseup = function(){
    upcolor(pre);
};

nex.onmousedown = function(){
    oncolor(nex);
};

nex.onmouseup = function(){
    upcolor(nex);
};

//aJump.onmousedown = function(){
//    oncolor(aJump);
//};
//aJump.onmouseup = function(){
//    upcolor(aJump);
//};


for (var i = 0; i < aPoint.length; i++) {
    aPoint[i].index = i;
        aPoint[i].onclick=function(){
            for (var j = 0; j < aPoint.length; j++) {
            aLi[j].classList.remove('active');
           aPoint[j].classList.remove('active')
        }
        aLi[this.index].classList.add('active');
        this.classList.add('active');
            ind = this.index;
        }
    }

var ind = 0;
var ind2 = 0;

nex.onclick=function(){
    if(ind === aLi.length - 1){
        return;
    }
    ind++;
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].classList.remove('active');
        aPoint[i].classList.remove('active')
    }

    aLi[ind].classList.add('active');
    aPoint[ind].classList.add('active')
};

pre.onclick=function(){
    if(ind === 0){
        return;
    }
    ind--;
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].classList.remove('active');
        aPoint[i].classList.remove('active')
    }

    aLi[ind].classList.add('active');
    aPoint[ind].classList.add('active')
};
