function dist(ch){
    i=0;
    v=true;
    while(i<ch.length && v){
        if(ch.indexOf(ch[i])==ch.lastIndexOf(ch[i])){
            i=i+1;
        }
        else{
            v=false;
        }
    }
    return v;
}
function prix(){
    sel = document.getElementById("sel").value ;
    prix = document.getElementById("px").value = sel ;
}

function  controle(){
    code=document.getElementById("code").value;
    if(isNaN(code)){
        alert("chiffre")
        return false;
    }
    if(code.length!=4){
        alert("4 chiffre");
        return false;
    }
    if(!dist(code)){
        alert("non distinct")
        return false;
    }
    em = document.getElementById("em").value;
    if(em==""){
        alert("email est vide")
        return false;
    }
    sel = document.getElementById("sel").selectedIndex;
    if(sel==-1){
        alert("choisir une produit")
        return false;
    }
    rd = document.getElementsByName("rd");
    if(!rd[0].checked && !rd[1].checked){
        alert("choisir une devise")
        return false;
    }
}