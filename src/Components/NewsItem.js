import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    // This is de-structuring while can get the data from props and assinged to the variable called title,description etc.
    let {title, description, imageUrl,newsUrl,author,date} = this.props; 
    return (
      <div>
        <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className='text-muted'>By {author} on {date}</small></p>
            <a href={newsUrl}  target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}
