console.log('home js Connected');

function gettime() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var time = hour + ":" + min;
    document.getElementById('dtime').innerHTML=time;
    var dd=now.getDay();
    var yy=now.getFullYear();
    var mm=now.getMonth();
    if(dd<9)
    dd="0"+dd;
    var date=dd+"-"+mm+"-"+yy;
    document.getElementById("mdate").setAttribute("min", date);
}
setInterval(gettime,1000);
const btn=document.querySelectorAll('.click');
btn.forEach((button)=>
{
        const liElement = button.closest('li');
        liElement.style.backgroundColor = 'yellow';
})