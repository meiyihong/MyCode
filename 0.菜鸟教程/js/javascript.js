var hello = 'heheda'

function doo() {
    alert(hello);
    document.write(hello + hello);
}

var huohuo = function timehold() {
    var nowtime = new Date().getHours();
    if (nowtime > 24) {
        document.write('heheda 时间超过20：00');
    } else {
        alert('时间小于20：00');
        document.getElementById('btn').innerHTML('时间小于20：00');
    }
}

function butn1() {
    var x = document.getElementById("butn");
    x.innerHTML = "改变元素内容";
}


function doo1() {
    var person = {
        firstName: "Jion",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };
    document.getElementById("obj1").innerHTML = person.firstName + "现在" + person.age + time;

}

function doo2(can1, can2, can3) {
    alert(can1 + can2 + can3);
}
var person = {
    firstName: "Jion",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
// doo2(person.age, person.lastName, person.age);


function numbers() {
    var y = document.getElementById("txt").value;
    if (y > 0 || y < 10 || y == 10) {
        document.getElementById("tips").innerHTML = "输入" + y + "正确";
    } else {
        document.getElementById("tips").innerHTML = "输入" + y + "错误";
    }
}

function emails() {

}

//取得数组的最大值
var num1 = [1, 3, 5, 6, 3, 4, 5, 7, 8];

function maxunm(num1) {

    var yt = 0,
        i = 0;
    for (var i = 0; i < arguments[0].length; i++) {

        if (arguments[0][i] > yt) {
            yt = arguments[0][i];
        }
    }
    var xk = document.getElementById("maxnumber");
    xk.innerHTML = yt;
}

var add = (function() {
    var counter = 0;
    return function() { return counter += 1; }
})();

add();
add();
add();

// 计数器为 3

function time1() {
    document.write(Date());
}


//隐藏显示图片
function time2() {
    document.getElementById("imgechage").src = "img/pic_bulbon.gif";
}

function time3() {
    var img13 = document.getElementById("p1").style
    if (img13.visibility == "hidden") {
        img13.visibility = "visible";
    } else {
        img13.visibility = "hidden";
    }
}


//创建元素借点
function pp() {
    var x = document.getElementById("insert"),
        y = document.createElement("br"),
        z = document.createElement("p"),
        w = document.createTextNode("新的文本点");
    z.appendChild(w);
    x.appendChild(y);
    x.appendChild(z);
    y.id = "hehe";
}
//删除节点
function det() {
    var x = document.getElementById("insert"),
        y = document.getElementById("hehe");
    x.removeChild(y);
}

//计数器
function count() {
    var i = 0;

    function counter() {
        i++;
        alert(i);
    }
    return counter;
}

//闭包
var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function() {
        return function() {
            return this.name;
        };
    }
};
alert(object.getNameFunc()());
//闭包
var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function() {
        var that = this;
        return function() {
            return that.name;
        };
    }
};
alert(object.getNameFunc()());

function f1() {
    var n = 999;
    console.log(n);
    nAdd = function() { n += 1 }
    console.log(n);

    function f2() {
        alert(n);
    }
    return f2;
}
var result = f1();

result(); // 999
nAdd();
result(); // 1000
nAdd();
nAdd();
nAdd();
result();
result();
result();