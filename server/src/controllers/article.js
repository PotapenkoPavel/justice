const Article = require('../models/article')
const UploadImage = require('../models/uploadImage')
const fs = require("fs");

const getArticles = async (req, res) => {
  try {
    const articles = await Article
      .find()
      .limit(10)
      .populate({
        path: 'author',
        populate: {
          path: 'avatar',
          select: '-filename -_id'
        },
        select: '-password'
      })
      .populate('img', '-filename -_id')

    return res.status(200).json({ articles })
  } catch (error) {
    return res.status(500).json({ error })
  }
}

const getArticleById = async (req, res) => {
  try {
    const { id } = req.params

    const article = await Article
      .findById(id)
      .populate({
        path: 'author',
        populate: {
          path: 'avatar',
          select: '-filename -_id'
        },
        select: '-password'
      })
      .populate('img', '-filename -_id')

    return res.status(200).json(article)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

const getArticlesByOwner = async (req, res) => {
  try {
    const { id } = req.params

    const articles = await Article
      .find()
      .where({ author: id })
      .populate({
        path: 'author',
        populate: {
          path: 'avatar',
          select: '-filename -_id'
        },
        select: '-password'
      })
      .populate('img', '-filename -_id')

    return res.status(200).json({ articles })
  } catch (error) {
    return res.status(500).json({ error })
  }
}

const addArticle = async (req, res) => {
  try {
    const file = req.file

    if (!file) {
      return res.status(400).json({ message: 'Please provide an article preview image' })
    }

    const { title, tag, HTML, userId, description } = req.body

    // compute read time in minutes
    const readTimeInMinutes = Math.ceil(HTML.replace(/(<([^>]+)>)/gi, '').length / 201)

    // encode image to base64 format for save to database later
    const imageBase64 = fs.readFileSync(file.path).toString('base64')

    const uploadImage = new UploadImage({
      filename: file.filename,
      contentType: file.mimetype,
      imageBase64
    })

    const { _id: imageId } = await uploadImage.save()

    const article = new Article({
      title,
      tag,
      HTML,
      author: userId,
      description,
      readTimeInMinutes,
      img: imageId,
      timestamp: new Date()
    })

    const articleResponse = await article.save()

    return res.json({ message: 'article is created', article: articleResponse })
  } catch (error) {
    return res.status(500).json({ error })
  }
}

module.exports = {
  getArticles,
  getArticleById,
  getArticlesByOwner,
  addArticle
}