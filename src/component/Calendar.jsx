import React, { useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { GlobalData } from "../store/context";

function Calendar() {
  const { handleDateClick, renderEventContent, events } =
    useContext(GlobalData);

  return (
    <div className="calendar">
      <h1 className="cal-head">Calender</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events} // Pass the events to FullCalendar
        dateClick={handleDateClick} // Handle date click to add events
        eventContent={renderEventContent} // Custom event rendering
      />
    </div>
  );
}

export default Calendar;
