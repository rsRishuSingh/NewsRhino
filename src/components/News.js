import React, { useState, useEffect, useCallback } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    document.title = props.category + " - NewsRhino"
    let [articles, setArticles] = useState([])
    let [loading, setLoading] = useState(false)
    let [page, setPage] = useState(1)
    let [totalArticle, setTotalArticle] = useState(0)

    let getData = async (page) => {
        props.setProgress(10)

        let category = props.category.charAt(0).toLowerCase() + props.category.slice(1)
        if (category === 'home') {
            category = "general"
        }
        let url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=0f06b59c3a4942dcb3f3d1b3222a0b19&page=${page}&pageSize=20`
        props.setProgress(30)
        let response = await fetch(url)
        props.setProgress(70)
        let data = await response.json();
        props.setProgress(100)
        return data;

    }

    let fetchMoreData = async () => {
        let data = await getData(page + 1)
        setPage(page + 1)
        setArticles(articles.concat(data.articles))
        setTotalArticle(data.totalResults)

    }
    useEffect(() => {
        const fetchData = async () => {
            setLoading(false);
            const data = await getData(page);
            setArticles(data.articles);
            setTotalArticle(data.totalResults);
            setLoading(true);
        };

        fetchData();

    }, []); // Runs whenever `page` changes





    return (
        <div style={{
            position: "relative",
            top: "8vh"
        }}>
            <div className='container-fluid d-flex justify-content-center my-3 '><h1 className='fw-bold'>NewsRhino - Top headlines</h1></div>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={totalArticle !== articles.length}
                loader={<Spinner />}
            >
                <div className='container-fluid d-flex justify-content-evenly  flex-wrap' style={{ paddingBottom: " 87px" }}>

                    {
                        loading && articles && articles.length > 0 ? (articles
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
                        </div>}
                </div>
            </InfiniteScroll>
        </div>

    )

}

export default News
