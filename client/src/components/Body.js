import React from "react"
import { Route } from 'react-router-dom'

import ArticlesList from "./Articles/ArticlesList"

const Body = (props) => {
    return (
        <div className="container">
            <h2>Body</h2>

            <Route path="/articles/list" component={ArticlesList}/>
        </div>
    )
}

export default Body