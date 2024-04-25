import React, { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import Header from '../components/NavBar';

const DoctorSearchPage: React.FC = () => {
  // State variables to store search inputs and search results
  const [doctorName, setDoctorName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [location, setLocation] = useState('');
  const [covidCareSupport, setCovidCareSupport] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]); // Array to store search results

  const [showModal, setShowModal] = useState(false); // State variable to track modal visibility
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null); // State variable to store selected doctor data
  const [appointmentDate, setAppointmentDate] = useState(''); // State variable to store selected appointment date
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);


  const handleBookAppointment = (doctor: any) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

 // Sample data for doctors (replace with actual data from API)
  const doctorsData = [
    {
      firstName: 'John',
      lastName: 'Doe',
      ratings: 4.5,
      hospital: 'Hospital A',
      hospitalAddress: 'Address of Hospital A',
      speciality: 'Cardiology',
      covidCareSupport: true,
      schedule: {
        '2024-05-01': ['10:00 AM', '11:00 AM', '2:00 PM'], // Example schedule for May 1, 2024
        '2024-05-02': ['9:00 AM', '10:00 AM', '3:00 PM'], // Example schedule for May 2, 2024
        // Add more dates and time slots here
      },
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      ratings: 4.2,
      hospital: 'Hospital B',
      hospitalAddress: 'Address of Hospital B',
      speciality: 'Dermatology',
      covidCareSupport: false,
      schedule: {
        '2024-05-01': ['1:00 PM', '2:00 PM', '3:00 PM'],
        '2024-05-02': ['10:00 AM', '11:00 AM', '12:00 PM'],
        // Add more dates and time slots here
      },
    },
    {
      firstName: 'Anjali',
      lastName: 'Patel',
      ratings: 5.0,
      hospital: 'Hospital C',
      hospitalAddress: 'Address of Hospital C',
      speciality: 'Surgeon',
      covidCareSupport: true,
      schedule: {
        '2024-05-01': ['1:00 PM', '2:00 PM', '3:00 PM'],
        '2024-05-02': ['10:00 AM', '11:00 AM', '12:00 PM'],
        // Add more dates and time slots here
      },
    },
    // Add more doctor data here if needed
  ];
  // Function to handle search
  const handleSearch = () => {
    // Filter doctors based on search criteria
    const filteredDoctors = doctorsData.filter((doctor) => {
      return (
        doctor.firstName.toLowerCase().includes(doctorName.toLowerCase()) &&
        doctor.speciality.toLowerCase().includes(speciality.toLowerCase()) &&
        doctor.hospitalAddress.toLowerCase().includes(location.toLowerCase()) &&
        (covidCareSupport === '' || doctor.covidCareSupport === (covidCareSupport === 'true'))
      );
    });
    // Update search results
    setSearchResults(filteredDoctors);
  };

  // Function to fetch available time slots based on selected date
  const fetchAvailableTimeSlots = async () => {
    // Replace this with your logic to fetch available time slots from the server
    // Example: const timeSlots = await fetchTimeSlots(selectedDoctor.id, appointmentDate);
    const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM']; // Sample time slots
    setAvailableTimeSlots(timeSlots);
  };

  // Function to handle selecting a date
  const handleDateSelection = (date: string) => {
    setAppointmentDate(date);
    fetchAvailableTimeSlots(); // Fetch available time slots for the selected date
  };

  // Function to get available time slots for the selected date and doctor
  const getAvailableTimeSlots = (doctor: any, date: string) => {
    return doctor.schedule[date] || [];
  };

  // Function to handle selecting a time slot
  const handleTimeSlotSelection = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };

  // Function to handle booking appointment
