function Fibonacci(){
    let num=document.getElementById("v1").value;
    let a=0;
    let b=1;
    let c;
    let seq=[0,1];
    for(let i=2;i<num;i++)
    {
        c=a+b;
        seq.push(c);
        a = b;
        b = c;
        
    }
    document.getElementById("res").innerHTML=" this is Fibonacci series" +seq;

}