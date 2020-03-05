
var cookiecount = 0;
function add(){
    cookiecount = cookiecount +1
    document.getElementById('text').value = cookiecount;
    document.title = cookiecalamity + " Cookies";
}

function update(){}

var cookiecount = 0;
var autoClick = 0;

function timer(){
    cookiecount = cookiecount + autoClick;
    update()
}
setInterval(timer, 1000)