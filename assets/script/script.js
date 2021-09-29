let words = [
    "apple",
    "cat",
    "woods",
    "music",
    "television"
];

// 
// let words = [
    // "woods",
// ];

let wordH = document.getElementById("wordH");        // box mot caché
let letters = document.getElementById("letters");   // box btn/alpha

let wordToDevine = words[Math.floor(Math.random() * words.length)];         // init du mot à deviner

// for (let i = 0; i < wordToDevine.length; i++) { wordH.innerHTML += "·" }  // ajout des _ en fonction du mot
wordH.innerHTML += wordToDevine.replace(RegExp("([a-z])","g"), "·");
console.log(wordToDevine)


let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// init bouton/lettre
for (let i = 0; i < alpha.length; i++) { letters.innerHTML += "<button id= btn" + (i + 1) + " value=\"" + (i + 1) + "\">" + alpha[i] + "</button>" }

// let wordHidden = wordH.textContent.split("");
let wordGuessed = [];
let count = 0;
let tempRes = wordH.innerHTML.split("")

for (let i = 0; i < letters.children.length; i++) {
    const btn = letters.children[i];
    const btnLetter = btn.textContent;
    btn.addEventListener("click", function () {
        wordH.innerHTML="";
        count+=1;
        if ( wordToDevine.includes(btnLetter)){ // traitement du mot caché et couleurs bouton
            let ind = wordToDevine.indexOf(btnLetter);
            document.getElementById("btn" + (i + 1)).style.backgroundColor = "green";
            document.getElementById("btn" + (i + 1)).style.color = "white";     
            tempRes.splice(ind, 1, btnLetter)
            wordH.innerHTML += tempRes.join("")
        }
        else{ // traitement du mot caché et couleurs bouton
            wordH.innerHTML += tempRes.join("")
            document.getElementById("btn" + (i + 1)).style.backgroundColor = "red";
            document.getElementById("btn" + (i + 1)).style.color = "white";
        }
        console.log("count = " + count)
    })
}