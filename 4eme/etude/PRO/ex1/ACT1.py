from PyQt5.uic import *
from PyQt5.QtWidgets import *
##############################
def changer():
    f=open("para.txt","r")
    w.lw.clear()
    ch=f.read()
    if ch=="":
        QMessageBox.critical(w,"info","F.V")
    else:
        w.lw.addItem(ch)
    f.close()
##############################
def ramp():
    f=open("para.txt","a")
    phrase=w.p.text()
    f.write(phrase+"\n")
    f.close()
##############################
def nombre():
    f=open("para.txt","r")
    s=0
    ch=f.readline()
    ch=ch[:len(ch)-1]
    while ch!="":
        s=s+1
        ch=f.readline()
        ch=ch[:len(ch)-1]
    f.close()
    w.lb.setText('nombre de phrases:'+str(s))
##############################
def clear():
    f=open("para.txt","w")
##############################    
app = QApplication([])
w=loadUi("act1.ui")
w.show()
w.b1.clicked.connect(ramp)
w.b2.clicked.connect(changer)
w.b3.clicked.connect(nombre)
w.b4.clicked.connect(clear)
app.exec_