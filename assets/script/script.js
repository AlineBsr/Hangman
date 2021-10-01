let wordH = document.getElementById("wordH");       // box mot caché
let letters = document.getElementById("letters");   // box btn/alpha
let countTxt = document.getElementById("count");    // box count
let words = ["apple", "cat", "woods", "music", "television", "dog", "coffee", "beer", "flower"];
let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
for (let i = 0; i < alpha.length; i++) { letters.innerHTML += "<button id= btn" + (i + 1) + " value=\"" + (i + 1) + "\">" + alpha[i] + "</button>" } // genere les boutons

let wordToDevine = words[Math.floor(Math.random() * words.length)];                                      // init du mot à deviner
wordH.innerHTML += wordToDevine.replace(RegExp("([a-z])", "g"), "_ ");                                   // ajout des _ en fonction du mot
let continueGame = 1;                                                                                    // continueGame = true  
let lettersGuess = "";                                                                                   // recup les lettres deja trouvées pour la regex
let count = 0;                                                                                           // compte le nombre de raté                                                                                       
let res ="";                                                                                             // test pour récup l'input ... pas fini
let kbd = document.getElementById("inputKbd");

for (let i = 0; i < letters.children.length; i++) {                                                      // pour ch elem boutons
    const btn = letters.children[i];                                                                     // stocke l'ind du bouton 
    const btnLetter = btn.textContent;                                                                   // stocke la lettre du bouton
    btn.addEventListener("click", function () {                                                          // ...Attente d'un clic sur un bouton lettre

        if ((document.getElementById("btn" + (i + 1)).getAttribute("find")) === "1") { alert("letter already found!") }         // SI la lettre n'a pas déjà été trouvée
        if ((document.getElementById("btn" + (i + 1)).getAttribute("find")) === "0") { alert("Letter has already been tested!") }// SI la lettre n'a pas déjà été testée 
        if (  ( (wordToDevine.includes(btnLetter) === false) && (continueGame === 1) )) {               // SI la lettre n'est pas dans le mot          
            count += 1;                                                                                 // incrémentation du count
            document.querySelector("img").setAttribute("src", "./assets/img/Hang" + String(count) + ".png"); // ajout part pendu
            document.getElementById("btn" + (i + 1)).style.color = "white";                             // def style
            document.getElementById("btn" + (i + 1)).style.backgroundColor = "red";                     // def style
            document.getElementById("btn" + (i + 1)).setAttribute("find", "0");                         // ajout attr 'find' = false
        }
        if (wordToDevine.includes(btnLetter) && (continueGame === 1)) {                                 // SI la lettre est dans le mot caché
            wordH.innerHTML = "";                                                                       // init de l'affichahe du wordH
            lettersGuess += btnLetter;                                                                  // stocke la lettre
            wordH.innerHTML += wordToDevine.replace(RegExp("[^" + lettersGuess + "]", "g"), "_ ");      // remplace le _ par la lettre trouvée
            document.getElementById("btn" + (i + 1)).style.backgroundColor = "green";                   // def style
            document.getElementById("btn" + (i + 1)).style.color = "white";                             // def style
            document.getElementById("btn" + (i + 1)).setAttribute("find", "1");                         // Ajout attr 'find' = true
        }
        if (count >=0 ){ countTxt.innerHTML = ( "Attempts: " + count + "/10"); }                        // Affichage du count
        if (wordH.innerHTML === wordToDevine) {                                                         // SI le mot caché est strictement égal au mot à trouver
            continueGame = 0;                                                                           // fin du GAME continueGame = false
            wordH.setAttribute("win", "1");                                                             // set attr
            countTxt.textContent = "YOU WIN!";                                                          // Affiche msg fin de jeu
            wordH.style.color = "green";                                                                // en vert (WIN)
        }
        if (count === 10) {                                                                             // SI le count atteint 10
            continueGame = 0;                                                                           // fin du GAME continueGame = false
            wordH.setAttribute("win", "0");                                                             // set attr 
            countTxt.textContent = "YOU LOSE !";                                                        // Affiche msg fin de jeu
            wordH.textContent = wordToDevine + " ";                                                     // affiche le mot qui était à trouver
            wordH.style.color = "red";                                                                  // en rouge (LOSE)
        }
    });
}

function getValue(){                                                                                     // test pour recup l'input...
    if ( kbd.value !== "" ){ 
        console.log(kbd.value);
        res = kbd.value;
    }
}