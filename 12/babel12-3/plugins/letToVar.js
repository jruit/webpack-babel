module.exports = function({ types: t }) {
  return {
    name: "letToVar",
    visitor: {
      VariableDeclaration(path, state) {
        if (path.node.kind === 'let' && state.opts.ES5 === true) {
          path.node.kind = 'var';
        }
      }
    }
  };
};