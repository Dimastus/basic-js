module.exports = class DepthCalculator {
    calculateDepth(arr) {
         let scope = this;
         if (Array.isArray(arr)) {
            return arr.reduce(function (previous, current) {
                let flat = scope.calculateDepth(current);
                return (previous > flat) ? previous : (1 + flat);
            }, 1);
        } else {
            return 0;
        }
    }
};