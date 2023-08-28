import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import sun from './components/sun.png'
import moon from './components/moon.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {

  constructor() {
    super();
    this.state = {
      text: 'Enable Dark Mode',
      color: 'primary',
      btnColor: 'primary',
      toggleColor: 'dark',
      pageSize: 9,
      progress: 0,
      filter: 'invert(100%)',
      ThemeSrc: moon,
      API_key: '4e04335381df4ebaacf94b28bb1f7dd4',  // API key
      searchQuery: '',
      searchText: '',
    }
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }


  toggleMode = () => {
    if (this.state.text === 'Enable Dark Mode') {
      document.body.classList.add('darkMode');
      this.setState({
        text: 'Disable Dark Mode',
        color: 'dark',
        btnColor: 'light',
        toggleColor: 'light',
        filter: 'none',
        ThemeSrc: sun
      })
    }
    else {
      document.body.classList.remove('darkMode');
      this.setState({
        text: 'Enable Dark Mode',
        color: 'primary',
        btnColor: 'primary',
        toggleColor: 'dark',
        filter: 'invert(100%)',
        ThemeSrc: moon
      })
    }
  }

  handleSearch = (e) => {
    this.setState({ searchText: e.target.value });
  }


  render() {

    return (
      <div>
        <Router>
          <Navbar toggleMode={this.toggleMode} filter={this.state.filter} color={this.state.color} text={this.state.text} ThemeSrc={this.state.ThemeSrc} handleSearch={this.handleSearch} searchQuery={this.state.searchQuery} />
          {/* // Setting up the top loader */}
          <LoadingBar height={2} color='#f11946' progress={this.state.progress} />
          <Routes>
            <Route exact path='/' element={<News API_key={this.state.API_key} setProgress={this.setProgress} key='general' pageSize={this.state.pageSize} btnColor={this.state.btnColor} toggleColor={this.state.toggleColor} country={'in'} category={'general'} searchText={this.state.searchText} />} />

            <Route exact path='/business' element={<News API_key={this.state.API_key} setProgress={this.setProgress} key='business' pageSize={this.state.pageSize} btnColor={this.state.btnColor} toggleColor={this.state.toggleColor} country={'in'} category={'business'} searchText={this.state.searchText} />} />

            <Route exact path='/entertainment' element={<News API_key={this.state.API_key} setProgress={this.setProgress} key='entertainment' pageSize={this.state.pageSize} btnColor={this.state.btnColor} toggleColor={this.state.toggleColor} country={'in'} category={'entertainment'} searchText={this.state.searchText} />} />

            <Route exact path='/health' element={<News API_key={this.state.API_key} setProgress={this.setProgress} key='health' pageSize={this.state.pageSize} btnColor={this.state.btnColor} toggleColor={this.state.toggleColor} country={'in'} category={'health'} searchText={this.state.searchText} />} />

            <Route exact path='/science' element={<News API_key={this.state.API_key} setProgress={this.setProgress} key='science' pageSize={this.state.pageSize} btnColor={this.state.btnColor} toggleColor={this.state.toggleColor} country={'in'} category={'science'} searchText={this.state.searchText} />} />


            <Route exact path='/sports' element={<News API_key={this.state.API_key} setProgress={this.setProgress} key='sports' pageSize={this.state.pageSize} btnColor={this.state.btnColor} toggleColor={this.state.toggleColor} country={'in'} category={'sports'} searchText={this.state.searchText} />} />

            <Route exact path='/technology' element={<News API_key={this.state.API_key} setProgress={this.setProgress} key='technology' pageSize={this.state.pageSize} btnColor={this.state.btnColor} toggleColor={this.state.toggleColor} country={'in'} category={'technology'} searchText={this.state.searchText} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
