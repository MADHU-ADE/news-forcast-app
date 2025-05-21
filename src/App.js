import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {


  pagesize = 5;
  country = "us";
  apiKey = "d9d5fbc457c1473d88f2d1cb0ce4f39c";
  //apiKey= process.env.REACT_APP_NEWS_API_KEY;
 
    // state is an object which is used to store the progress of the loading bar
  state = {
    //progress is a property which is used to set the progress of the loading bar
    progress: 0 
  }
  // setProgress is a Arrow function which is used to set the progress of the loading bar
  setProgress = (progress)=> {
    this.setState({progress: progress})
  }   
  render() {
    return (
      <div>
        <Router>
          <NavBar />
            <LoadingBar
              color="#f11946"
              height={1}
              progress={this.state.progress}
              // onLoaderFinished={() => setProgress(0)}
            />
          <Routes>
            {/* apiKey={this.apiKey} */}
            <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" pageSize={this.pagesize} country={this.country} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={this.ageSize} country={this.country} category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" pageSize={this.pagesize} country={this.country} category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" pageSize={this.ageSize} country={this.country} category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" pageSize={this.pagesize} country={this.country} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pagesize} country={this.country} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" pageSize={this.pagesize} country={this.country} category="technology" />} />
          </Routes>
          
        </Router>
      </div>
    )
  }
}

