let myRandom = Math.floor(Math.random() * 10 + 1);

        let guess = 1;
 
        document.getElementById("submitguess").onclick = function () {
   
            let myNum = document.getElementById("guessField").value;
 
            if (myNum == myRandom) {
                alert("nice one! you got it in" + " " + guess + " " + "guess");
            }
            else if (myNum > myRandom) {
                guess++;
                alert("To High");
            }
            else {
                guess++;
                alert("To Small")
            }
        }