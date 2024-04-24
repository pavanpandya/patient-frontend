import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/NavBar';

const DoctorSearchPage: React.FC = () => {
  // State variables to store search inputs and search results
  const [doctorName, setDoctorName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [location, setLocation] = useState('');
  const [covidCareSupport, setCovidCareSupport] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]); // Array to store search results

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
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      ratings: 4.2,
      hospital: 'Hospital B',
      hospitalAddress: 'Address of Hospital B',
      speciality: 'Dermatology',
      covidCareSupport: false,
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

  // Function to handle booking appointment
  const handleBookAppointment = (doctor: any) => {
    // Logic to open modal for filling questionnaire and booking appointment slot
    console.log('Booking appointment with:', doctor);
  };

  return (
    <main>
      <Header />
      
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
        <div className="max-w-4xl mx-auto px-4">
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

      <Footer />
    </main>
  );
}

export default DoctorSearchPage;
