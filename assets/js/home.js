console.log('home js Connected');

function gettime() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    if (hour<=9)
    hour='0'+hour;
    if(min<=9)
    min='0'+min;
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
        liElement.classList.add('checked');
})
const trimdate=document.querySelectorAll('#writebox2');
for(let i of trimdate)
{
    let s="*"+i.innerHTML+"*";
     s = s.replace(/\s/g, "");
 s=s.slice(6,11)
 i.innerHTML=s;
}
const p1= document.querySelectorAll('.Work');
for (let i of p1) {
    i.style.backgroundImage = "url('../images/work.jpeg')";
}
const p3 = document.querySelectorAll('.House');
for (let i of p3) {
    i.style.backgroundImage = "url('../images/house.jpeg')"
}
const p4 = document.querySelectorAll('.Others');
for (let i of p4) {
    i.style.backgroundImage = `url('../images/other.jpeg')`
}

