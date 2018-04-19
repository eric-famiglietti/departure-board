import React, { Component } from 'react';
import * as Papa from 'papaparse';
import DeparturesBoard from './DeparturesBoard';

const INTERVAL = 10 * 1000;
const URL = 'http://localhost:8000/departures.php';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  fetchData() {
    Papa.parse(URL, {
      download: true,
      dynamicTyping: true,
      header: true,
      complete: results => {
        this.setState({ data: results.data });
      }
    });
  }

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => this.fetchData(), INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.data) {
      let northStationData = this.state.data.filter(item => item.Origin === 'North Station');
      let southStationData = this.state.data.filter(item => item.Origin === 'South Station');
      return (
        <div className="container mx-auto pt-8">
          <DeparturesBoard name="North Station" data={northStationData} />
          <DeparturesBoard name="South Station" data={southStationData} />
        </div>
      );
    }
    return <p className="p-4">Loading...</p>;
  }
}

export default App;
