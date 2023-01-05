const Article = require('../models/article')

articlesController = {}

articlesController.list = async (req, res) => {
    const {source, category, page, posts} = req.query
    try {
        const articles = await Article.find({source : source, category : category}).sort({date_published : -1}).skip(Number(posts) * (Number(page)-1)).limit(Number(posts))
        res.json(articles)
    } catch (error) {
        res.json(error)
    }
}

module.exports = articlesController