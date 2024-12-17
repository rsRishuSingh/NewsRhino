import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    static defaultProps = {
        title: "This article has no title",
        description: "This article has no description",
        imgUrl: "https://compote.slate.com/images/73634925-adf2-45de-a328-e04e275ef6bb.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560"
    }
    static propsType = {
        title: PropTypes.string,
        description: PropTypes.string,
        imgUrl: PropTypes.string,
        newsUrl: PropTypes.string
    }

    render() {
        let { title, description, newsUrl, imgUrl } = this.props;
        return (
            <div className="card m-2" style={{ width: "18rem" }}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-primary btn-sm">Read more</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
