function verif(){
    p=document.getElementById("p").value;
    s=document.getElementById("s").selectedIndex;
    c=document.getElementById("c").value;
        if (p.length!=4)
    {
        alert("long4");
        return false;
    }   
        if (p[0]<"A" || p[0]>"Z")
    {
        alert("commance par Majus");
        return false;
    }   
    if (p[1]<="0" || p[1]>="9")
    {
        alert("trois chiffre");
        return false;
    }  
        if (p[2]<="0" || p[2]>="9")
    {
        alert("trois chiffre");
        return false;
    }    
        if (s<=0)
    {
        alert("Sujet obj");
        return false;
    }   
    if (c==""){
        alert("commantaire obligatoire")
        return false;
    }
    if(c.indexOf("  ")!=-1){
        alert("ilya deux espaces")
        return false;
    }
    if(c[0]==(" ")){
        alert("commance par espace")
        return false;
    }   
    if(c[c.length-1]!="."){
        alert('ne terrmine pas par .')
        return false;
    }
}
