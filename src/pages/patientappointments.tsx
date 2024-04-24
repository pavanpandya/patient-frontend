import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/NavBar';

const PatientAppointments: React.FC = () => {
  // Sample data for all appointments
  const [allAppointments, setAllAppointments] = useState<any[]>([]);

  // State variables for upcoming and past appointments
  const [upcomingAppointments, setUpcomingAppointments] = useState<any[]>([]);
  const [pastAppointments, setPastAppointments] = useState<any[]>([]);
  
  // State variable to track active tab (upcoming or past appointments)
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  interface Appointment {
    id: number;
    date: string;
    time: string;
    doctor: string;
    specialty: string;
  }
  
  const filterAppointments = () => {
    const today = new Date();
    const filteredUpcoming: Appointment[] = [];
    const filteredPast: Appointment[] = [];
  
    allAppointments.forEach((appointment: Appointment) => {
      const appointmentDate = new Date(appointment.date);
      if (appointmentDate >= today) {
        filteredUpcoming.push(appointment);
      } else {
        filteredPast.push(appointment);
      }
    });
  
    setUpcomingAppointments(filteredUpcoming);
    setPastAppointments(filteredPast);
  };

  // Sample data for all appointments (replace with actual API call)
  useEffect(() => {
    // Simulating API call to fetch appointments
    const fetchData = async () => {
      // Replace this with actual API call
      const data = [
        { id: 1, date: '2024-04-30', time: '10:00 AM', doctor: 'Dr. Smith', specialty: 'Cardiology' },
        { id: 2, date: '2024-05-05', time: '11:30 AM', doctor: 'Dr. Johnson', specialty: 'Dermatology' },
        { id: 3, date: '2024-04-15', time: '09:00 AM', doctor: 'Dr. Lee', specialty: 'Pediatrics' },
        { id: 4, date: '2024-04-22', time: '02:00 PM', doctor: 'Dr. Wilson', specialty: 'Orthopedics' },
        { id: 5, date: '2024-04-23', time: '02:00 PM', doctor: 'Dr. Wilson', specialty: 'Orthopedics' },
        { id: 6, date: '2024-04-29', time: '10:00 AM', doctor: 'Dr. Smith', specialty: 'Cardiology' },
      ];
      setAllAppointments(data);
    };

    fetchData();
  }, []);

  // Run filterAppointments whenever allAppointments changes
  useEffect(() => {
    filterAppointments();
  }, [allAppointments]);

  // Function to handle clicking on a tab to switch between upcoming and past appointments
  const handleTabClick = (tab: 'upcoming' | 'past') => {
    setActiveTab(tab);
  };

  // Function to handle clicking on an appointment (to display modal)
  const handleAppointmentClick = (appointment: any) => {
    // Logic to display modal with appointment details
  };

  // Function to render appointments list
  const renderAppointments = (appointments: any[]) => {
    return (
      <div className="overflow-y-auto max-h-96">
        <ul className="mt-4">
          {appointments.map(appointment => (
            <li key={appointment.id} className="border-b py-4">
              <p className="font-semibold">Date: {appointment.date}</p>
              <p className="font-semibold">Time: {appointment.time}</p>
              <p className="font-semibold">Doctor: {appointment.doctor}</p>
              <p className="font-semibold">Specialty: {appointment.specialty}</p>
              <button onClick={() => handleAppointmentClick(appointment)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <main>
      <Header />
      
      {/* Patient Appointments section */}
      <section className="py-8" style={{background: "#d5c6e0"}}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">My Appointments</h2>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 mt-5">
          {/* Tabs for switching between upcoming and past appointments */}
          <div className="flex justify-center">
            <button onClick={() => handleTabClick('upcoming')} className={`mr-4 py-2 px-4 ${activeTab === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-md font-semibold`}>Upcoming Appointments</button>
            <button onClick={() => handleTabClick('past')} className={`py-2 px-4 ${activeTab === 'past' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-md font-semibold`}>Past Appointments</button>
          </div>
          {/* Render either upcoming or past appointments based on activeTab state */}
          <div className="mt-4">
            {activeTab === 'upcoming' ? renderAppointments(upcomingAppointments) : renderAppointments(pastAppointments)}
          </div>
        </div>

      <Footer />
    </main>
  );
}

export default PatientAppointments;
