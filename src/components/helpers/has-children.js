module.exports = function(block) {
  return block && typeof(block.children) === 'object';
}