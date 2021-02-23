const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/').get((req, res) => {
    Article.find().then(article => res.jsos(article)).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const section = req.body.section;
    const title = req.body.title;
    const byline = req.body.byline;
    const abstract = req.body.abstract;
    const published_date = req.body.published_date;

    const newArticle = new Article({
        username,
        section,
        title,
        byline,
        abstract,
        published_date,
    });

    newArticle.save()
    .then(() => res.join('Article added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;