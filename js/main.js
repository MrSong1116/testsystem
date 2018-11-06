/**
 * Created by 宋大业 on 2018/8/29.
 */
var aA1=document.querySelectorAll('.banner-inner .point>a');
var aD1=document.querySelectorAll('.banner div');

var aA2=document.querySelectorAll('.body1-middle2 .body1-middle2-nav ul li');
var aD2=document.querySelectorAll('.body1-middle2 .body1-middle2-middle ul');


var aA4=document.querySelectorAll('.guanfang span');
var aD4=document.querySelectorAll('.body1-middle1-top .lunbo');

var aA5=document.querySelectorAll('.body4-right>ul>li');
var aD5=document.querySelectorAll('.body4-right .body4-right-lil');

var aA6=document.querySelectorAll('.body6-left-bottom>ul>li');
var aD6=document.querySelectorAll('.body6-left-bottom>ul>li');

var aA7=document.querySelectorAll('.body2 .body2-left-nav .ali1 .qunxiong2 li');
var aD7=document.querySelectorAll('.body2 .body2-left-bottom .adiv1>div');

var aA8=document.querySelectorAll('.body2 .body2-left-nav .ali2 .qunxiong2 li');
var aD8=document.querySelectorAll('.body2 .body2-left-bottom .adiv2>div');

var aA9=document.querySelectorAll('.body2 .body2-left-nav .ali3 .qunxiong2 li');
var aD9=document.querySelectorAll('.body2 .body2-left-bottom .adiv3>div');

var aA10=document.querySelectorAll('.body2 .body2-left-nav .ali4 .qunxiong2 li');
var aD10=document.querySelectorAll('.body2 .body2-left-bottom .adiv4>div');

console.log(aA9);


function c(x,y,z){
    for (let i = 0; i < x.length; i++) {
        x[i][z]=function(){
            for (let j = 0; j < y.length; j++) {
                x[j].classList.remove('now');
                y[j].classList.remove ('now');
            }
            x[i].classList.add('now');
            y[i].classList.add ('now');
        }
    }
}

c(aA2,aD2,'onmousemove');
c(aA4,aD4,'onclick');
c(aA5,aD5,'onmousemove');
c(aA6,aD6,'onmousemove');
c(aA7,aD7,'onclick');
c(aA8,aD8,'onclick');
c(aA9,aD9,'onclick');
c(aA10,aD10,'onclick');



var aA20 = document.getElementsByClassName('qunxiong1');
var aD20 = document.getElementsByClassName('qunxiong2');
var aD21 = document.getElementsByClassName('body2-left-bottom-main');
var aD51 = document.querySelectorAll('.qunxiong .qunxiong1 .sanjiao');

function d(x,y,w,a,z){
    for (let i = 0; i < x.length; i++) {
        x[i][z]=function(){
            for (let j = 0; j < x.length; j++) {
                x[j].classList.remove('now');
                y[j].classList.remove ('now');
                w[j].classList.remove ('now');
                a[j].classList.remove ('now');
            }
            x[i].classList.add('now');
            y[i].classList.add ('now');
            w[i].classList.add ('now');
            a[i].classList.add ('now');
        }
    }
}

d(aA20,aD20,aD51,aD21,'onclick');





for (var i = 0; i < aA1.length; i++) {
    aA1[i].index = i;
    aA1[i].onmouseover = function () {
        for (var j = 0; j < aA1.length; j++) {
            aA1[j].classList.remove("now");
            aD1[j].classList.remove("now");
        }
        this.classList.add("now");
        aD1[this.index].classList.add("now");
        //target = -this.index * imgWidth;
        //animate1(ul, target);
        square = this.index;
    };
}





//
//function c(x,y,z){
//    for (let i = 0; i < x.length; i++) {
//        x[i][z]=function(){
//            for (let j = 0; j < y.length; j++) {
//                x[j].classList.remove('now');3//                y[j].classList.remove ('now');
//            }
//            x[i].classList.add('now');
//            y[i].classList.add ('now');
//        }
//    }
//}
//var oEven = window.event || ev;
//oEven.stopImmediatePropagation();
//console.log(aA5);
//
//function b(x,y,z,q){
//    for (let i = 0; i < x.length; i++) {
//        x[i][z]=function(){
//            for (let j = 0; j < y.length; j++) {
//                x[j].classList.remove('now');
//                y[j].classList.remove ('now');
//            }
//            x[i].classList.add('now');
//            y[i].classList.add ('now');
//        }
//    }
//}

//var aB1=document.querySelectorAll('.body2-left-nav .qunxiong');
//var aE1=document.querySelectorAll('.qunxiong2');
//var aF1=document.querySelectorAll('');
//
//function b(x,y,z){
//    for (let i = 0; i < x.length; i++) {
//        x[i].onclick = function () {
//
//            for (let j = 0; j < y.length; j++) {
//                x[j].classList.remove('now');
//                y[j].classList.remove ('now');
//                z[j].classList.remove ('now');
//            }
//            x[i].classList.add('now');
//            y[i].classList.add ('now');
//            z[i].classList.add ('now');
//
//        }
//
//    }
//}

//
//
//a(aA3,aD3);
//b(aA2,aD2,aD22);
