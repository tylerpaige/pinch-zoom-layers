module.exports = function(block) {
  return block && typeof(block.child) === 'object';
}