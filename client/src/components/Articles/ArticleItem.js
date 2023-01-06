import React, { useState } from "react"

const ArticleItem = (props) => {
    const {title, thumbnail, description, pubDate, link} = props

    const backgroundStyle = {
        height : '200px', 
        backgroundImage : `url(${thumbnail ? thumbnail : 'https://static.apkdone.me/wp-content/uploads/2020/11/News-by-The-Times-of-India-Newspaper-poster.jpg'})`, 
        backgroundSize : 'cover', 
        backgroundPosition : "0% 25%" 
    }

    const anchorStyle = {
        textDecoration : 'none',
        color : 'white'
    }
    return (
        <div className="card bg-dark text-white border-dark mt-4 shadow" style={backgroundStyle}>
            <div className="card-img-overlay" >
                <h5 className="card-title">{title}</h5>
                <div className="d-flex flex-column justify-content-end">
                    <p className="card-text">{description}</p>
                    <div className="row">
                        <p className="card-text col-md-9">Published : {pubDate.split('T').join(' at ')}</p>
                        <span className="col-md-3"><a target="_blank" href={link} style={anchorStyle}>View Full Article {`>>`}</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleItem