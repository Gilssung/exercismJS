export function gigasecond(date) {
    date.setUTCSeconds(date.getUTCSeconds() + Math.pow(10, 9));
    return date;
}