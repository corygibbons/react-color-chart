const path = require('path');

module.exports = {
  components: 'src/components/*.js',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import ${name} from 'react-color-chart';`;
  },
  showSidebar: false,
  skipComponentsWithoutExample: true,
  styleguideDir: 'public',
  title: 'React Color Chart',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
};
