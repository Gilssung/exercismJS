export function isPangram(str) {
    var result = new Set(str.toLowerCase().replace(/[^a-z]/gi, ""));
    return result.size == 26;
}