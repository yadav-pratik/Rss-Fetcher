const cron = require('node-cron');
const axios = require('axios')

const Article = require('../models/article')

const startCron = () => {
    
    // TOI Latest
    cron.schedule('*/2 * * * *', async () => {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}?rss_url=https://timesofindia.indiatimes.com/rssfeedmostrecent.cms&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`)
            const articles = data.items.map(article => {
                return {...article, 
                    pubDate : article.pubDate.split(' ').join('T'), 
                    source : 'TOI', 
                    category : 'latest'
                }
            })
            const insertedArticles = await Article.insertMany(articles, {ordered : false})
        } catch (error) {
            if(error.code !== 11000){
                console.log(error)
            }
        }
        console.log('running a task every two minute', new Date());
    })

    //TOI cricket

    cron.schedule('*/2 * * * *', async () => {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}?rss_url=https://timesofindia.indiatimes.com/rssfeeds/54829575.cms&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`)
            const articles = data.items.map(article => {
                return {...article, 
                    pubDate : article.pubDate.split(' ').join('T'), 
                    description : article.description.split('>')[1],
                    source : 'TOI', 
                    category : 'cricket'
                }
            })
            const insertedArticles = await Article.insertMany(articles,{ordered : false})
        } catch (error) {
            if(error.code !== 11000){
                console.log(error)
            }
        }
    })

    // //TOI India

    cron.schedule('*/2 * * * *', async () => {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}?rss_url=https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`)
            const articles = data.items.map(article => {
                return {...article, 
                    pubDate : article.pubDate.split(' ').join('T'), 
                    description : article.description.split('</a>')[1],
                    source : 'TOI', 
                    category : 'india'
                }
            })
            const insertedArticles = await Article.insertMany(articles,{ordered : false})
        } catch (error) {
            if(error.code !== 11000){
                console.log(error)
            }
        }
    })

    // //TOI technology

    cron.schedule('*/2 * * * *', async () => {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}?rss_url=https://timesofindia.indiatimes.com/rssfeeds/66949542.cms&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`)
            const articles = data.items.map(article => {
                return {...article, 
                    pubDate : article.pubDate.split(' ').join('T'),
                    description : article.description.split('</a>')[1], 
                    source : 'TOI', 
                    category : 'technology'
                }
            })
            const insertedArticles = await Article.insertMany(articles,{ordered : false})
        } catch (error) {
            if(error.code !== 11000){
                console.log(error)
            }
        }
    })

    // //NDTV latest

    cron.schedule('*/2 * * * *', async () => {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}?rss_url=https://feeds.feedburner.com/ndtvnews-latest&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`)
             const articles = data.items.map(article => {
                 return {...article, 
                        thumbnail : article.enclosure ? article.enclosure.link : "",
                        pubDate : article.pubDate.split(' ').join('T'), 
                        source : 'NDTV', 
                        category : 'latest'
                    }
            })
            const insertedArticles = await Article.insertMany(articles,{ordered : false})
        } catch (error) {
            if(error.code !== 11000){
                console.log(error)
            }
        }
    })

    // //NDTV India

    cron.schedule('*/2 * * * *', async () => {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}?rss_url=https://feeds.feedburner.com/ndtvnews-india-news&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`)
            const articles = data.items.map(article => {
                return {...article, 
                        thumbnail : article.enclosure ? article.enclosure.link : "",
                        pubDate : article.pubDate.split(' ').join('T'), 
                        source : 'NDTV', 
                        category : 'india'
                    }
            })
            const insertedArticles = await Article.insertMany(articles,{ordered : false})
        } catch (error) {
            if(error.code !== 11000){
                console.log(error)
            }
        }
    })

    // //NDTV technology

    cron.schedule('*/2 * * * *', async () => {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}?rss_url=https://feeds.feedburner.com/gadgets360-latest&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`)
            const articles = data.items.map(article => {
                return {...article, 
                        thumbnail : article.enclosure ? article.enclosure.link : "",
                        pubDate : article.pubDate.split(' ').join('T'), 
                        source : 'NDTV', 
                        category : 'technology'
                    }
            })
            const insertedArticles = await Article.insertMany(articles,{ordered : false})
        } catch (error) {
            if(error.code !== 11000){
                console.log(error)
            }
        }
    })

    // NDTV cricket

    cron.schedule('*/2 * * * *', async () => {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}?rss_url=https://feeds.feedburner.com/ndtvsports-cricket&count=${process.env.ARTICLES_COUNT}&api_key=${process.env.API_KEY}`)
            const articles = data.items.map(article => {
                return {...article, 
                        thumbnail : article.enclosure ? article.enclosure.link : "",
                        pubDate : article.pubDate.split(' ').join('T'), 
                        source : 'NDTV', 
                        category : 'cricket'
                    }
            })
            const insertedArticles = await Article.insertMany(articles,{ordered : false})
        } catch (error) {
            if(error.code !== 11000){
                console.log(error)
            }
        }
    })
}

module.exports = startCron