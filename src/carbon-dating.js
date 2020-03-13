const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity ||
    typeof sampleActivity !== 'string' ||
    isNaN(isFinite(sampleActivity)) ||
    parseFloat(sampleActivity) <= 0) {
    return false;
  } else {
    let age = Math.log(MODERN_ACTIVITY / (Number.parseFloat(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD);
    return (Math.ceil(age) > 0) ? Math.ceil(age) : false;
  }
};