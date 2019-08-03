var DNA2RNAmap = {
    G : 'C',
    C : 'G',
    T : 'A',
    A : 'U',
};

function stringLoop(str) {
    var accum = ''
    for(var ch of str) {
        accum = accum + DNA2RNAmap[ch]
    }
    return accum;
}


export function toRna(DNA) {
    return stringLoop(DNA);
}