const handleConfirmAppointment = () => {
  // Logic to confirm appointment
  console.log('Booking appointment with:', selectedDoctor, 'on', appointmentDate, 'at', selectedTimeSlot);
  // Show confirmation toast
  showConfirmationToast('Appointment booked successfully!');
  // Remove booked time slot from available time slots
  const updatedAvailableTimeSlots = availableTimeSlots.filter(timeSlot => timeSlot !== selectedTimeSlot);
  setAvailableTimeSlots(updatedAvailableTimeSlots);
  // Close the modal
  setShowModal(false);
  // Reset selected doctor, appointment date, and time slot
  setSelectedDoctor(null);
  setAppointmentDate('');
  setSelectedTimeSlot('');
};


  // Function to handle canceling appointment
  const handleCancelAppointment = () => {
    // Show cancelation toast
    showCancelationToast('Appointment canceled!');
    // Close the modal
    setShowModal(false);
    // Reset selected doctor and appointment date
    setSelectedDoctor(null);
    setAppointmentDate('');
  };

  // Function to show confirmation toast
  const showConfirmationToast = (message: string) => {
    toast.success(message, {
      position: "top-right",
    });
  };

  // Function to show cancelation toast
  const showCancelationToast = (message: string) => {
    toast.error(message, {
      position: "top-right",
    });
  };

  return (
    <main>
      <Header />
      <ToastContainer />
      {/* Doctor Search section */}
      <section className="py-8"  style={{background: "#d5c6e0"}}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Find a Doctor</h2>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* Doctor Name input */}
            <div className="flex flex-col flex-1">
              <label htmlFor="doctorName" className="mb-2">Doctor Name</label>
              <input
                id="doctorName"
                type="text"
                placeholder="Doctor Name"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              />
            </div>
            {/* Speciality input */}
            <div className="flex flex-col flex-1">
              <label htmlFor="speciality" className="mb-2">Speciality</label>
              <input
                id="speciality"
                type="text"
                placeholder="Speciality"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              />
            </div>
            {/* Location input */}
            <div className="flex flex-col flex-1">
              <label htmlFor="location" className="mb-2">Location</label>
              <input
                id="location"
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              />
            </div>
            {/* Covid Care Support dropdown */}
            <div className="flex flex-col flex-1">
              <label htmlFor="covidCareSupport" className="mb-2">Covid Care Support</label>
              <select
                id="covidCareSupport"
                value={covidCareSupport}
                onChange={(e) => setCovidCareSupport(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              >
                <option value="">Covid Care Support</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          {/* Search button */}
          <div className="flex justify-center">
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Display search results */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 max-h-[50vh] overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((doctor, index) => (
              <div key={index} className="bg-white p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold mb-2">{doctor.firstName} {doctor.lastName}</h3>
                <p className="text-gray-600 mb-2">Ratings: {doctor.ratings}</p>
                <p className="text-gray-600 mb-2">Hospital: {doctor.hospital}</p>
                <p className="text-gray-600 mb-2">Hospital Address: {doctor.hospitalAddress}</p>
                <p className="text-gray-600 mb-2">Speciality: {doctor.speciality}</p>
                <p className="text-gray-600 mb-2">Support Covid Care: {doctor.covidCareSupport ? 'Yes' : 'No'}</p>
                <button
                  onClick={() => handleBookAppointment(doctor)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedDoctor.firstName} {selectedDoctor.lastName}</h3>
                    <p className="text-sm text-gray-500">Hospital: {selectedDoctor.hospital}</p>
                    <p className="text-sm text-gray-500">Speciality: {selectedDoctor.speciality}</p>
                    <p className="text-sm text-gray-500">Ratings: {selectedDoctor.ratings}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Select Appointment Date</h3>
                <input
                  type="date"
                  value={appointmentDate}
                  onChange={(e) => handleDateSelection(e.target.value)}
                  className="mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 block w-full shadow-sm sm:text-sm"
                />
                <div className="mt-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Select Appointment Time Slot</h3>
                  {availableTimeSlots.map((timeSlot: string, index: number) => (
                    <div key={index} className="mt-2">
                      <input
                        type="radio"
                        id={`timeSlot${index}`}
                        name="timeSlot"
                        value={timeSlot}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                      <label htmlFor={`timeSlot${index}`} className="ml-2 block text-sm font-medium text-gray-700">{timeSlot}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleConfirmAppointment}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Confirm Appointment
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />  
    </main>
  );
}

export default DoctorSearchPage;
