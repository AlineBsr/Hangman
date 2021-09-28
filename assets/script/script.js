let words = [
    "apple",
    "cat",
    "woods",
    "music",
    "television"
];

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

    for (let i = 0; i < letters.children.length; i++) {
        const btn = letters.children[i];
        const btnLetter = btn.textContent;
        wordH.innerHTML="·"
        btn.addEventListener("click", function () {
            count+=1;
            if(isIt(btnLetter, wordToDevine)){
                document.getElementById("btn" + (i + 1)).style.backgroundColor = "green";
                document.getElementById("btn" + (i + 1)).style.color = "white";                    
                // console.log("wordH = " + wordH.textContent[i])
                // wordH.innerHTML = btnLetter;
                
                // wordH.textContent[i].replace("", btnLetter);

            }

            else{
                document.getElementById("btn" + (i + 1)).style.backgroundColor = "red";
                document.getElementById("btn" + (i + 1)).style.color = "white";
            }
        console.log("count = " + count)

        })

    }

function isIt(btnLetter, wordToDevine){
    if ( wordToDevine.includes(btnLetter) ) { 

        
        // wordH.innerHTML += wordToDevine.replace(RegExp("([a-z])","g"), "·");
        // wordToDevine[i].replace("·", btnLetter);
        wordGuessed.push(btnLetter);
        // console.log(wordToDevine.indexOf(btnLetter));
        return true;
    } 
    // else if ( count === wordToDevine.length) {}
    // else {
    //     console.log(count)

    //     document.getElementById("btn" + (i + 1)).style.backgroundColor = "red";
    //     document.getElementById("btn" + (i + 1)).style.color = "white";

    // } 

}