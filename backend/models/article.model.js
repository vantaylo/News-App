const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    section: {type: String, required: true},
    title: {type: String, required: true},
    byline: {type: String, required: true},
    abstract: {type: String, required: true},
    published_date: {type: String, required: true},
    url: {type: String, required: true},
}, {
    timestamps: true,
});

const Articles = mongoose.model('Articles', articleSchema);

module.exports = Articles;