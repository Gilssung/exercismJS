var listAlpha = "abcdefghijklmnopqrstuvwxyz";

export class Cipher {
    constructor(key) {
        if(typeof key === 'string') {
            if(key.replace(/[0-9-A-Z]/g, "").length != key.length || key.trim() != key || key == '') {
                throw Error('Bad key');
            }
            this._key = key;
        } else {
            this._key = generateKey();
        }
    }

    get key() { return this._key; }

    encode(plainText) {
        var result = "";

        while (this._key.length < plainText.length) {
            this._key += this._key;
        }

        for(var i=0; i<plainText.length; i++) {
            result += String.fromCharCode(gardedAsciiEncode(plainText[i], this._key[i]));
        }
        return result;
    }

    decode(cipherText) {
        var result = "";

        while (this._key.length < cipherText.length) {
            this._key += this._key;
        }

        for(var i=0; i<cipherText.length; i++) {
            result += String.fromCharCode(gardedAsciiDecode(cipherText[i], this._key[i]));
        }
        return result;
    }
}

function generateKey() {
    var result = "";
    
    for(var i=0; i<100; i++) {
        result += listAlpha[(Math.random() * 100 * Date.now() ) % 26];
    }
    return result;
}

function gardedAsciiEncode(plain, key) {
    var pre = plain.charCodeAt(0) + (key.charCodeAt(0) - 'a'.charCodeAt(0));
    var offset = pre - 'z'.charCodeAt(0);
    if(pre > 'z'.charCodeAt(0)) {
        return 'a'.charCodeAt(0) + offset - 1;
    } else {
        return pre;
    }
}

function gardedAsciiDecode(cipher, key) {
    var pre = cipher.charCodeAt(0) - (key.charCodeAt(0) - 'a'.charCodeAt(0));
    var offset = 'a'.charCodeAt(0) - pre;
    if(pre < 'a'.charCodeAt(0)) {
        return 'z'.charCodeAt(0) - (offset - 1);
    } else {
        return pre;
    }
}