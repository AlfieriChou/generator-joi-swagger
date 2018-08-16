const helpers = require('yeoman-test')
const assert = require('yeoman-assert')
const path = require('path')

describe('generator-api', () => {
  it('generate a project', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        useAppveyor: false
      })
      .then(() => {
        assert.noFile('package.json')
      })
  })
})
