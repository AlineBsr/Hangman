let words = ["apple", "cat", "woods", "music", "television" ];

let wordH = document.getElementById("wordH");       // box mot caché
let letters = document.getElementById("letters");   // box btn/alpha
let wordToDevine = words[Math.floor(Math.random() * words.length)]; // init du mot à deviner

wordH.innerHTML += wordToDevine.replace(RegExp("([a-z])", "g"), "_ "); // for (let i = 0; i < wordToDevine.length; i++) { wordH.innerHTML += "·" }  // ajout des _ en fonction du mot

let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
for (let i = 0; i < alpha.length; i++) { letters.innerHTML += "<button id= btn" + (i + 1) + " value=\"" + (i + 1) + "\">" + alpha[i] + "</button>" }
let continueGame = 1;                                                                                  // SI continueGamme...

let lettersGuess = "";                                                                                      // recup les lettres deja trouvées pour la regex
let count = 0;                                                                                              // compte le nombre de raté
for (let i = 0; i < letters.children.length; i++) {                                                         // pour ch elem boutons
    const btn = letters.children[i];                                                                        // stocke l'ind du bouton 
    const btnLetter = btn.textContent;                                                                      // stocke la lettre du bouton
    
    if (continueGame) {                                                                                     // ...est vrai.. le jeu continue...

        btn.addEventListener("click", function () {                                                         // pour chaque clic sur un bouton lettre
            if ((document.getElementById("btn" + (i + 1)).getAttribute("find")) === "1") { alert("letter already found!") }         // SI la lettre n'a pas déjà été trouvée
            if ((document.getElementById("btn" + (i + 1)).getAttribute("find")) === "0") { alert("Letter has already been tested!") }// SI la lettre n'a pas déjà été testée 

            if (wordToDevine.includes(btnLetter)) {                                                         // SI la lettre est dans le mot caché
                wordH.innerHTML = "";                                                                       // init de l'affichahe du wordH
                lettersGuess += btnLetter;                                                                  // stocke la lettre
                wordH.innerHTML += wordToDevine.replace(RegExp("[^" + lettersGuess + "]", "g"), "_ ");      // remplace le _ par la lettre trouvée
                document.getElementById("btn" + (i + 1)).style.backgroundColor = "green";                   // def style
                document.getElementById("btn" + (i + 1)).style.color = "white";                             // def style
                document.getElementById("btn" + (i + 1)).setAttribute("find", "1");                         // Ajout attr 'find' = true
            }
            else    {                                                                                       // SINON           
                if ((wordH.textContent !== wordToDevine) && (count <= 10)){
                    count += 1;                                                                             // incrémentation du count
                    if (count < 10) { document.querySelector("img").setAttribute("src", "./assets/img/Hang" + String(count) + ".png"); } // ajout img pendu
                    document.getElementById("btn" + (i + 1)).style.color = "white";                         // def style
                    document.getElementById("btn" + (i + 1)).style.backgroundColor = "red";                 // def style
                    document.getElementById("btn" + (i + 1)).setAttribute("find", "0");                     // ajout attr 'find' = false
                }
            }
            if (wordH.textContent === wordToDevine ){                                                       // SI le mot caché est strictement égal au mot à trouver
                alert("YOU WIN !");                                                                         // alert WIN
                continueGame=0;
                wordH.setAttribute("win","1");                                                                             // fin du jeu
            }
            if ( count === 10) {                                                                            // SI le count atteint 10
                alert("YOU LOOSE !");                                                                       // alert LOOSE
                continueGame=0;               
                wordH.setAttribute("win","0");                                                                             // fin du jeu
                                                                              // fin du jeu
            }
        })
    }
}