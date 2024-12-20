import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import leftArrow from './leftArrow.svg'
// import rightArrow from './rightArrow.svg'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    articles = [];
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalArticle: 0,
            currentlyLoaded: 0
        }
        document.title = this.props.category + " - NewsRhino"

    }

    async getData(page) {
        this.props.setProgress(10)

        let category = this.props.category.charAt(0).toLowerCase() + this.props.category.slice(1)
        if (category === 'home') {
            category = "general"
        }
        let url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=0f06b59c3a4942dcb3f3d1b3222a0b19&page=${page}&pageSize=20`
        this.props.setProgress(30)
        let response = await fetch(url)
        this.props.setProgress(70)
        let data = await response.json();
        this.props.setProgress(100)
        return data;

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
        this.setState({
            loading: false
        })
        let data = await this.getData(this.state.page);
        this.setState({
            loading: true,
            articles: data.articles,
            totalArticle: data.totalResults
        })
    }
    // handleNextClick = async () => {
    //     await this.getData(this.state.page + 1);
    //     this.setState({
    //         page: this.state.page + 1,
    //         loading: true
    //     })

    // }
    // handlePreviousClick = async () => {
    //     await this.getData(this.state.page - 1);
    //     this.setState({
    //         page: this.state.page - 1,
    //         loading: true
    //     })
    // }

    fetchMoreData = async () => {
        let data = await this.getData(this.state.page + 1)
        this.setState({
            page: this.state.page + 1,
            articles: this.state.articles.concat(data.articles),
            totalArticle: data.totalResults
        })
    }
    render() {
        return (
            <div style={{
                position: "relative",
                top: "8vh"
            }}>
                <div className='container-fluid d-flex justify-content-center my-3 '><h1 className='fw-bold'>NewsRhino - Top headlines</h1></div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.totalArticle !== this.state.articles.length}
                    loader={<Spinner />}
                >
                    <div className='container-fluid d-flex justify-content-evenly  flex-wrap' style={{ paddingBottom: " 87px" }}>

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
                                {/* <Spinner /> */}
                            </div>}
                    </div>
                </InfiniteScroll>
                {/* <div className='container-fluid d-flex justify-content-between pt-5' style={{
                    paddingBottom: "6.5rem"
                }}>
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePreviousClick}><img src={leftArrow} alt="" width="15" /> Previous</button>
                    <button type="button" disabled={this.state.page * 20 >= this.state.totalArticle} className="btn btn-primary" onClick={this.handleNextClick}>Next <img src={rightArrow} alt="" width="15" /></button>
                </div> */}
            </div>

        )
    }
}

export default News
