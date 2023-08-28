import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: true,
      page: 1, // setting the page number through the request parameter from the documentation
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Mohitz TV`;

  }

  async updateDate() {
    this.setState(this.props.setProgress(10))
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // Awaiting the data been fetched from the API
    let data = await fetch(url);
    this.setState(this.props.setProgress(30))
    let parseData = await data.json();
    this.setState(this.props.setProgress(70))
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    })
    this.setState(this.props.setProgress(100))
  }

  async componentDidMount() {
    this.updateDate();
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 })
    this.updateDate();
  };


  render() {

    const filteredArticles = this.state.articles.filter(article =>
      article.title.toLowerCase().includes(this.props.searchText.toLowerCase())
    );

    return (
      <>
        <div className="container">
          <h2 className={`text-${this.props.toggleColor}`} style={{ marginTop: '6rem' }}>
            Top News Headlines - {this.capitalizeFirstLetter(this.props.category)}
          </h2>
          {this.state.loading && this.state.articles.length === 0 ? (
            <Spinner toggleColor={this.props.toggleColor} />
          ) : filteredArticles.length === 0 ? (
            <h4 className={`text-${this.props.toggleColor}`}>No results found...</h4>
          ) : (
            <InfiniteScroll
              dataLength={filteredArticles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length <= this.state.totalResults}
              loader={<Spinner toggleColor={this.props.toggleColor} />}

            // if the aricles.length is not equal to the totalresults, so this condition will be always true, means there is more data to be fetched so that's why it's still showing the spinner so we are setting the condition as less than equal to

            // jab tak articles ki length total result se kam hai , tab spinner dikhao ,jaisi hi length total result ke barabar hui tab spinner mat dikao
            >
              <div className="container">
                <div className="row">
                  {filteredArticles.map((element, index) => (
                    <div className="my-4 col-lg-4 col-md-4 col-sm-6" key={index}>
                      <NewsItem
                        btnColor={this.props.btnColor}
                        toggleColor={this.props.toggleColor}
                        title={element.title && element.title.slice(0, 45)}
                        description={element.description && element.description.slice(0, 60)}
                        imgUrl={element.urlToImage}
                        LinkUrl={element.url}
                        author={element.author}
                        publishedAt={element.publishedAt}
                        searchText={this.props.searchText}  // Pass searchText to NewsItem
                      />
                    </div>
                  ))}
                </div>
              </div>
            </InfiniteScroll>
          )}
        </div>
      </>
    )
  }
}

export default News
