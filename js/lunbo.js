/**
 * Created by 宋大业 on 2018/10/11.
 */
function animate1(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step =(target-leader)/10;
        step = step > 0 ? Math.ceil(step):Math.floor(step);
        leader += step;
        obj.style.left = leader + "px";
        if (target===leader) {
            clearInterval(obj.timer)
        }
    },15)
}
var box = document.getElementsByClassName('body1-middle1-top')[0];
var screen = document.getElementsByClassName('lunbo1')[0];
var imgWidth = screen.offsetWidth;
var ol=document.getElementsByClassName('point')[1];
var ul =document.getElementById('lunbo-ul');
var ulLis = ul.children;
var timer = null;

var ul2=document.getElementsByClassName('lunbo2')[0];
var ulLis2 = ul2.children;
var ol2 = document.getElementsByClassName('lunbo3')[0];
var olLis2 = ol2.children;
console.log(olLis2);
var screen2 = document.getElementsByClassName('body5-right-middle')[0];
var imgWidth2 = screen2.offsetWidth;

var next = document.getElementById('right');
var prev = document.getElementById('left');




//for (var i = 0; i < ulLis.length; i++) {
//    var li = document.createElement("li");
//    li.innerHTML = i + 1;
//    ol.appendChild(li);
//}

var olLis = ol.children;
olLis[0].classList.add("active");
//var firstImg = ulLis[0].cloneNode(true);
//ul.appendChild(firstImg);
//console.log(ulLis);


var target = 0;
var target2=0;
//    alert(olLis.length)

for (var i = 0; i < olLis.length; i++) {
    olLis[i].index = i;
    olLis[i].onmouseover = function () {
        for (var j = 0; j < olLis.length; j++) {
            olLis[j].classList.remove("active");
        }
        this.classList.add("active");

        target = -this.index * imgWidth;
        animate1(ul, target);
        pic = square = this.index;
    };
}

for (var i = 0; i < olLis2.length; i++) {
    olLis2[i].index = i;
    olLis2[i].onclick = function () {
        for (var j = 0; j < olLis2.length; j++) {
            olLis2[j].classList.remove("now");
        }
        this.classList.add("now");

        target2 = -this.index * imgWidth2;
        animate1(ul2, target2);
        pic2 = square2 = this.index;
    };
}


box.onmouseover = function () {
    clearInterval(timer);
};
box.onmouseout = function () {
    timer = setInterval(playright, 2000);
};

next.onclick=function(){
    right(ulLis2,olLis2,ul2);
};

var pic = 0;//记录当前显示的图片的索引
var square = 0;//记录当前亮起的按钮的索引




function right(a,b,father){
if (pic === a.length - 1) {
    father.style.left = 0;
    pic = 0;
}
pic++;
target = -pic * imgWidth;
animate1(father, target);
if (square < b.length - 1) {
    square++;
} else {
    square = 0;
}
for (var i = 0; i < b.length; i++) {
    b[i].classList.remove("active");

}
b[square].classList.add("active");

}


timer = setInterval(playright, 2000);//每隔一秒钟播放下一张
function playright() {
    right(ulLis,olLis,ul);
}
