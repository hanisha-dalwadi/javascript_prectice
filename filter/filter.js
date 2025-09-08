const array = []
const even =[]
const odd =[]
function filter(){
    let x = parseInt(document.getElementById("v1").value);

    array.push(x);
    document.getElementById("res1").innerHTML= "this is array:-"+array;
    let even = array.filter((x)=>x%2==0)
    document.getElementById("res2").innerHTML= "this is even numbers:-"+even;
    let odd = array.filter((x)=>x%2!==0)
    document.getElementById("res3").innerHTML= "this is odd number:-"+odd;

}