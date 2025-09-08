const array=[]
function sl(){
  let x=parseInt(document.getElementById("v1").value);

  array.push(x);
   document.getElementById("res1").innerHTML= "this is array"+array;
    let ascending = array.sort(function(a,b){return a-b});
    let small=ascending[0];
     document.getElementById("res2").innerHTML= "this is smallest"+small;
    let large=ascending[ascending.length-1];
    document.getElementById("res3").innerHTML= "this is largest"+large;

}