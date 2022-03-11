const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
require('dotenv').config();

const auth = async (req, res, next) => {
  try {
    let token = req.header('Authorization')
    const decode = jwt.verify(token, process.env.SECRET_CODE)
    const user = await User.findOne({_id: decode._id, "tokens.token": token})
    if (!user) {
      throw new Error('Please Authenticate')
    }
    req.token = token
    req.user = user 

    next()
  } catch (error) {
    res.status(401).send({message: error.message})
    console.log(error.message)
  }
}

module.exports = auth