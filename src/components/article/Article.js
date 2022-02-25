import React from 'react'
import './article.css'
const Article = ({ imgSrc, date, title }) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={imgSrc} alt="blog" />
            </div>
            <div className="gpt3__blog-container_article-content">

                <div>
                    <p>
                        {date}

                    </p>

                    <h4>{title}</h4>
                </div>
                <p>
                    Read full Article
                </p>
            </div>
        </div>
    )
}

export default Article