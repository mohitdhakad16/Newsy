import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let { title, description, imgUrl, LinkUrl, author, publishedAt, searchText } = this.props;
    const titleMatchesSearch = title.toLowerCase().includes(searchText.toLowerCase());
    let d = new Date(publishedAt);
    publishedAt = `${d.toDateString()} at ${d.toLocaleTimeString()}`;

    if (!titleMatchesSearch) {
      // return null; // Don't render the component if title doesn't match
      <h1>NO items matched</h1>
    }

    return (
      <div className={`container my-3 d-flex justify-content-center align-items-center`}>
        <div className="card" style={{ width: "20rem" }}>
          {/* Adding the ternary operator if the image is null display a default image */}
          <img src={imgUrl === null ? "https://hightimes.com/wp-content/uploads/2023/06/shutterstock_1131760754-scaled.jpg" : imgUrl} style={{ width: "auto", height: '12rem' }} className="card-img-top" alt="new-img" />
          <div className={`card-body bg-${this.props.toggleColor === 'light' ? 'dark' : 'light'}`}>
            <h5 className={`card-title text-${this.props.toggleColor}`}>{title}...</h5>
            <p className={`card-text text-${this.props.toggleColor}`}>{description === null ? "Diabetes will be a defining disease of this century" : description}...</p>
            <div className={`card-text`}><small className={'text-secondary'}>By {!author ? 'Anonymous' : author}</small></div>
            <div><small className={`text-secondary`}>{publishedAt}</small></div>
            <a href={LinkUrl} target='_blank' rel="noreferrer" className={`btn mt-3 btn-sm btn-${this.props.btnColor}`}>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
