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

//函数调用方法
// 作为函数调用
<<
<< << < HEAD

function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2); // myFunction(10, 2) 返回 20

function myFunction(a, b) {
    return a * b;
}
window.myFunction(10, 2); // window.myFunction(10, 2) 返回 20
// 作为全局对象调用
function myFunction() {
    return this;
}
myFunction(); // 返回 window 对象
// 作为方法调用
var myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName(); // 返回 "John Doe"
var myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this;
    }
}
myObject.fullName(); // 返回 [object Object] (所有者对象)
// 使用构造函数调用
// 构造函数:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

// This	creates a new object
var x = new myFunction("John", "Doe");
x.firstName; // 返回 "John"

===
=== =
// 作为全局对象调用
// 作为方法调用
// 使用构造函数调用
>>>
>>> > b4e1989df0cb12441b9e3716901ccc72410b46a0
//使用函数方法调用函数
function myFunction(a, b) {
    return a * b;
}
//apply方法调用函数
myArry = [10, 2];
myFunction.apply(myobject, myArry);
//call方法调用函数
myFunction, call(myobject, 10, 2);

//全选
windows.onload = function() {

    var listall = document.getElementById("list1");
    var all1 = listall.getElementsByTagName("input");
    all1[0].onclick = function() {

            for (var i = 1; i < all1.length; i++) {
                if (all1[0].onclick = "all1[0].checked=true") {
                    all1[i].checked = false;
                } else {
                    all1[0].checked = true;
                    all1[i].checked = true;
                }
            }
        } <<
        << << < HEAD
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