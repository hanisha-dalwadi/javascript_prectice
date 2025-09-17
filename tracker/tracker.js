function bt(){
    let name = document.getElementById("n1").value;
     let amount = document.getElementById("a1").value;
     let type;
     if(amount<0){
        type="expence";
     }
     else{
        type ="income";
     }
     let transaction = JSON.parse(sessionStorage.getItem("items"));
     if(transaction == null){
        transaction = [];
     }
      transaction.push({
            name:name,
            amount:amount,
            type:type
      });
      sessionStorage.setItem("items",JSON.stringify(transaction))

      let sum =0
      let income = 0
      let expence = 0

      transaction.forEach(x=> {
        sum +=parseInt(x.amount)
        if(x.type=="income"){
            income +=parseInt(x.amount)
        }
        else{
            expence +=parseInt(x.amount)
        }
      });

      document.getElementById("w1").innerHTML= +sum;
        document.getElementById("w11").innerHTML= +income;
          document.getElementById("e11").innerHTML= +expence;

    
}