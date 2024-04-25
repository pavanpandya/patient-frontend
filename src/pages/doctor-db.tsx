import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Footer from '../components/Footer';
import Header from '../components/NavBard';

// Define type for event
interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

// Set up localizer to use moment.js for formatting
const localizer = momentLocalizer(moment);

const DoctorDashboard: React.FC = () => {
  // Sample appointments data (replace with actual data)
  const appointments: Event[] = [
    {
      id: 1,
      title: 'Appointment with John Doe',
      start: new Date(2024, 3, 23, 10, 0), // Year, Month (0-indexed), Day, Hour, Minute
      end: new Date(2024, 3, 23, 11, 0),
    },
    {
      id: 2,
      title: 'Appointment with Jane Smith',
      start: new Date(2024, 3, 24, 14, 0),
      end: new Date(2024, 3, 24, 15, 0),
    },
    {
      id: 3,
      title: 'Appointment with Nisarg Shah',
      start: new Date(2024, 3, 24, 18, 30),
      end: new Date(2024, 3, 24, 19, 30),
    },
    // Add more appointments here
  ];

  // Event prop getter function
  const eventPropGetter = (event: Event) => {
    const backgroundColor = '#00CC66'; // Green color for appointments
    return { style: { backgroundColor } };
  };

  return (
    <main>
      <Header />
      
      {/* Doctor Dashboard section */}
      <section className="py-6" style={{ background: "#d5c6e0" }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Hello Doctor, </h2>
        </div>
      </section>
      
      <div className="max-w-4xl mx-auto px-4 mt-5">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Calendar component */}
          <Calendar
            localizer={localizer}
            events={appointments}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }} // Set calendar height as needed
            eventPropGetter={eventPropGetter}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default DoctorDashboard;
