import React, { Component } from 'react'

import 'react-dates/constants'
import 'react-dates/lib/css/_datepicker.css'

import { DateRangePicker } from 'react-dates'
import { START_DATE, END_DATE } from 'react-dates/lib/constants';

import PropTypes from 'prop-types'
import { css, withStyles } from './withStyles'

const moment = require('moment')

class DateRangePickerWrapper extends Component {
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
          startDate: startDate && stateDateWrapper(startDate, 'dateStart'),
          endDate: endDate && stateDateWrapper(endDate, 'dateEnd')
        })
      }
    
      onFocusChange = (focusedInput) => {
        this.setState( {focusedInput} )
      }
    
      render() {
        return (
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="02190391_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="123109_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              displayFormat='DD/MM/YYYY'
              numberOfMonths={6}
            />
        );
      }
}

export default DateRangePickerWrapper