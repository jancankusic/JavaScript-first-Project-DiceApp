
var body, diceBox, dice1, dice2, addButton, subtractButton;
var rollNumber, rollNumberBox;

//HTML STUFF 
//CREATE DICEBOX 
diceBox = document.createElement("div");
diceBox.id = "dice-box";
document.body.appendChild(diceBox);
diceBox.setAttribute("onclick","rollDice()");


//CREATE DICE1 AND DICE 2
dice1 = document.createElement("img");
dice1.id = "dice1";
diceBox.appendChild(dice1);
dice1.src = "images/faceone.png"

dice2 = document.createElement("img");
dice2.id = "dice2";
diceBox.appendChild(dice2);
dice2.src = "images/faceone.png"
//end dice1 and dice2

//CREATE ADD AND SUBTRACT BUTTONS
addButton = document.createElement("button");
addButton.id = "add-button";
document.body.appendChild(addButton);
addButton.innerHTML = "Add Dice";
addButton.setAttribute("onclick","addDice()");

subtractButton = document.createElement("button");
subtractButton.id = "subtract-button";
document.body.appendChild(subtractButton);
subtractButton.innerHTML = "Subtract Dice";
subtractButton.setAttribute("onclick","subtractDice()");

//CREATE ROLL NUMBER BOX 
rollNumberBox = document.createElement("div");
rollNumberBox.id = "roll-number-box";
document.body.appendChild(rollNumberBox);
//endhtml stuff

//CSS STUFF
diceBox.style.cssText = ("width:30%; margin:auto; height:50vh;");
rollNumberBox.style.cssText = ("margin:auto; text-align:center; width:5rem; font-size:4rem; padding:2rem; margin-top:100px;");
addButton.style.cssText = ("position:absolute; background-color:rgba(20, 20, 20, 0.2); border-radius:100%; padding:30px; font-size:2rem; top:45%; left:10%;");
subtractButton.style.cssText = ("position:absolute; background-color:rgba(20, 20, 20, 0.2); border-radius:100%; padding:30px; font-size:2rem; top:45%; right:10%;");






//FUNCTIONS 
//DICE ADDITION AND SUBTRACTION FUNCTIONS 
diceNumber = 2;
    //START Add Dice
function addDice () {
    if (diceNumber <= 3) {
        if (hiddenDice <= 0) {
            diceNumber++;
            var newDice
            var newDice = document.createElement("img");
            newDice.id = "dice" + diceNumber;
            diceBox.appendChild(newDice);
            newDice.src = "images/faceone.png";


            dice1 = document.getElementById("dice1")
            dice2 = document.getElementById("dice2")
            dice3 = document.getElementById("dice3")
            dice4 = document.getElementById("dice4")
        }

        if (hiddenDice > 0) {
            if (diceNumber == 0) {
                dice1.style.display = "inline-block";
            }
            if (diceNumber == 1) {
                dice2.style.display = "inline-block";
            }
            if (diceNumber == 2) {
                dice3.style.display = "inline-block";
            }
            if (diceNumber == 3) {
                dice4.style.display = "inline-block";
            }
            diceNumber++;
            hiddenDice--;
            
        }
        console.log("dicenumber is " + diceNumber)
        console.log("hiddendice is " + hiddenDice)
   }
}

var hiddenDice;
hiddenDice = 0;
function subtractDice () {
    if (diceNumber >= 1) {
        if (diceNumber == 1) {
            dice1.style.display = "none";
        }
        if (diceNumber == 2)  {
            dice2.style.display = "none";
        }

        if (diceNumber == 3) {
            dice3.style.display = "none";
        }

        if (diceNumber == 4) {
            dice4.style.display = "none";
        }

        diceNumber--;
        hiddenDice++;
    }
    console.log("dicenumber is " + diceNumber)
    console.log("hiddendice is " + hiddenDice)
}
console.log("dicenumber is " + diceNumber)
console.log("hiddendice is " + hiddenDice)
//end dice addition and subtraction functions 


