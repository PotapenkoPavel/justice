const multer = require('multer')

multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {

  }

})

const fileFilter = (req, file, cb) => {

}