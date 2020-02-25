module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members.filter(element => {
    return typeof element === 'string';
  }).map(element =>
    element.trim().toUpperCase().slice(0, 1)
  ).sort().join('');
};