//START DICE ROLLING FUNCTIONS. 
var rollNumber
function rollDice () {
    //IF THERE IS ONE DICE IN THE BOX
    if (diceNumber >= 1) {
        var magicNumberOne;
        magicNumberOne = Math.floor((Math.random() * 6) + 1);
        rollNumber = magicNumberOne;
        console.log("Dice Roll Start");
        console.log(magicNumberOne);
        //DICE ONE
        if (magicNumberOne == 1) {
            dice1.src = "images/faceone.png";
        } else if (magicNumberOne == 2) {
            dice1.src = "images/facetwo.png";
        } else if (magicNumberOne == 3) {
            dice1.src = "images/facethree.png";
        } else if (magicNumberOne == 4) {
            dice1.src = "images/facefour.png";
        } else if (magicNumberOne == 5) {
            dice1.src = "images/facefive.png";
        } else if (magicNumberOne == 6) {
            dice1.src = "images/facesix.png";
        }
        
    }

    //IF THERE ARE TWO DICE IN THE BOX
    if (diceNumber >= 2) {
        var magicNumberTwo;
        magicNumberTwo = Math.floor((Math.random() * 6) + 1);
        rollNumber = magicNumberOne + magicNumberTwo;
        console.log(magicNumberTwo);
        //DICE TWO
        if (magicNumberTwo == 1) {
            dice2.src = "images/faceone.png";
        } else if (magicNumberTwo == 2) {
            dice2.src = "images/facetwo.png";
        } else if (magicNumberTwo == 3) {
            dice2.src = "images/facethree.png";
        } else if (magicNumberTwo == 4) {
            dice2.src = "images/facefour.png";
        } else if (magicNumberTwo == 5) {
            dice2.src = "images/facefive.png";
        } else if (magicNumberTwo == 6) {
            dice2.src = "images/facesix.png";
        }
    }

    //IF THERE ARE THREE DICE IN THE BOX 
    if (diceNumber >= 3) {
        var magicNumberThree;
        magicNumberThree = Math.floor((Math.random() * 6) + 1);
        rollNumber = magicNumberOne + magicNumberTwo + magicNumberThree;
        console.log(magicNumberThree);
        
        //DICE THREE
        if (magicNumberThree == 1) {
            dice3.src = "images/faceone.png";
        } else if (magicNumberThree == 2) {
            dice3.src = "images/facetwo.png";
        } else if (magicNumberThree == 3) {
            dice3.src = "images/facethree.png";
        } else if (magicNumberThree == 4) {
            dice3.src = "images/facefour.png";
        } else if (magicNumberThree == 5) {
            dice3.src = "images/facefive.png";
        } else if (magicNumberThree == 6) {
            dice3.src = "images/facesix.png";
        }
    }

    //IF THERE ARE FOUR DICE IN THE BOX
    if (diceNumber >= 4) {
        var magicNumberFour;
        magicNumberFour = Math.floor((Math.random() * 6) + 1);
        rollNumber = magicNumberOne + magicNumberTwo + magicNumberThree + magicNumberFour;
        console.log(magicNumberFour);
        //DICE FOUR 
        if (magicNumberFour == 1) {
            dice4.src = "images/faceone.png";
        } else if (magicNumberFour == 2) {
            dice4.src = "images/facetwo.png";
        } else if (magicNumberFour == 3) {
            dice4.src = "images/facethree.png";
        } else if (magicNumberFour == 4) {
            dice4.src = "images/facefour.png";
        } else if (magicNumberFour == 5) {
            dice4.src = "images/facefive.png";
        } else if (magicNumberFour == 6) {
            dice4.src = "images/facesix.png";
        }      
    }
     //SHOW ROLL NUMBER
     console.log("Rollnumber is ",  rollNumber);
     rollNumberBox.innerHTML = rollNumber; 
     rollNumberBox.style.cssText = ("border-width:2px; border-color:white; border-style:solid; font-size:6rem; width:8%; text-align:center; margin:auto; margin-top:180px;")
}

//COLOR FUNCTION 
colorNumber = 0;
function changeColor () {
    color = document.getElementById("body");
    if (colorNumber <= 0) {
        color.style.backgroundColor = "red";
        colorNumber++;
    } else if (colorNumber <= 1) {
        color.style.backgroundColor = "green";
        colorNumber ++;
    } else if (colorNumber <= 2) {
        color.style.backgroundColor = "yellow";
        colorNumber ++;
    } else if (colorNumber <= 3) {
        color.style.backgroundColor = "turquoise";
        colorNumber ++;
    } else if (colorNumber <= 4) {
        color.style.backgroundColor = "pink";
        colorNumber ++;
    } else if (colorNumber <= 5) {
        color.style.backgroundColor = "chartreuse";
        colorNumber ++;
    } else {
        color.style.backgroundColor = "blue";
        colorNumber = 0;
    }
}