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
for (let i = 0; i < wordToDevine.length; i++) { wordH.innerHTML += " + " }  // ajout des _ en fonction du mot

let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// init bouton/lettre
for (let i = 0; i < alpha.length; i++) { letters.innerHTML += "<button id= btn" + (i + 1) + " value=\"" + (i + 1) + "\">" + alpha[i] + "</button>" }

for (let i = 0; i < letters.children.length; i++) {
    const btn = letters.children[i];
    const btnLetter = btn.textContent;

    btn.addEventListener("click", function () {

        for (let l = 0; l < wordToDevine.length; l++) {
            let letterWordToDevine = wordToDevine[l];

            if (btnLetter === letterWordToDevine) {
                document.getElementById("btn" + (i + 1)).style.backgroundColor = "green";
                document.getElementById("btn" + (i + 1)).style.color = "white";
                console.log(wordToDevine.indexOf(btnLetter))
                // console.log(wordH.textContent[0])
                for (let j = 0; j < wordH.textContent.length; j++){
                    if(j === l ){
                        console.log("j = " + j + " l=" + l)
                        wordH.textContent = btnLetter}
                }
                
                // console.log(wordH.innerHTML[0]="B");
                // console.log(wordH.textContent[ wordToDevine.indexOf(btnLetter)  ] )
                // wordH.textContent[ wordToDevine.indexOf(btnLetter)] =btnLetter
                ////////

                ///////////////////////
                // for ( sensured in wordToDevine){
                //     lSensured = btnLetter.valueOf(sensured)
                //     console.log("sensured = " + sensured)
                //     console.log("wordh = " + wordH.textContent[sensured])
                //     // console.log(sensured)
                //     // console.log()
                //      // wordH[sensured].innerHTML = lSensured;
                //     // console.log(wordH.textContent[sensured])
                // }
                // console.log(lSensured)

                break;
            }

            if (btnLetter !== letterWordToDevine) {
                document.getElementById("btn" + (i + 1)).style.backgroundColor = "red";
                document.getElementById("btn" + (i + 1)).style.color = "white";
            }
        }

    })

}

console.log(wordToDevine)