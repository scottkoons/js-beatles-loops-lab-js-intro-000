// add solution here
let musiciansPlay = [];

function createArr(name, play) {
    for (let i = 0; i < musicians.length; i++) {
        musiciansPlay.push(`${name[i]} plays ${play[i]}`);
    };
    return musiciansPlay;
};
