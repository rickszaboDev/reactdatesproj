import React, { Component } from 'react';

import 'react-dates/initialize'
import 'react-dates/constants'
import 'react-dates/lib/css/_datepicker.css'

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'

import './App.css';
import { START_DATE, END_DATE } from 'react-dates/lib/constants';

const moment = require('moment');

class App extends Component {
  constructor(props){
    super(props)

    let focusedInput = null
    if(props.autoFocus) {
      focusedInput = START_DATE
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE
    }

    this.state = {
      focusedInput,
      startDate : props.initialStartDate,
      endDate : props.initialEndDate
    }

  }

  onDatesChange = ({ startDate, endDate }) => {
    const { stateDateWrapper } = this.props
    this.setState({
      startDate: startDate && stateDateWrapper(startDate),
      endDate: endDate && stateDateWrapper(endDate)
    })
  }

  onFocusChange = (focusedInput) => {
    this.setState( {focusedInput} )
  }

  render() {
    return (
      <div className="App">
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="02190391_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="123109_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
      </div>
    );
  }
}

export default App;
