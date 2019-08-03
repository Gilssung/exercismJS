// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

var dict = {};

export class Robot {
    constructor() {
        this._name = generateName();
    }

    get name() { return this._name; }

    reset() {
        this._name = generateName();
    }
}


function generateName() {
    var random = Math.random();
    var samples = random.toString(36).substring(2, 15);
    var numSamples = random.toString().substring(2, 5);
    var letterMatches = /^[a-zA-Z]+$/;
    var count = 0;
    var result = "";
    do {
        for (var sub of samples) {
            if (sub.match(letterMatches) && count < 2) {
                result = result + sub.toUpperCase();
                count++;
            }
            if (count == 2) {
                result = result + numSamples;
                break;
            }
        }
    } while((result in dict));
    dict[result] = 1;
    return result;
}

Robot.releaseNames = () => {

};
