// var but = document.getElementsByClassName('cont').innerHtml;
// console.log(but);

// but.onClick = function(){
//     but.innerHtml = "Ahmef";
// };
// var cont = 0;
var con=document.getElementById('cont');
//console.log(parseInt(con)+1);

// con.addEventListener('click',function(){
//     con.innerHTML = (parseInt(con.textContent))+1;
// });
con.onclick = function(){
    con.innerHTML = (parseInt(con.textContent))+1;
};

var currentTime= new Date().getTime();
var endTime = currentTime + 3 * 60 * 60 * 1000;

let count = setInterval(()=>{
    currentTime= new Date().getTime();
    
    var curret =(endTime - currentTime);
    var modhour = curret % (1000*60*60);
    var hour = Math.floor(curret / (1000*60*60));

    var modmin = modhour % (1000*60);
    var min = Math.floor(modhour / (1000*60));

    var sec = Math.floor(modmin / 1000);
       
    console.log(hour);
    console.log(min);
    console.log(sec);    

    document.getElementsByClassName('hours')[0].innerHTML = hour;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

    if(curret <= 0){
        clearInterval(count);
    };

},1000);
//console.log(time);


