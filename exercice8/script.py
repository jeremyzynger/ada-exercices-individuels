colors = ['Red', 'Blue', 'Green', 'Yellow']


def choiceOfTheColor():
    color = input("Choose a color: ")
    print('color : ', color)
    if color not in colors:
        print("This color is not valid")
        color = choiceOfTheColor()
    return color


firstColor = choiceOfTheColor()
secondColor = choiceOfTheColor()
colorsPlayer1 = [firstColor, secondColor]

print(">>>>>>>>>>>>>>Player 2 ready to play ?")


def player2():
    firstColorPlayer2 = choiceOfTheColor()
    secondColorPlayer2 = choiceOfTheColor()
    x = [firstColorPlayer2, secondColorPlayer2]
    return x


colorsPlayer2 = player2()


# Ce code ne fonctionne pas avec plusieurs fois la même couleur
numOfGoodColors = 0
for i in colorsPlayer1:
    if i in colorsPlayer2:
        numOfGoodColors += 1
#print('Num of good colors : ', numOfGoodColors)

realNumOfGoodColors = 0
realNumOfOkPlacedColors = 0
for i in range(len(colorsPlayer1)):
    for j in range(len(colorsPlayer2)):
        if colorsPlayer1[i] == colorsPlayer2[j]:
            if i == j:
                realNumOfOkPlacedColors += 1
            else:
                realNumOfGoodColors += 1


print('good colors = ', realNumOfGoodColors)
print('good placed colors = ', realNumOfOkPlacedColors)


numOfOkPlacedColors = 0
for i in range(len(colorsPlayer1)):
    if colorsPlayer1[i] == colorsPlayer2[i]:
        numOfOkPlacedColors += 1

#print('Num of good placed colors : ', numOfOkPlacedColors)

while colorsPlayer2 != colorsPlayer1:
    colorsPlayer2 = player2()
    print('good colors = ', realNumOfGoodColors)
    print('good placed colors = ', realNumOfOkPlacedColors)

print("Bravo")
