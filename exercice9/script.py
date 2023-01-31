etage = 4


def sapin(n):
    if n != 0:
        print(n*' '+((etage-n)*2+1)*'*')
        sapin(n-1)
    else:
        print(etage*' ')


sapin(etage)
