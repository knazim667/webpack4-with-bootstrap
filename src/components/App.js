import React, { Component } from 'react';
import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>

        <h1>Hello world</h1>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>
        <button type="button" className="btn btn-link">Link</button>
        <Navbar />
      </div>

      
    )
  }
}
export default App;