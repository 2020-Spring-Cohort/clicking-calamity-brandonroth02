    var cookiecount = 0;
    
    document.title = cookiecalamity + " Cookies";
    document.getElementById('ammountAutoClick').innerText = "You have" + autoClick + "Auto Click Cursors";
    document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 12) + " Cookies";

function add(){
    cookiecount = cookiecount +1
    document.getElementById("text").value = cookiecount;
    document.title = cookiecalamity + " Cookies";
}







