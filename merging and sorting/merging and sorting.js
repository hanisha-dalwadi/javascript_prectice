const a = [10,20,3000,40,50,];
const b =[300,500,800,900,1000];
function ms(){
    let merge1 = a.concat(b);
    let soted = merge1.sort((a,b)=>{return a-b});
       document.getElementById("res1").innerHTML = "1st array:"+a;
       document.getElementById("res2").innerHTML = "  2nd array:"+b;
       document.getElementById("res3").innerHTML = "  merging of two array:"+merge1 ;
        document.getElementById("res4").innerHTML = "sorted array:"+soted;

}