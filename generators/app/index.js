'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  prompting () {
    this.log(
      yosay(`Welcome to the joi_swagger_three ${chalk.red('generator-joi-swagger')} generator!`)
    )

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ]

    return this.prompt(prompts).then(props => {
      this.props = props
    })
  }

  writing () {
    this.fs.copy(
      this.templatePath('./joi_swagger'),
      this.destinationPath('./joi_swagger')
    )
  }
  // install () {
  //   this.installDependencies()
  // }
}
