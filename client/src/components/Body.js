import React from "react"

import ArticlesList from "./Articles/ArticlesList"
import Pagination from "./Articles/PaginationComp"
import UserSelection from "./Articles/UserSelection"
import ModalComp from "./Modal"

const Body = (props) => {
    return (
        <div className="container">
            <ModalComp />
            <UserSelection />
            <ArticlesList />
            <Pagination />
        </div>
    )
}

export default Body