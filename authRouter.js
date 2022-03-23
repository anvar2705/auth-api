const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')

router.post(
  '/registration',
  [
    check('username', 'Username must not be empty or contain spaces')
      .notEmpty()
      .custom((value) => !/\s/.test(value)),
    check('password', 'Password length must be more than 6 characters').isLength({ min: 6 }),
  ],
  controller.registration
)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router
