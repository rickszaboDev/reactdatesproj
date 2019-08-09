import React, { Component } from 'react';

import 'react-dates/initialize'

import './App.css';

import DatePickerRangeWrapper from './DateRangePickerWrapper/DateRangePickerWrapper'

const moment = require('moment');

class App extends Component {

  constructor(){
    super()
    this.state = {
      dateStart : '',
      dateEnd : ''
    }
  }

  OnDateSet = (date, state) => {
    let dateStrValue = date.toDate().toISOString().split('T')[0];
    this.setState( {[state] : dateStrValue} )

    return date
  }

  render(){
    return <div className="App">
      <DatePickerRangeWrapper stateDateWrapper={this.OnDateSet} />
    </div>
  }
}

export default App;