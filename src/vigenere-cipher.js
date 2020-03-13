class VigenereCipheringMachine {
    constructor(direction = true) {
        this.direction = direction;
    }
    encrypt(str, key) {
        if (!str || !key) throw new Error();
        let message = str.toUpperCase(),
            spliceMess = message.replace(/(\W|\d)/g, ''),
            keyUpper = key.toUpperCase(),
            result = '',
            alphabetLength = 26; //65 - 90
        for (let i = 0, j = 0; i < message.length; i++) {
            if (/^(\W|\d)$/.test(message[i])) {
                result += message[i];
                continue;
            }
            let symbolMessage = (spliceMess[(j >= spliceMess.length) ? j % spliceMess.length : j]).charCodeAt(0),
                symbolKey = keyUpper[(j >= keyUpper.length) ? j % keyUpper.length : j],
                ki = (typeof alphabetLength == 'undefined') ? parseInt(symbolKey) : (symbolKey.charCodeAt(0)),
                symbolTable = String.fromCharCode(((alphabetLength + ((symbolMessage) + (ki))) % alphabetLength) + 65);
            result += symbolTable;
            j++;
        }
        return (this.direction) ? result : result.split('').reverse().join('');
    }

    decrypt(str, key) {
        if (!str || !key) throw new Error();
        let message = str.toUpperCase(),
            spliceMess = message.replace(/(\W|\d)/g, ''),
            keyUpper = key.toUpperCase(),
            result = '',
            alphabetLength = 26; //65 - 90
        for (let i = 0, j = 0; i < message.length; i++) {
            if (/^(\W|\d)$/.test(message[i])) {
                result += message[i];
                continue;
            }
            let symbolMessage = (spliceMess[(j >= spliceMess.length) ? j % spliceMess.length : j]).charCodeAt(0),
                symbolKey = keyUpper[(j >= keyUpper.length) ? j % keyUpper.length : j],
                ki = (typeof alphabetLength == 'undefined') ? parseFloat(symbolKey) : (symbolKey.charCodeAt(0)),
                symbolTable = String.fromCharCode(((alphabetLength + ((symbolMessage) + (-ki))) % alphabetLength) + 65);
            result += symbolTable;
            j++;
        }
        return (this.direction) ? result : result.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;