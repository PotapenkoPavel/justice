const express = require('express');

const checkValidationResults = require('../middleware/check-validation-results');
const verifyToken = require('../middleware/verify-token')
const upload = require('../middleware/multer')

const { register, login, sendTokenPayload } = require('../controllers/auth');
const { getArticles, addArticle, getArticlesByOwner, getArticleById, updateArticleViews } = require("../controllers/article");
const { getUser, updateUserData, updateUserAvatar, deleteUserAvatar } = require("../controllers/user");

const registerSchema = require('../schemas/register-schema');
const loginSchema = require('../schemas/login-schema');

const User = require('../models/user')
const Article = require('../models/article')
const UploadImage = require('../models/uploadImage')

const router = express.Router();

// authorization
router.get('/auth/verify-token', verifyToken, sendTokenPayload)

router.post('/auth/register', registerSchema, checkValidationResults, register);

router.post('/auth/login', loginSchema, checkValidationResults,  login);

// article
router.get('/article', getArticles)

router.get('/article/owner/:id', verifyToken, getArticlesByOwner)

router.get('/article/:id', getArticleById)

router.get('/article/:id/views', updateArticleViews)

router.post('/article', verifyToken, upload.single('previewImage'), addArticle)

// user
router.get('/user/:id', verifyToken, getUser)

router.patch('/user/:id', verifyToken, updateUserData)

router.patch('/user/:id/avatar', verifyToken, upload.single('avatar'), updateUserAvatar)

router.delete('/user/:id/avatar', verifyToken, deleteUserAvatar)

router.get('/test', async (req, res) => {
  // const users = await User.remove()
  // const articles = await Article.remove()
  // const images = await UploadImage.remove()

  // console.log(users,articles,images)

  await Article.findByIdAndDelete("62f63e0fde80707d14e70938")
})

module.exports = router;
