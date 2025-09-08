function prime(){
    let x= parseInt(document.getElementById("v1").value);
    let flag=true;
    if(x<2){
        flag=false;
    }
    else{
    for(let i=2;i<=Math.sqrt(x);i++)
    {
        if(x%i==0)
        {
            flag=false;
            break;
        }
    }
}
    if(flag)
    {
        document.getElementById("res").innerHTML= x +"number is a prime number";
    }
    else{
        document.getElementById("res").innerHTML= x +"number is not  a prime number";
    }
    
}