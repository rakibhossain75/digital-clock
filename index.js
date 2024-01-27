function mytime(){
    var mydate = new Date();
    var hr,min = (mydate.getMinutes() > 10)? mydate.getMinutes() : mydate.getMinutes() ;
    var sec = (mydate.getSeconds() < 10) ? "0"+mydate.getSeconds() : mydate.getSeconds();
    var m = (mydate.getHours() >= 12)?"PM" : "AM";

    if(mydate.getHours() == 0){
        hr=12;
    } else if (mydate.getHours() > 12){
        hr= mydate.getHours() - 12;
    } else {
        hr = mydate.getHours();
    }

    var currentHours = hr ;
    var currentMin = min;
    var currentSec = sec;

    document.getElementsByClassName("hours")[0].innerHTML = currentHours;
    document.getElementsByClassName("min")[0].innerHTML = currentMin;
    document.getElementsByClassName("sec")[0].innerHTML = currentSec;


    var myday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var mymonth = ["1","2","3","4","5","6","7","8","9","10","11","12"];

    var date = mydate.getDate();
    var year = mydate.getFullYear();

    var currentDate = mymonth[mydate.getMonth()] + "/" + date+ "/" + year;

    document.getElementsByClassName("day")[0].innerHTML = myday[mydate.getDay()];

    document.getElementsByClassName("date")[0].innerHTML = currentDate;
    document.getElementsByClassName("M")[0].innerHTML = m;
}

mytime();

setInterval(function(){
    mytime();
},1000)