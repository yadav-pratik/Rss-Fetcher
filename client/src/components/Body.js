import React from "react"

import ArticlesList from "./Articles/ArticlesList"
import Pagination from "./Articles/PaginationComp"
import UserSelection from "./Articles/UserSelection"

const Body = (props) => {
    return (
        <div className="container">
            <UserSelection />
            <ArticlesList />
            <Pagination />
        </div>
    )
}

export default Body