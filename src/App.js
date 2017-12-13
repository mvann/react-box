import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout content={this.props.content} />
      </div>
    );
  }

}

export default App;
