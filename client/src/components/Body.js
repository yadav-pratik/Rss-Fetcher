import React from "react"

import ArticlesList from "./Articles/ArticlesList"
import UserSelection from "./Articles/UserSelection"

const Body = (props) => {
    return (
        <div className="container">
            <UserSelection />
            <ArticlesList />
        </div>
    )
}

export default Body