module.exports = function({ types: t }) {
  return {
    name: "animalToDog",
    visitor: {
      Identifier(path, state) {
        if (path.node.name === 'animal') {
          path.node.name = 'dog';
        }
      }
    }
  };
};