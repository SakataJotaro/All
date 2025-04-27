from PyQt5.uic import loadUi
from PyQt5.QtWidgets import QApplication
verif():
    

app=QApplication([])
windows = loadUi("amis.ui")
windows.show()
windows.res.clicked.connect(verif())
app.exec_()