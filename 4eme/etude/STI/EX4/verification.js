function verif(){
    em = document.getElementById("EM").value;
    if (em==""){
        alert("email non vide")
        return false
    }
    if (ch.indexOf("@")<=0){
        alert("faux format")
        return false;
    }
    if (ch.indexOf("@")!=ch.lastIndexOf("@")){
       alert("faux format")
        return false;
    }
    if (ch.indexOf(".")<=ch.lastIndexOf("@")+1){
        alert("faux format")
        return false;
    }
    if(ch[ch.length-1]=="."){
        alert("faux format")
        return false;
    }
}