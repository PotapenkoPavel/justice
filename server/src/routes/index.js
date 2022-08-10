const express = require('express');

const checkValidationResults = require('../middleware/check-validation-results');
const verifyToken = require('../middleware/verify-token')
const upload = require('../middleware/multer')

const { register, login, sendTokenPayload } = require('../controllers/auth');
const { getArticles, addArticle, getArticlesByOwner, getArticleById} = require("../controllers/article");

const registerSchema = require('../schemas/register-schema');
const loginSchema = require('../schemas/login-schema');

const router = express.Router();

// authorization
router.get('/auth/verify-token', verifyToken, sendTokenPayload)

router.post('/auth/register', registerSchema, checkValidationResults, register);

router.post('/auth/login', loginSchema, checkValidationResults,  login);

// article
router.get('/article', getArticles)

router.get('/article/owner/:id', verifyToken, getArticlesByOwner)

router.get('/article/:id', getArticleById)

router.post('/article', verifyToken, upload.single('previewImage'), addArticle)

module.exports = router;
