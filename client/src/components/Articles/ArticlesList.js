import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { startGetArticles } from "../../actions/articlesActions"

const ArticlesList = (props) => {
    const dispatch = useDispatch()

    const {source, category} = useSelector((state)=>{
        return state
    })
    useEffect(()=>{
        dispatch(startGetArticles(source, category))
    },[source, category])
    return (
        <div>
            ArticlesList
    
        </div>
    )
}

export default ArticlesList