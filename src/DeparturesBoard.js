import React, { Component } from 'react';
import moment from 'moment'

class DeparturesBoard extends Component {
  render() {
    let dayOfWeek = moment().format('dddd');
    let currentDate = moment().format('MM-DD-YYYY');
    let currentTime = moment().format('h:mm A');

    return (
      <div className="bg-black max-w-lg mb-8 mx-auto p-4 rounded">
        <div className="flex justify-between mb-2">
          <div className="text-yellow text-xl">
            {dayOfWeek}
            <br />
            {currentDate}
          </div>
          <h1 className="text-grey text-xl uppercase">{this.props.name} Information</h1>
          <div className="text-right text-xl text-yellow">
            <span className="uppercase">Current Time</span><
            br />
            {currentTime}
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-grey">Carrier</th>
              <th className="text-grey">Time</th>
              <th className="text-grey">Destination</th>
              <th className="text-grey">Train#</th>
              <th className="text-grey">Track#</th>
              <th className="text-grey">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(item => (
              <tr key={item.Trip}>
                <td className="text-yellow">MBTA</td>
                <td className="text-yellow">{moment.unix(item.ScheduledTime).format('h:mm A')}</td>
                <td className="text-yellow uppercase">{item.Destination}</td>
                <td className="text-yellow">{item.Trip}</td>
                <td className="text-center text-yellow">{item.Track || 'TBD'}</td>
                <td className="text-green">{item.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DeparturesBoard;
