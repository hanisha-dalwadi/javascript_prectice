const arr1 = [];

function dub(){
    let x = document.getElementById("v1").value;
    arr1.push(x);
    let remove = [...new Set(arr1)];
     document.getElementById("res1").innerHTML = "og  array:"+arr1;
     document.getElementById("res2").innerHTML = " array:"+remove;
}