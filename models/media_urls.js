const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const media_urlsSchema = new Schema({
   media_url: {
        type: String,
        required: true
    },
    aws_url: {
        type: String,
        required: true
    },
   
});

const Media_urls = mongoose.model('Media_urls', media_urlsSchema);
module.exports = Media_urls;