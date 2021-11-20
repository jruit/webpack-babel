var autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: [
        "chrome >= 18"
      ]
    })
  ]
};