import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/NavBar';

const DoctorSearchPage: React.FC = () => {
  // State variables to store search inputs
  const [doctorName, setDoctorName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [location, setLocation] = useState('');
  const [covidCareSupport, setCovidCareSupport] = useState('');

  // Function to handle search
  const handleSearch = () => {
    // Perform search based on inputs
    // You can implement the search logic here
  };

  return (
    <main>
      <Header />
      
      {/* Doctor Search section */}
      <section className="bg-blue-200 py-8">
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

      <Footer />
    </main>
  );
}

export default DoctorSearchPage;
