import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types';


export default class News extends Component {
  // Fix typo: articles, and use class property syntax
  articles = [
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ];

  // static defaultProps = {
  //   country: 'us',
  //   pageSize: 5,
  //   category: 'general'
  // };

  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string
  // };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1      
      
    }
    document.title=this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) 
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d9d5fbc457c1473d88f2d1cb0ce4f39c&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // Defensive: fallback to [] if parsedData.articles is undefined
    this.setState({
         articles: parsedData.articles,
         totalResults :parsedData.totalResults,
         loading: false
        });
  }

  async componentDidMount() {
    this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d9d5fbc457c1473d88f2d1cb0ce4f39c&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // // Defensive: fallback to [] if parsedData.articles is undefined
    // this.setState({
    //      articles: parsedData.articles,
    //      totalResults :parsedData.totalResults,
    //      loading: false
    //     });
  }
  
  handleNextClick = async()=>{
    this.setState({page: this.state.page + 1});
    this.updateNews();
    // if(!(this.state.page+1 > Math.ceil(this.totalResults / this.props.pageSize ))){
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d9d5fbc457c1473d88f2d1cb0ce4f39c&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState(
    //         {
    //             page: this.state.page + 1,
    //             articles: parsedData.articles ,
    //             loading: false
    //         }
    //     )
    // }
  };

  handlePrevClick = async()=>{
    this.setState({page: this.state.page - 1});
    this.updateNews();
    // console.log("Next");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d9d5fbc457c1473d88f2d1cb0ce4f39c&page=${this.state.page - 1}&pageSize==${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState(
    //     {
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     }
    // )
  };

  render() {
    return (
      <div className='container m-3'>
        <h1 className="text center" style={{margin :'35px opx'}}>  NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((arr) => {
            return (
              <div className="col-md-4" key={arr.url}>
                <NewsItem
                  title={arr.title ? arr.title.slice(0, 45) : ""}
                  description={arr.description ? arr.description.slice(0, 88) : ""}
                  imageUrl={arr.urlToImage}
                  newsUrl={arr.url}
                  author={arr.author ? arr.author : "Unknown"}
                  date={arr.publishedAt ? new Date(arr.publishedAt).toGMTString() : ""}
                />
              </div>
            )
          })}
        </div>
        <div className='container d-flex justify-content-between'>
            <button type="button" className="btn btn-dark mb-2" disabled ={this.state.page<=1} onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark mb-2" disabled ={this.state.page+1 > Math.ceil(this.totalResults / this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}