import React from "react"

const ArticleItem = (props) => {
    const {title, thumbnail, description} = props
    return (
        <div>
            title : {title}
        </div>
    )
}

export default ArticleItem