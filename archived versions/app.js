
   
//GLOBAL VARIABLES 

    //NUMBER OF DICE
var numberOfDice = 2;    

    //THE DICE BOX
var diceBox = document.getElementById("dice-box");

    //DICE 
var dice1, dice2, dice3, dice4, dice5, dice6, dice7, dice8;
dice1 = document.getElementById("dice1");
dice2 = document.getElementById("dice2");
//remaining dice are demined in add dice.// IT IS PROBABLY BEST TO RETURN THE ABOVE ASSINGMENTS TO HAPPEN WHEN YOU ROLL DICE. 

//FUNCTIONS 

    //START FUNCTION ROLL DICE
function rollDice () {
    //IF THERE ARE TWO DICE IN THE BOX
    if (numberOfDice >= 2) {
        var magicNumberOne, magicNumberTwo;
        magicNumberOne = Math.floor((Math.random() * 6) + 1);
        magicNumberTwo = Math.floor((Math.random() * 6) + 1);
        console.log(magicNumberOne, magicNumberTwo);
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
    if (numberOfDice >= 3) {
        var magicNumberThree;
        magicNumberThree = Math.floor((Math.random() * 6) + 1);
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
    if (numberOfDice >= 4) {
        var magicNumberFour;
        magicNumberFour = Math.floor((Math.random() * 6) + 1);
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

    //IF THEREA ARE FIVE DICE IN THE BOX
    if (numberOfDice >= 5) {
        var magicNumberFive;
        var magicNumberFive = Math.floor((Math.random() * 6) + 1);
        console.log(magicNumberFive);
        //DICE FIVE
        if (magicNumberFour == 1) {
            dice5.src = "images/faceone.png";
        } else if (magicNumberFive == 2) {
            dice5.src = "images/facetwo.png";
        } else if (magicNumberFive == 3) {
            dice5.src = "images/facethree.png";
        } else if (magicNumberFive == 4) {
            dice5.src = "images/facefour.png";
        } else if (magicNumberFive == 5) {
            dice5.src = "images/facefive.png";
        } else if (magicNumberFive == 6) {
            dice5.src = "images/facesix.png";
        }   
    }

    //IF THERE ARE SIX DICE IN THE BOX 
    if (numberOfDice >= 6) {
        var magicNumberSix;
        magicNumberSix = Math.floor((Math.Random * 6) + 1);
        console.log(magicNumberSix);
        //DICE SIX
        if (magicNumberSix == 1) {
            dice6.src = "images/faceone.png";
        } else if (magicNumberSix == 2) {
            dice6.src = "images/facetwo.png";
        } else if (magicNumberSix == 3) {
            dice6.src = "images/facethree.png";
        } else if (magicNumberSix == 4) {
            dice6.src = "images/facefour.png";
        } else if (magicNumberSix == 5) {
            dice6.src = "images/facefive.png";
        } else if (magicNumberSix == 6) {
            dice6.src = "images/facesix.png";
        }   
    }
}
//end function roll Dice

//START FUNCTION ADD DICE 
var addedDice;
addedDice = 0;
function addDice () {
    if (addedDice <= 2) {
        numberOfDice++;
        var newDice = document.createElement("img");
        newDice.id = "dice" + (addedDice + 3);
        newDice.src = "images/faceone.png";
        diceBox.appendChild(newDice);
        console.log(newDice.id + " has been added.");
        addedDice++;
        dice3 = document.getElementById("dice3");
        dice4 = document.getElementById("dice4");
        dice5 = document.getElementById("dice5");
        
        
    }

    if (addedDice >= 3 && numberOfDice < 5) {
        if (numberOfDice == 0) {
            dice1.style.display =  "block";
            console.log("dice1 is now showing")
        }
        if (numberOfDice == 1) {
            dice2.style.display =  "block";
            console.log("dice2 is now showing")
        }
        if (numberOfDice == 2) {
            dice3.style.display =  "block";
            console.log("dice3 is now showing")
        }
        if (numberOfDice == 3) {
            dice4.style.display =  "block";
            console.log("dice4 is now showing")
        }
        if (numberOfDice == 4) {
            dice5.style.display =  "block";
            console.log("dice5 is now showing")
        }
        numberOfDice++;
    }


    console.log("you have added a total of " + addedDice + " dice.")
    console.log("the numberofdice is " + numberOfDice)
       
}
//end function add dice 

//START FUNCTION SUBTRACT DICE WHICH HIDES THE DICE.
    function subtractDice() {
        if (numberOfDice > 0) {
            if (numberOfDice == 5) {
                dice5.style.display = "none";
                console.log("dice5 has been hidden")
            }
            if (numberOfDice == 4) {
                dice4.style.display = "none";
                console.log("dice4 has been hidden")
            }
            if (numberOfDice == 3) {
                dice3.style.display = "none";
                console.log("dice3 has been hidden")
            }
            if (numberOfDice == 2) {
                dice2.style.display = "none";
                console.log("dice2 has been hidden")
            }
            if (numberOfDice == 1) {
                dice1.style.display = "none";
                console.log("dice1 has been hidden")
            }
            numberOfDice--;
            console.log("the dicenumber is " + numberOfDice);
        }
    }







        
//TOMORROW ADD THE FEATURE THAT LETS YOU CALCULATE YOUR ROLL. THEN ADD MORE DICE,
//AND MAKE IT SO YOU CAN ADD AND SUBTRACT 