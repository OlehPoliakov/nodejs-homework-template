const express = require('express');

const ctrl = require('../../controllers/auth');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/user');

const router = express.Router();

// signup
router.post('/register', validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register));
// signin
router.post('/login', validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));

router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));

router.get('/logout', authenticate, ctrlWrapper(ctrl.logout));
// updateUsers
router.patch(
  '/users',
  authenticate,
  validateBody(schemas.updateUserSchema),
  ctrlWrapper(ctrl.updateUsers)
);

module.exports = router;
