import { createContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const GlobalData = createContext({
  events: [],
  handleDateClick: () => {},
  SeeMore: () => {},
  renderEventContent: () => {},
  dis: {},
});

const DataProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [dis, setDis] = useState(null);

  const handleDateClick = (info) => {
    console.log("clic");
    const eventTitle = prompt("Enter title");
    const eventDetail = prompt("Enter details");
    const eventType = prompt("Mention type - work or personal");

    if (eventTitle && eventDetail) {
      const newEvent = {
        id: Date.now(), // timestamp for unique ID
        title: eventTitle,
        details: eventDetail,
        type: eventType,
        start: info.dateStr,
        allDay: true,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      console.log("Event Added:", newEvent);
    }
  };

  const SeeMore = (event) => {
    const eventDetails = {
      title: event.title || "",
      details: event.extendedProps?.details || "",
      type: event.extendedProps?.type || "",
      start: event.startStr || "",
    };

    setDis(eventDetails);
  };

  useEffect(() => {
    if (dis !== null) {
      console.log("Displaying event details:", dis);
    }
  }, [dis]);

  const handelDelete = (id) => {
    console.log("Attempting to delete event with ID:", id);

    setEvents((prevEvents) => {
      const filtered = prevEvents.filter((item) => item.id != id);

      console.log("Updated events after deletion:", filtered);
      return filtered;
    });
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div className="event-details">
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.extendedProps.type}</i>
        <div className="event-details-button">
        <Link to={"/details"}>
          <button onClick={() => SeeMore(eventInfo.event)}>More</button>
        </Link>
        <button onClick={() => handelDelete(eventInfo.event.id)}>X</button>
        </div>
      
      </div>
    );
  };

  return (
    <GlobalData.Provider
      value={{ handleDateClick, SeeMore, renderEventContent, events, dis }}
    >
      {children}
    </GlobalData.Provider>
  );
};

export default DataProvider;
