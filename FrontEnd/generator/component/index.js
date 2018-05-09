/**
 * Component Generator
 */

const componentExists = require('../utils/componentExists')
const moment = require('moment')

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value, 'component') ? 'A component with this name already exists' : true
      }
      return 'The name is required'
    },
  }, {
    type: 'input',
    name: 'description',
    message: 'What is its function?',
    default: 'This is a container component',
  }, {
    type: 'input',
    name: 'author',
    message: 'What is its author?',
    default: 'xiaozhi',
  }, {
    type: 'input',
    name: 'organization',
    message: 'What is its organization?',
    default: 'ELWG',
  }, {
    type: 'list',
    name: 'component',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'PureComponent', 'Component'],
  }, {
    type: 'confirm',
    name: 'wantLESS',
    default: true,
    message: 'Does it have less file?',
  }],
  actions: (data) => {
    // Generate index.js
    let actions

    if (data.component === 'Stateless Function') {
      actions = [{
        type: 'add',
        path: '../src/Components/{{properCase name}}/index.js',
        templateFile: './component/stateless.js.hbs',
        abortOnFail: true,
      }]
    } else {
      actions = [{
        type: 'add',
        path: '../src/Components/{{properCase name}}/index.js',
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      }]
    }

    // If they want a LESS file
    if (data.wantLESS) {
      actions.push({
        type: 'add',
        path: '../src/Components/{{properCase name}}/styles.less',
        templateFile: './component/styles.less.hbs',
        abortOnFail: true,
      })
    }

    /* add create time */
    data.date = moment().format('YYYY-MM-DD HH:mm:ss')

    return actions
  },
}
