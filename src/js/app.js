var cookiecount = 0;
    
    
   function cookieClick(number){
    cookiecount = cookiecount + number;
    document.getElementById("cookiecount").innerHTML = cookiecount;
    
}

var autoClickers = 0;

function buyAutoClicker() {
    var autoClickerCost = Math.floor(10 * Math.pow(1.1,autoClickers));
    if(cookiecount >= autoClickerCost){
        autoClickers = autoClickers +1;
        cookiecount = cookiecount - autoClickerCost;
        document.getElementById('autoClickers').innerHTML = autoClickers;
        document.getElementById('cookiecount').innerHTML = cookiecount;

    }
    var nextCost = Math.floor(10 * Math.pow(1.1,autoClickers));
    document.getElementById('autoClickerCost').innerHTML = nextCost;
}

var robots = 0;

function buyRobots(){
    var robotCost = Math.floor(100 * Math.pow(1.1,robots));
    if(cookiecount >= robotCost){
        robots = robots + 10;
        cookiecount = cookiecount - robotCost;
        document.getElementById('robots').innerHTML = robots;
        document.getElementById('cookiecount').innerHTML = cookiecount;
    }
    var nextCost = Math.floor(100 * Math.pow(1.1,robots));
    document.getElementById('robotCost').innerHTML = nextCost;
}

window.setInterval(function(){
    cookieClick(autoClickers);
    cookieClick(robots);
}, 1000);







