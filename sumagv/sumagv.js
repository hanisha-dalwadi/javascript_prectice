const a = [];
function aa(){
    let x = document.getElementById("v1").value;
    a.push(x);
    let sum = 0;
    for(let i = 0 ; i<a.length; i++)
    {
        sum +=parseInt(a[i]);

    }
      document.getElementById("res1").innerHTML = "sum of array:"+sum;
    let avg = sum/a.length;
    document.getElementById("res2").innerHTML = "avg of array:"+avg;
    
}
