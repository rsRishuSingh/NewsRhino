import React, { Component } from 'react'
import NewsItem from './NewsItem'
import leftArrow from './leftArrow.svg'
import rightArrow from './rightArrow.svg'
import Spinner from './Spinner'
export class News extends Component {
    articles = [];
    constructor(props) {
        super(props);
        // console.log("constructor called ", this.props.category)
        console.log("constructor called ")
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,

        }
        document.title = this.props.category + " - NewsRhino"

    }

    async getData(page) {
        this.props.setProgress(10)
        this.setState({
            loading: false
        })
        console.log("getData ", this.props.category)

        let category = this.props.category.charAt(0).toLowerCase() + this.props.category.slice(1)
        if (category === 'home') {
            category = "general"
        }
        console.log("getData -->  ", category)
        let url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=0f06b59c3a4942dcb3f3d1b3222a0b19&page=${page}&pageSize=20`
        console.log("Hello World")
        let response = await fetch(url)
        this.props.setProgress(30)
        let data = await response.json();
        this.props.setProgress(70)
        console.log(data)
        this.setState({
            articles: data.articles,
            totalArticle: data.totalResults,
            loading: true
        })
        this.props.setProgress(100)
    }
    // componentDidMount() {
    //     this.getData().then((data) => {
    //         this.setState({
    //             articles: data.articles,
    //         });
    //     }).catch((error) => {
    //         console.error("Error fetching data: ", error);
    //     });
    // }
    async componentDidMount() {
        await this.getData(this.state.page);

    }
    handleNextClick = async () => {
        await this.getData(this.state.page + 1);
        this.setState({
            page: this.state.page + 1,
            loading: true
        })

    }
    handlePreviousClick = async () => {
        await this.getData(this.state.page - 1);
        this.setState({
            page: this.state.page - 1,
            loading: true
        })
    }
    render() {
        return (
            <div>
                <div className='container-fluid d-flex justify-content-center my-3 '><h1 className='fw-bold'>New Rhino - Top headlines</h1></div>
                <div className='container-fluid d-flex justify-content-evenly  flex-wrap'>

                    {
                        this.state.loading && this.state.articles && this.state.articles.length > 0 ? (this.state.articles
                            .filter((element) => element.urlToImage) // Filter for elements with a valid `urlToImage`
                            .map((element) => (
                                <NewsItem
                                    key={element.url}
                                    title={element.title ? element.title : "Read more about news"}
                                    description={element.description ? element.description : "Read more about this news by clicking on the read more"}
                                    newsUrl={element.url}
                                    imgUrl={element.urlToImage}
                                    author={element.author}
                                    source={element.source.name}
                                    publishedAt={element.publishedAt}
                                />
                            ))
                        ) : <div className="container-fluid text-center d-flex justify-content-center">
                            <div className='d-flex align-items-center justify-content-end' >
                                <h3>Loading article...</h3>
                            </div>
                            <Spinner />
                        </div>}
                </div>
                <div className='container-fluid d-flex justify-content-between pt-5 pb-2'>
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePreviousClick}><img src={leftArrow} alt="" width="15" /> Previous</button>
                    <button type="button" disabled={this.state.page * 20 >= this.state.totalArticle} className="btn btn-primary" onClick={this.handleNextClick}>Next <img src={rightArrow} alt="" width="15" /></button>
                </div>
            </div>

        )
    }
}

export default News
