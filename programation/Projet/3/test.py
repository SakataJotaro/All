from PyQt5.uic import loadUi
from PyQt5.QtWidgets import QApplication

def play():
    x = win.ch.text()
    if verif(x):
        c = crypter(x)
        win.res.setText(c)
    else:
        win.res.setText("uncryptable")
def verif(x):
    test = True
    if ((len(x)>20)or(len(x)<=5)):
        test=False
    for i in range(len(x)):
        if not (x[i]<="Z" and x[i]>="A"):
            test = False
    return(test)
def crypter(x):
    ch=""
    for i in range(len(x)):
        ch=ch+chr((ord(x[i])%10)*10+(ord(x[i])//10))
    return(ch)
app=QApplication([])
win = loadUi("win.ui")
win.show()
win.crypter.clicked.connect(play)
app.exec()
