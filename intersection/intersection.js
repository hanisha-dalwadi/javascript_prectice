const a = [10,20,30,40,50,10,20];
const b =[10,30,50,60,800,900,1000];
function interr(){
    let i = a.filter(x=>b.includes(x));
     document.getElementById("res1").innerHTML = "1st array:"+a;
     document.getElementById("res2").innerHTML = "  2nd array:"+b;
       document.getElementById("res3").innerHTML = "  intersection of two array:"+i;
}