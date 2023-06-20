let words = [];
let i = 0;
let found = 0;

function saveWord() {
    words[i] = document.getElementById("wordIn").value; 
    ++i;
        document.getElementById("wordIn").value = '';
}

function searchWord() {
    for(let j = 0; j <= words.length; ++j) {
        if(words[j] === document.getElementById("wordIn").value) {
            found = 1;
            document.getElementById("wordIn").value = '';
            alert("The word is in the dictionary");
        }
    }
    if(found == 0) {
        document.getElementById("wordIn").value = '';
        alert("The word is not found in the dictionary");
    }
    found = 0;
}