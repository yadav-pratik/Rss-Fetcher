import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { startGetArticles } from "../../actions/articlesActions"

import ArticleItem from "./ArticleItem"

const ArticlesList = (props) => {
    const dispatch = useDispatch()

    const {source, category, pageNo, postsPerPage, articles} = useSelector((state)=>{
        return state
    })
    useEffect(()=>{
        dispatch(startGetArticles(source, category, pageNo, postsPerPage))
    },[source, category, pageNo, postsPerPage])
    return (
        <div>
            {articles.map(article => {
                return <ArticleItem
                    key={article._id}
                    {...article}
                />
            })}
        </div>
    )
}

export default ArticlesList