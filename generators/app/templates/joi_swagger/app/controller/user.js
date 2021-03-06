const model = require('../model')
const BaseController = require('../common/base_controller')
const service = require('../service')

class UserController extends BaseController {
  async index (req, res) {
    const params = req.query
    const result = await service.user.index(params)
    res.json(result)
  }
  async create (req, res) {
    const params = req.body
    super.validate(model.user.schema, model.user.create, params).then(async () => {
      const result = await service.user.create(params)
      res.json(result)
    }).catch(err => {
      return res.status(422).send(err)
    })
  }
}

const user = new UserController()
module.exports = user
