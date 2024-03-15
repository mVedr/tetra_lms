import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";
import moment from "moment";
export default function UserCalender() {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);
  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toArray(),
      title: event.title,
    });
  };

  async function handleEventAdd(data) {
    await axios.post("/api/calendar/create-event", data.event);
  }

  async function handleDatesSet(data) {
    const response = await axios.get(
      "/api/calendar/get-events?start=" +
        moment(data.start).toISOString() +
        "&end=" +
        moment(data.end).toISOString()
    );
    setEvents(response.data);
  }
  return (
    <>
      <section>
        {/* <button onClick={() => setModalOpen(true)}>Add Event</button> */}
        <div style={{ position: "relative", zIndex: 0 }}>
          <FullCalendar
            datesSet={(date) => handleDatesSet(date)}
            ref={calendarRef}
            events={events}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            eventAdd={(event) => handleEventAdd(event)}
          />
        </div>

        {/* <AddEventModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onEventAdded={(event) => onEventAdded(event)}
        /> */}
      </section>
    </>
  );
}
