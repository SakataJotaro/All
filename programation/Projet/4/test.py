from PyQt5.uic import loadUi
from PyQt5.QtWidgets import QApplication

def play():
    x = int(win.a.text())
    y = int(win.b.text())
    if not (2<=x<=50)or(2<=y<=50):
        win.res.setText('refus')
    else:
        win.res.setText(remplisage(x,y))
#PP
def remplisage(x,y):
    Ta = array([int]*x)
    Tb = array([int]*y)
    Ta[0]=randint(0,1000)
    for i in range(1,x):
        Ta[i]=randint(0,1000)
        while not (Ta[i]>=Ta[i-1]):
            Ta[i]=randint(0,1000)
    Tb[0]=randint(0,1000)
    for i in range(1,y):
        Tb[i]=randint(0,1000)
        while not (Tb[i]>=Tb[i-1]):
            Tb[i]=randint(0,1000)
    TR=array([int]*(x+y))
    i=0
    j=0
    k=0
    while (i<x) and (j<y):
        if (Ta[i]<Tb[j]):
            TR[k]=Ta[i]
            i=i+1
        else:
            TR[k]=Tb[j]
            j=j+1
        k=k+1
    while()
app=QApplication([])
win = loadUi("win.ui")
win.show()
win.crypter.clicked.connect(play)
app.exec()
