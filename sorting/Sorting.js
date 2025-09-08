const array=[]
function sorting(){
  let x=parseInt(document.getElementById("v1").value);

  array.push(x);
   document.getElementById("res1").innerHTML= "this is array"+array;
   let ascending = array.sort(function(a,b){return a-b});
   document.getElementById("res2").innerHTML= "this is ascending"+array;
   let descending = array.sort(function(a,b){return b-a});
   document.getElementById("res3").innerHTML= "this is descending"+array;

}


