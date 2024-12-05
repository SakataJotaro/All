from numpy import array
def saisie():
    n=int(input("n="))
    while not (2<=n<=20):
        n=int(input("n="))
    return n
def ramp(t,n):
    for i in range (n):
        t[i].num=int(input("num"+str(i)+"="))
        t[i].nom=input("nom"+str(i)+"=")
        t[i].prenom=input("prenom"+str(i)+"=")
        t[i].date_n=input("date_n"+str(i)+"=")
        t[i].poid=float(input("poid"+str(i)+"="))
        t[i].role=int(input("role"+str(i)+"="))
def aff(n,t):
    xp=int(input("donner le numéro rechercher :"))
    v=False
    i=0
    while(i<n and v==False):
        if t[i].num==xp:
            v=True
        else:
            i=i+1
    if v==True :
        print(t[i].num)
        print(t[i].nom)
        print(t[i].prenom)
        print(t[i].date_n)
        print(t[i].poid)
        print(t[i].role)
def recherche (n,t):
    maxi=t[0].poid
    for i in range(n):
        if t[i].poid>maxi:
            
n=saisie()
prenom=str
t=array([int()]*n)
ramp(t,n)
afficher(t,n)