window.onload = function() {
        var zz = document.getElementsByTagName("input"),
            detail = document.getElementById("pp");
        zz[0].onclick = function() {
            demo();
            detail.innerHTML = zz[0].value;
        };
        zz[1].onclick = function() {
            demo1();
            detail.innerHTML = zz[1].value;
        };
        zz[2].onclick = function() {
            demo2();
            detail.innerHTML = zz[2].value;
        };

    }
    //DOM事件设置菜单
function demo() {
    var x = document.getElementsByClassName("menu1"),
        y = document.getElementsByClassName("menu2");
    for (var i = 0; i < x.length; i++) {
        x[i].onmouseover = (function(i) {
            return function() {
                y[i].style.display = "block";
                console.log("show" + i + y[i].className);
            }
        })(i);

        x[i].onmouseout = (function(i) {
            return function() {
                y[i].style.display = "none";
                console.log("hide" + i + y[i].className);
            }
        })(i);
    }
}
//DOM事件设置菜单改写
function demo1() {
    var x = document.getElementsByClassName("menu1"),
        y = document.getElementById("menu20").children;
    console.log(y.length);
    for (var i = 0; i < x.length; i++) {
        x[i].onmouseover = (function(i) {
            return function() {
                y[i].className = "menu3";
                console.log("show" + i + y[i].className);
            }
        })(i);

        x[i].onmouseout = (function(i) {
            return function() {
                y[i].className = "menu2";
                console.log("hide" + i + y[i].className);
            }
        })(i);
    }
}


//DOM监听事件设置菜单
function demo2() {
    var x = document.getElementsByClassName("menu1"),
        y = document.getElementsByClassName("menu2");
    for (var i = 0; i < 5; i++) {
        x[i].addEventListener("mouseover", show);

        function show(i) {
            console.log(i + "neibix");
            return function() {
                y[i].class = "block";
            }
        }(i);

        x[i].addEventListener("mouseout", hide);

        function hide(i) {
            console.log(i + "neibiy");
            return function() {
                y[i].style.display = "none";
            }
        }(i);
    }
}