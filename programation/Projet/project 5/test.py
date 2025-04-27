from PyQt5.uic import*
from PyQt5.QtWidgets import*
import random
from numpy import*

def playexp():
    id = win.txtid.text()
    if not verifid(id):
        QMessageBox.critical(win,'erreur',"saisir votre id avec 8 chiffres")
    else:
        win.labExp.setText(generer_esxpression())
        
def verifid(id):
    if len(id)!=8:
        return False
    else:
        return True

def playres():
    win.labRes.setText("")


def generer_esxpression():
    operateurs = ['+','*','-']
    op = random.choice(operateurs)
    a = random.randint(1, 200)
    b = random.randint(1, 200)
    expression = str(a)+op+str(b)
    return expression

app=QApplication([])
win = loadUi("con.ui")
win.show()
win.btnRes.clicked.connect(playres)
win.btnExp.clicked.connect(playexp)
app.exec()