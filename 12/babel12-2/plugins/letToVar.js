module.exports = function({ types: t }) {
  return {
    name: "letToVar",
    visitor: {
      VariableDeclaration(path, state) {
        if (path.node.kind === 'let') {
          path.node.kind = 'var';
        }
      }
    }
  };
};