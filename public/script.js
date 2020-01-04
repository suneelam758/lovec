function res(){
    if(document.getElementById("in1").value!=""){
        const m= Math.floor(Math.random() * 100);
        document.getElementById("in3").innerHTML=m+"%";
        document.getElementById("zz").style.display="block";
        document.getElementById("im1").style.display="block";
        document.getElementById("im2").style.display="none";
    }
    else{
        alert("please fill the input");
    }
}