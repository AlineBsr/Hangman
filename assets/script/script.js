let words = [
    "apple",
    "cat",
    "woods",
    "music",
    "television"
];

let wordH = document.getElementById("wordH")        // box mot caché
let letters = document.getElementById("letters");   // box btn/alpha

let wordToDevine = words[Math.floor(Math.random() * words.length)];         // init du mot à deviner
for (let i = 0; i < wordToDevine.length; i++) { wordH.innerHTML += " _ " }  // ajout des _ en fonction du mot

let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// init bouton/lettre
for (let i = 0; i < alpha.length; i++) { letters.innerHTML += "<button id= btn" + (i + 1) + " value=\"" + (i + 1) + "\">" + alpha[i] + "</button>" }

let btnLetter;
let letterWordToDevine;
for (let i = 0; i < letters.children.length; i++) {
    const btn = letters.children[i];
    const btnLetter = btn.textContent
    btn.addEventListener("click", function () {

        for (let l = 0; l < wordToDevine.length; l++) {
            letterWordToDevine = wordToDevine[l];

            if (btnLetter === letterWordToDevine) {

                document.getElementById("btn" + (i + 1)).style.backgroundColor = "green";
                document.getElementById("btn" + (i + 1)).style.color = "white";
                for ( sensured in wordH.textContent){
                    console.log(wordH.textContent[sensured])
                }

                break;
            }
            if (btnLetter !== letterWordToDevine) {
                document.getElementById("btn" + (i + 1)).style.backgroundColor = "red";
                document.getElementById("btn" + (i + 1)).style.color = "white";
            }
        }

    })

}