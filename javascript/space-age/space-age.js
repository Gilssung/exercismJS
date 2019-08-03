function round2Decimal(num) {
    return Math.round(num * 100) / 100;
}

export function age(planet, seconds) {
    var EARTH_ORBIT_PERIOD = 365.25 * 60 * 60 * 24;
    var age = 0.0;

    switch(planet) {
        case 'earth': 
            age =  seconds / EARTH_ORBIT_PERIOD;
            break;
        case 'mercury':
            age = seconds / (EARTH_ORBIT_PERIOD * 0.2408467);
            break;
        case 'venus':
            age = seconds / (EARTH_ORBIT_PERIOD * 0.61519726);
            break;
        case 'mars':
            age = seconds / (EARTH_ORBIT_PERIOD * 1.8808158);
            break;
        case 'jupiter': 
            age = seconds / (EARTH_ORBIT_PERIOD * 11.862615);
            break;
        case 'saturn': 
            age = seconds / (EARTH_ORBIT_PERIOD * 29.447498);
            break;
        case 'uranus': 
            age = seconds / (EARTH_ORBIT_PERIOD * 84.016846);
            break;
        case 'neptune': 
            age = seconds / (EARTH_ORBIT_PERIOD * 164.79132);
            break;
        default :
            age = -1;
            break;
    }

    return round2Decimal(age);
}