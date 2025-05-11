from PyQt5.uic import loadUi
from PyQt5.QtWidgets import QApplication
def play():
    N = windows.a.text()
    M = windows.b.text()
    if not (200 <= int(N) and int(N)<= 999999 and 3 <= int(M) and int(M)<= 10):
        msg = 'please make 200<=N and N<= 999999 and 3 <= M and M<= 10'
        windows.Print2.setText(msg)
    else:
        msg1 = "la transformation de" + N + " et les " + M + "entiers suivants : "
        msg2 = chercher(N,M)
        windows.Print1.setText(msg1)
        windows.Print2.setText(msg2)
def puissance(a,b):
    P=1
    for k in range (1,b+1):
        P=P*a
    return P
def transformation(i):
    X = str(i)
    T = len(X)
    P=1
    j=0
    if T%2==0:
        j=0
        while not j==T:
            P= P * puissance(int(X[j]), int(X[j+1]))
            j=j+2
    if T%2==1:
        j=0
        X=X+'1'
        while not j==T:
            P= P * puissance(int(X[j]), int(X[j+1]))
            j=j+2
    return str(P)
def chercher(N,M):
    res = ""
    for i in range(int(N),int(N)+int(M)+1):
        if (len(res)==0):
            res = transformation(i)
        else:
            res = res + transformation(i)
    return res
app = QApplication([])
windows = loadUi("InterfacePowertrain.ui")
windows.show()
windows.Transform.clicked.connect(play)
app.exec_()