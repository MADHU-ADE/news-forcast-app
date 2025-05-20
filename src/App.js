import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

export default class App extends Component {
  pagesize = 10;
  country = "us";
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            
            <Route exact path="/business" element={<News key="business" pageSize={this.pagesize} country={this.country} category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.ageSize} country={this.country} category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" pageSize={this.pagesize} country={this.country} category="general" />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.ageSize} country={this.country} category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pagesize} country={this.country} category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pagesize} country={this.country} category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pagesize} country={this.country} category="technology" />} />
          </Routes>
          
        </Router>
      </div>
    )
  }
}