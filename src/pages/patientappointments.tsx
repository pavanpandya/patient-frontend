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

  // State variables for modal
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>({});

  interface Appointment {
    id: number;
    date: string;
    time: string;
    doctor: string;
    specialty: string;
    reason?: string; // Reason for the appointment
    symptoms?: string; // Symptoms reported
    feedback?: string; // Doctor's feedback (for past appointments)
    rating?: number; // Rating (for past appointments)
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
        { id: 1, date: '2024-04-25', time: '10:00 AM', doctor: 'Dr. Anjali Patel', specialty: 'Cardiology', reason: 'Follow-up', symptoms: 'None' },
        { id: 2, date: '2024-05-05', time: '11:30 AM', doctor: 'Dr. Johnson', specialty: 'Dermatology', reason: 'Follow-up', symptoms: 'None' },
        { id: 3, date: '2024-04-15', time: '09:00 AM', doctor: 'Dr. Lee', specialty: 'Pediatrics', reason: 'Regular checkup', symptoms: 'None' },
        { id: 4, date: '2024-04-22', time: '02:00 PM', doctor: 'Dr. Wilson', specialty: 'Orthopedics', reason: 'Back pain', symptoms: 'Pain in lower back', rating: 5, feedback: 'Your treatment was good.' },
        { id: 5, date: '2024-04-23', time: '02:00 PM', doctor: 'Dr. Wilson', specialty: 'Orthopedics', reason: 'Follow-up', symptoms: 'None', rating: 5, feedback: 'Your treatment was effective.' },
        { id: 6, date: '2024-04-29', time: '10:00 AM', doctor: 'Dr. Smith', specialty: 'Cardiology', reason: 'Chest pain', symptoms: 'Chest pain and discomfort'},
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
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle submitting the review
  const submitReview = (rating: number, review: string) => {
    // Logic to submit the review to the server
    // You can implement this part as per your backend setup
    const updatedAppointment = { ...selectedAppointment, rating, feedback: review };
    // Update the appointment details state with the new review and rating
    const updatedAppointments = activeTab === 'upcoming' ?
      upcomingAppointments.map(appointment => appointment.id === selectedAppointment.id ? updatedAppointment : appointment) :
      pastAppointments.map(appointment => appointment.id === selectedAppointment.id ? updatedAppointment : appointment);
    // Set the updated appointments based on the active tab
    setActiveTab(activeTab);
    setShowModal(false); // Close the modal after submitting the review
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
              {appointment.feedback && (
                <>
                  <p className="font-semibold">Doctor's Feedback: {appointment.feedback}</p>
                  {appointment.rating && <p className="font-semibold">Rating: {appointment.rating}</p>}
                </>
              )}
              <button onClick={() => handleAppointmentClick(appointment)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">
                View Details
              </button>
              {activeTab === 'past' && !appointment.feedback && (
                <button onClick={() => handleReviewClick(appointment)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2 ml-2">
                  Add Review
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Function to handle clicking on the review button
  const handleReviewClick = (appointment: any) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
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

      {/* Modal for viewing appointment details or adding a review */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded-md z-20">
            <h3 className="text-xl font-bold mb-4">{selectedAppointment.doctor} - {selectedAppointment.date} - {selectedAppointment.time}</h3>
            {activeTab === 'upcoming' && (
              <>
                <p><span className="font-semibold">Reason:</span> {selectedAppointment.reason}</p>
                <p><span className="font-semibold">Symptoms:</span> {selectedAppointment.symptoms}</p>
              </>
            )}
            {activeTab === 'past' && (
              <>
                <p><span className="font-semibold">Doctor's Feedback:</span> {selectedAppointment.feedback}</p>
                {selectedAppointment.rating && <p><span className="font-semibold">Rating:</span> {selectedAppointment.rating}</p>}
              </>
            )}
            {activeTab === 'past' && !selectedAppointment.feedback && (
              <div className="mt-4">
                <label htmlFor="rating" className="block font-semibold">Rating:</label>
                <input type="number" id="rating" min={1} max={5} className="border border-gray-300 rounded-md px-4 py-2 mt-1" />
                <label htmlFor="review" className="block font-semibold mt-2">Review:</label>
                <textarea id="review" rows={3} className="border border-gray-300 rounded-md px-4 py-2 mt-1"></textarea>
                <button onClick={() => submitReview(5, 'Excellent')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Submit Review</button>
              </div>
            )}
            <button onClick={closeModal} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4">Close</button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default PatientAppointments;
