
function change()
{

    var red=document.querySelector("#red").value;
    var green=document.querySelector("#green").value;
    var blue=document.querySelector("#blue").value;
    
   
    console.log(" "+red+blue+green)
   

    var c="rgb("+red+","+green+","+blue+")";
    document.querySelector("#gno").innerHTML=green
    
    document.querySelector("#bno").innerHTML=blue

    document.querySelector("#rno").innerHTML=red


    document.querySelector(".colors").style.background=c
    document.querySelector(".colors").innerHTML=c

}