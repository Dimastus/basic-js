module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } else if (date.hasOwnProperty('getMonth')) {
    throw new Error();
  } else {
    let period = {
      11: 'winter',
      0: 'winter',
      1: 'winter',
      2: 'spring',
      3: 'spring',
      4: 'spring',
      5: 'summer',
      6: 'summer',
      7: 'summer',
      8: 'autumn',
      9: 'autumn',
      10: 'autumn'
    };

    return period[date.getMonth()];
  }
};