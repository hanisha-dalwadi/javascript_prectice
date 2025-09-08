const array =[]
function map(){
    let x= document.getElementById("v1"). value;
    array.push(x);
    document.getElementById("res").innerHTML="this is array:-"+array;
     let n= array.map((x)=>x * 2);
        document.getElementById("res1").innerHTML="this is mapping:-"+n;
   


}