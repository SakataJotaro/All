from PyQt5.uic import loadUi
from PyQt5.QtWidgets import QApplication
def verif(x):
    s=0
    for i in range(1,x//2+1):
        if (x % i) == 0:
            s=s+i
    return s
def amis():
    a =int (win.a.text())
    b =int (win.b.text())
    if (a<0 or b<0):
        win.s.setText("verefier votre nombres")
    elif (verif(a)==b and verif(b)==a):
        win.s.setText("oui ils sont amis")
    else :
        win.s.setText("non ils ne sont pas amis")
app=QApplication([])
win = loadUi("amis.ui")
win.show()
win.res.clicked.connect(amis())
app.exec()