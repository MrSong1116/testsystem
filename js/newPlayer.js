/**
 * Created by 宋大业 on 2018/10/7.
 */
var aA1=document.querySelectorAll('.money .inner>ul li');
var aA2=document.querySelectorAll('.level-main .level-main-head li');
var aD2 = document.querySelectorAll('.level-main-box>div');
var aA3 = document.querySelectorAll('.choose-main nav ul li');
var aD3 = document.querySelectorAll('.choose-main-1');

for (let i = 0; i < aA1.length; i++) {
    aA1[i].onclick = function(){
        for (let j = 0; j < aA1.length; j++) {
            aA1[j].classList.remove('active');
        }
        aA1[i].classList.add('active')
    }
}


function z(a,b,y){
    for (let i = 0; i < a.length; i++) {
        a[i][y]=function(){
            for (let j = 0; j < b.length; j++) {
                a[j].classList.remove('active');
                b[j].classList.remove ('active');
            }
            a[i].classList.add('active');
            b[i].classList.add ('active');
        }
    }
}

z(aA2,aD2,'onclick');
z(aA3,aD3,'onclick');