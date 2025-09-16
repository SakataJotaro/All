function alpha(ch){
    ch = ch.toUpperCase();
    i=0;
    v=true;
    while (i<ch.length && v)
    {
        if (ch[i]<"A" || ch[i]>"Z")
            v=false;
        else 
            i=i+1;
    }
    return v;
    
}
function verif1(){
    nm=document.getElementById("nm").value;
    prnm=document.getElementById("prnm").value;
    tel=document.getElementById("tl").value;
    ta=document.getElementById("ta").value;
    ps1=document.getElementById("ps1").value;
    ps2=document.getElementById("ps2").value;
    if (nm.length<3){
        alert("votre nom est < 3 ")
        return false;
    }
    if (!alpha(mn)){
        alert("nom va etre alphabetique")
        return false;
    }
    if (prnm.length<3){
        alert("votre prenom est < 3 ")
        return false;
    }
    if (!alpha(prnm)){
        alert("prenom va etre alphabetique")
        return false;
    }
    if (tel.length!=8){
        alert("longneur = 8")
        return false;
    }
    if (tel[0]!="1"){
        alert("le premire nombre va etre = 1")
        return false;
    }
    if (ta.length<10){
        alert("")
        return false;
    }
    if (ps.length!=6){
        alert("motpasse long = 6")
        return false;
    }
    if (ps1.indexOf(" ")!=-1){
        alert("ne contient pas les espaces")
        return false;
    }
    if (ps2!=ps1){
        alert("les mot de pass na pas identiques")
        return false;
    }
}
