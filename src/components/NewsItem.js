import React from 'react'
import PropTypes from 'prop-types'

let getDate = (publishedAt) => {
    const isoDate = publishedAt;
    const date = new Date(isoDate);

    // Get individual components
    const day = date.toLocaleString('en-IN', { day: '2-digit', timeZone: 'Asia/Kolkata' });
    const month = date.toLocaleString('en-IN', { month: '2-digit', timeZone: 'Asia/Kolkata' });
    const year = date.toLocaleString('en-IN', { year: 'numeric', timeZone: 'Asia/Kolkata' });
    const time = date.toLocaleString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' });

    return `${day}/${month}/${year} ${time}`;


}

const NewsItem = (props) => {


    let { title, description, newsUrl, imgUrl, author, source, publishedAt } = props;

    return (

        <div className="card m-2" style={{ width: window.screen.width > '630' ? "18rem" : "" }}>
            <div className='container-fluid border b d-flex justify-content-center '>
                <span className="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger" >
                    {source}
                </span>
            </div>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">{author}
                    <br /> {getDate(publishedAt)}</small></p>
                <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-primary btn-sm">Read more</a>
            </div>

        </div >
    )
}
NewsItem.defaultProps = {
    title: "This article has no title",
    description: "This article has no description",
    imgUrl: "https://compote.slate.com/images/73634925-adf2-45de-a328-e04e275ef6bb.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560"
}
NewsItem.propsType = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    newsUrl: PropTypes.string
}

export default NewsItem
