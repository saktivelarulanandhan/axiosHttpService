import React, { Component } from 'react';
import Axios from 'axios';

import Blog from './containers/Blog/Blog';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

Axios.interceptors.request.use( (req) => {
    console.log(req);
})

export default App;
