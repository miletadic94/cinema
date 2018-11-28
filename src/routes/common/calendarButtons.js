import React from 'react'
import moment from 'moment'
import { daysInWeek, whatDayIsIt } from '../../helpers/daysInWeek'

const CalendarButtons = ({ }) => {
    return (
        daysInWeek.map((day, index) => (
            <div key={index}>
                <div className="btn btn-week">
                    <span>{whatDayIsIt(moment(day).day())}</span>
                    <hr />
                    <span>{moment(day).format('DD/MM')}</span>
                </div>
            </div>
        ))
    )
}

export default CalendarButtons