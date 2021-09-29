let words = [
    "apple",
    "cat",
    "woods",
    "music",
    "television"
];

let wordH = document.getElementById("wordH");       // box mot caché
let letters = document.getElementById("letters");   // box btn/alpha
let wordToDevine = words[Math.floor(Math.random() * words.length)]; // init du mot à deviner

wordH.innerHTML += wordToDevine.replace(RegExp("([a-z])","g"),"·"); // for (let i = 0; i < wordToDevine.length; i++) { wordH.innerHTML += "·" }  // ajout des _ en fonction du mot

let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
for (let i = 0; i < alpha.length; i++) { letters.innerHTML += "<button id= btn" + (i + 1) + " value=\"" + (i + 1) + "\">" + alpha[i] + "</button>" }

let lettersGuess="";    // recup les lettres deja trouvées
let count = 0;          // compte le nombre d'essais

for (let i = 0; i < letters.children.length; i++) {
    const btn = letters.children[i];
    const btnLetter = btn.textContent;
    btn.addEventListener("click", function () {
        count+=1;
        // let reg = RegExp("("+btnLetter+"?)", "g")
        if ( wordToDevine.includes(btnLetter)){
            if( (document.getElementById("btn" + (i +1)).getAttribute("find")) === "1") {  
                alert("letter already found!")
                count-=1; // décrémente le compteur si la lettre a déjà été trouvée
            }
            wordH.innerHTML=""; // init du wordH
            lettersGuess += btnLetter;
            wordH.innerHTML += wordToDevine.replace(RegExp("[^"+lettersGuess+"]" ,"g"), "·"); 
            document.getElementById("btn" + (i + 1)).style.backgroundColor = "green";
            document.getElementById("btn" + (i + 1)).style.color = "white";     
            document.getElementById("btn" + (i + 1)).setAttribute("find","1");
        }
        else { 
            if( (document.getElementById("btn" + (i +1)).getAttribute("find")) === "0") {  
                alert("Letter has already been tested!")
                count-=1; // décrémente le compteur si la lettre a déjà été testée
            }
            document.getElementById("btn" + (i + 1)).style.color = "white";     
            document.getElementById("btn" + (i + 1)).style.backgroundColor = "red";
            document.getElementById("btn" + (i + 1)).setAttribute("find","0");
        }
        console.log("count = " + count)
    })
}
console.log(wordToDevine)