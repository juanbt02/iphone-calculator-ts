def altura_piramide(bloques):
    nivel = 1
    while bloques > 0:
        bloques -= (2*nivel - 1)**2
        nivel += 1
    if bloques == 0:
        return nivel - 1
    else:
        return nivel - 2

if __name__ == "__main__": 

    while True:
        bloques = int(input())
        if bloques == 0:
            break
        print(altura_piramide(bloques))