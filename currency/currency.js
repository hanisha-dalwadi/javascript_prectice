function inrtousd(){
    let inr = document.getElementById("v1").value;
    let usd1 =  inr * 88;

    document.getElementById("v2").value = usd1;  
}
function usdtoinr(){
    let inrr = document.getElementById("v2").value;
    let usd =  inrr / 88;

    document.getElementById("v1").value = usd;  
}