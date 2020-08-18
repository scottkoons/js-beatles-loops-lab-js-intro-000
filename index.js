// add solution here

//------- Lab 1 -------
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
let musiciansPlay = [];

function theBeatlesPlay(name, play) {
    for (let i = 0; i < musicians.length; i++) {
        musiciansPlay.push(`${name[i]} plays ${play[i]}`);
    };
    return musiciansPlay;
};

//------- Lab 2 -------
const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
];


function johnLennonFacts(arr) {
    let i = 0;
    let newFacts = [];
    while (i < arr.length) {
        newFacts.push(`${arr[i]}!!! `)
        i++;
    };
    return newFacts;
};