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

function johnLennonFacts(arr) {
    let i = 0;
    let newFacts = [];
    while (i < arr.length) {
        newFacts.push(`${arr[i]}!!!`)
        i++;
    };
    return newFacts;
};

//------- Lab 3 -------
function iLoveTheBeatles(num) {
    let arr = [];
    // let i = 0;
    do {
        arr.push(`I love the Beatles!`);
        num++;
    }
    while (num < 15);
    return arr;
};
