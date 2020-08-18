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