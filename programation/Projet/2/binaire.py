from PyQt5.uic import loadUi
from PyQt5.QtWidgets import QApplication
def control(a):
    test = True
    for i in range(len(a)):
        if (a[i]!="0" and a[i]!="1"):
            return(False)
    return test
def calc(a):
    s=0

    for i in range(len(a)):
        s=s+int(a[i])*(2**(len(a)-i-1))
    s=str(s)
    return s
def play():
        a = win.nb.text()
        if (control(a)==False):
            win.s.setText("le nombre est na pas binaire")
        else:
            win.s.setText(str(calc(a)))
app=QApplication([])
win = loadUi("binaire.ui")
win.show()
win.res.clicked.connect(play)
app.exec()