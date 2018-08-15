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
        name: 'createDirectory',
        message: 'Would you like to create a new directory for your project?'
      },
      {
        type: 'input',
        name: 'dirname',
        message: 'Enter directory name(default_project_name: joi_swagger)'
      }
    ]

    return this.prompt(prompts).then(props => {
      this.props = props
    })
  }

  writing () {
    let createDirName = './joi_swagger'
    if (this.props.createDirectory) {
      createDirName = this.props.dirname
    }
    this.fs.copy(
      this.templatePath('./joi_swagger'),
      this.destinationPath(createDirName)
    )
  }
  // install () {
  //   this.installDependencies()
  // }
}
