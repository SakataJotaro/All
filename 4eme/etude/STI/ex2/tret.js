function ver2(){
    tl=document.getElementById("tel").value;
    date=document.getElementById("dat").value;
    if (tl.length!=8 ){
        alert("long 8")
        return false;
    }
    if (isNaN(tl)){
        alert("number")
        return false;
    }
    if (date.length!=10){
        alert("faux format de date")
        return false;
    }
    if (date[4] && date[7] !="-"){
        alert("faux format de date")
        return false;
    }

        
}