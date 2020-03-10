module.exports = function repeater(str, options) {
    let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = ''} = options,
    result = '';
    addition = String(addition);
    for (let i = 0; i < repeatTimes; i++) {
        result += `${str}${addition}`;
        for (let j = 0; j < additionRepeatTimes - 1; j++) {
            result += `${additionSeparator}${addition}`;
        }
        if (repeatTimes >= 1 && i < repeatTimes - 1) {
            result += `${separator}`;
        }
    }
    return result;
};