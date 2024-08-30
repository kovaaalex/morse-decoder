const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = ""
    const space = "**********"
    for(let i = 0; i < expr.length; i += 10){
        let encryptedStr = expr.slice(i, i + 10)
        if (encryptedStr === space){
            result += " "
            continue
        }
        let ch = ""
        for (let j = 0; j < encryptedStr.length; j += 2){
            let encryptedCh = encryptedStr.slice(j, j + 2)
            if (encryptedCh === '10')
                ch += '.'
            else if (encryptedCh === '11')
                ch += '-'
        }
        result += MORSE_TABLE[ch]
    }
    return result
}

module.exports = {
    decode
}