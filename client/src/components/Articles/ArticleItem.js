import React from "react"

const ArticleItem = (props) => {
    const {title, thumbnail, description, pubDate, link} = props

    const backgroundStyle = {
        height : '200px', 
        backgroundImage : `url(${thumbnail})`, 
        backgroundSize : 'cover', 
        backgroundPosition : "0% 50%" 
    }
    return (
        <div className="card bg-dark text-white border-dark mt-4 shadow" style={backgroundStyle}>
            <div className="card-img-overlay">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Published : {pubDate}</p>
                <span><a target="_blank" href={link}>View Full Article {`>>`}</a></span>
            </div>
        </div>
    )
}

export default ArticleItem