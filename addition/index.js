function addition(){
    let a = parseInt(document.getElementById("v1").value);
     let b =parseInt (document.getElementById("v2").value);

     let c=a+b;
     console.log(c);
     document.getElementById("res").innerHTML= "addition of 2 numbers" + c;
}
function sub(){
    let a = parseInt(document.getElementById("v1").value);
     let b =parseInt (document.getElementById("v2").value);

     let c=a-b;
     console.log(c);
     document.getElementById("res").innerHTML= "addition of 2 numbers" +c;
}
function mul(){
   let a = parseInt(document.getElementById("v1").value);
     let b =parseInt (document.getElementById("v2").value);

     let c=a*b;
     console.log(c);
     document.getElementById("res").innerHTML= "addition of 2 numbers" +c;
}
function div(){
  let a = parseInt(document.getElementById("v1").value);
     let b =parseInt(document.getElementById("v2").value);

     let c=a/b;
     console.log(c);
     document.getElementById("res").innerHTML= "addition of 2 numbers" +c;
}