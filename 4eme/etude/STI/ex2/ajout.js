function verif(){
    tl=document.getElementById("tel").value;
    s=document.getElementById("cat").selectedIndex;
    c=document.getElementById("a").value;
    if (tl.length!=8 ){
        alert("long 8")
        return false;
    }
    if (isNaN(tl)){
        alert("nombre ")
        return false;
    }
    if (s<=0){
        alert("categorie obligatoir");
        return false;
    }
    if (s==4)
    {
        if (c==""){
            alert("commantaire obligatoire")
            return false;
        }
    }   
}