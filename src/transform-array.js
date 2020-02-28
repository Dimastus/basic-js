module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case '--discard-next':
                    if (arr[i + 1]) i++;
                    break;
                case '--discard-prev':
                    // (arr[i - 1]) ? arr.splice(i - 1, 2): arr.splice(i, 1);
                    // if (arr[i - 1]) result.splice(i - 1, 1);
                    if (arr[i - 1]) result.pop();
                    break;
                case '--double-next':
                    // (arr[i + 1]) ? arr.splice(i, 1, arr[i + 1]): arr.splice(i, 1);
                    if (arr[i + 1]) result.push(arr[i + 1]);
                    break;
                case '--double-prev':
                    // if (arr[i - 1]) {
                    //     arr.splice(i, 1);
                    //     arr.splice(i, 0, i);
                    // } else {
                    //     arr.splice(i, 1);
                    // }
                    if (arr[i - 1]) result.push(arr[i - 1]);
                    break;
                default:
                    result.push(arr[i]);
                    break;
            }
        }
        return result;
    } else {
        throw new Error();
    }
    /*if (!Array.isArray(arr)) {
        throw new Error();
    }
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
            if (i < arr.length - 1) {
                i++;
            }
        } else if (arr[i] == '--discard-prev') {
            if (arr2.length > 0) {
                arr2.pop();
            }
        } else if (arr[i] == '--double-next') {
            if (i < arr.length - 1) {
                arr2.push(arr[i + 1]);
            }
        } else if (arr[i] == '--double-prev') {
            if (i > 0) {
                arr2.push(arr[i - 1]);
            }
        } else {
            arr2.push(arr[i]);
        }
    }
    return arr2;*/
};
