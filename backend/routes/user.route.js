const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/user.controller');

// @url           POST /user/create
// @description   create new user
// @access-mode   public-basic
router.post('/signup', userController.signUp)

// @url           POST /user/login
// @description   login to user profile
// @access-mode   public-basic
router.post('/login', userController.login)

// @url           POST /user/logout
// @description   logout from user profile
// @access-mode   private-basic
router.post('/logout', auth, userController.logout)

// @url           GET /user/getuser
// @description   get user profile
// @access-mode   private-basic
router.get('/getuser/:userId', auth, userController.getUser)

// @url           PUT /user/update
// @description   update user profile
// @access-mode   private-basic
router.put('/update/:userId', auth, userController.updateUser)

// @url           GET /user/getallusers
// @description   get all user profile
// @access-mode   private-admin
router.get('/getallusers', auth, userController.grantAccess('readAny', 'profile'), userController.getUsers)

// @url           GET /user/delete
// @description   delete user profile
// @access-mode   private-admin
router.delete('/delete/:userId', auth, userController.grantAccess('deleteAny', 'profile'), userController.deleteUser)

module.exports = router;