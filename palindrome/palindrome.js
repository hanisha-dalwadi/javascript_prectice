function palindrome(){
    let name = document.getElementById("v1").value;
    let rev = name.split("").reverse("").join("");
    if(name==rev)
    {
        document.getElementById("res").innerHTML="this is a palindrome";

    }
    else{
         document.getElementById("res").innerHTML="this is  not a palindrome";
    }
}