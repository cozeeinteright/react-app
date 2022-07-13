import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

/*
const today = new Date()
const todayDay = today.getDate()
console.log(todayDay)
*/

const yesterday = new Date("2022-07-12")
const day = yesterday.getDate()

function tileContent({ date, view }) {
  // Add class to tiles in month view only
  if (view ==='month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if(day === date.getDate())  {
      return 'My content';
    }
  }
}

function ShowCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} view={"month"} tileContent={tileContent} />
    </div>
  );
}
export default ShowCalendar
