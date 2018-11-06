/**
 * Created by 宋大业 on 2018/10/2.
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                obj.style.opacity = json[k];
                //var leader = getStyle(obj, k) * 100;
                //var target = json[k] * 100;
                //var step = (target - leader) / 10;
                //step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //leader = leader + step;
                //obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 10);
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}




window.onload = function () {
    var flag = true;//将flag初始值设置为true，表示节流阀是打开的

    //config是配置单，规定了每张图片的大小位置层级透明度
    var config = [
        {
            "width": 398,
            "top": 20,
            "left": 50,
            "opacity": 0,
            "zIndex": 0
        },//0
        {
            "width": 398,
            "top": 20,
            "left": 50,
            "opacity": 0,
            "zIndex": 0
        },//1
        {
            "width": 398,
            "top": 20,
            "left":50,
            "opacity": 0,
            "zIndex": 0
        },//2
        {
            "width": 398,
            "top": 20,
            "left": 50,
            "opacity": 0,
            "zIndex": 0
        },//3
        {
            "width": 398,
            "top": 20,
            "left": 50,
            "opacity": 0,
            "zIndex": 0
        },//4
        {
            "width": 398,
            "top": 20,
            "left": 50,
            "opacity": .8,
            "zIndex": 0
        },//5
        {
            "width": 450,
            "top": 70,
            "left": 475,
            "opacity": 1,
            "zIndex": 0
        },//6
        {
            "width": 398,
            "top": 20,
            "left": 952,
            "opacity": .8,
            "zIndex": 0
        },//2
        {
            "width": 398,
            "top": 20,
            "left": 952,
            "opacity": 0,
            "zIndex": 0
        },//2
        {
            "width": 398,
            "top": 20,
            "left": 952,
            "opacity": 0,
            "zIndex": 0
        },//2
        {
            "width": 398,
            "top": 20,
            "left": 952,
            "opacity": 0,
            "zIndex": 0
        }//2

    ];

    //找人
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");

    ////鼠标经过盒子，让arrow箭头渐渐地显示出来
    //wrap.onmouseover = function () {
    //    animate(arrow, {"opacity": 1});
    //};
    ////鼠标离开盒子，让arrow箭头渐渐地隐藏
    //wrap.onmouseout = function () {
    //    animate(arrow, {"opacity": 0});
    //};

    function assign() {
        //让所有的li按照config配置单渐渐地各就各位
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;//当动画执行完成后，将flag设置为true，打开节流阀
            });
        }
    }
    assign();


var num = 1;
    var liss=[];
    //点击右箭头，将配置单中最前面的元素放到最后面
    arrRight.onclick = function () {
        if (flag) {//当flag为true即节流阀是打开的状态时，才能执行动画
            flag = false;//当动画执行时，将flag设置为false，关闭节流阀
            config.push(config.shift());

            //liss[num].style.background='white'
            num++;
            //把最前面的元素放到最后面
            //config.unshift(config.pop());//把最后面的元素放到最前面
            //让所有的li按照新生成的config配置单渐渐地各就各位
            assign();
        }
    };
    //点击左箭头，将配置单中最后面的元素放到最前面
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());//把最后面的元素放到最前面

            //config.push(config.shift());//把最前面的元素放到最后面
            assign();
        }
    };
};


