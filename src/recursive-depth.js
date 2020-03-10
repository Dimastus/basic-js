module.exports = class DepthCalculator {
    calculateDepth(arr, deep = 0, max = 0) {
        if (Array.isArray(arr)) {
            deep++;
            for (let i = 0; i < arr.length; i++) {
                this.calculateDepth(arr[i], deep);
            }
            deep > max ? max = deep : deep = 1;
        }
        return max;
    }
};