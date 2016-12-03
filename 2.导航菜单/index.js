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
    for (var i = 0; i < 5; i++) {

        x[i].onmouseover = (function(i) {
            return function() {
                console.log(i + "neibi");
                y[i].style.display = "block";
            }
        })(i);

        x[i].onmouseout = (function(i) {
            return function() {
                console.log(i + "neibi");
                y[i].style.display = "none";
            }
        })(i);
    }
}
//DOM事件设置菜单改写
function demo1() {
    var x = document.getElementsByClassName("menu1"),
        y = document.getElementsByClassName("menu2");
    for (var i = 0; i < 5; i++) {

        x[i].onmouseover = function(i) {
            df(i)
        };

        function df(i) {
            return function() {
                console.log(i + "neibix");
                y[i].style.display = "block";
            }
        };

        x[i].onmouseover = function(i) {
            ddf(i)
        };

        function ddf(i) {
            return function() {
                console.log(i + "neibiy");
                y[i].style.display = "none";
            }
        };
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
                y[i].style.display = "block";
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