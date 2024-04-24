import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/NavBar';

const API_URL = 'https://pims-service.onrender.com/api/patient/profile/';

const PatientProfile: React.FC = () => {
  const [patientData, setPatientData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    mobile: '',
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Fetch patient data from the API
    const fetchPatientData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add any necessary headers for authentication or authorization
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPatientData(data);
        } else {
          console.error('Failed to fetch patient data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatientData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatientData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers for authentication or authorization
        },
        body: JSON.stringify(patientData),
      });

      if (response.ok) {
        console.log('Patient data updated successfully');
        setEditMode(false);
      } else {
        console.error('Failed to update patient data:', response.status);
      }
    } catch (error) {
      console.error('Error updating patient data:', error);
    }
  };

  return (
    <main>
      <Header />

      {/* Patient Profile section */}
      <section className="py-8" style={{ background: "#d5c6e0" }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Patient Profile</h2>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 mt-5">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-semibold">First Name:</p>
              {editMode ? (
                <input
                  type="text"
                  name="firstName"
                  value={patientData.firstName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{patientData.firstName}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Last Name:</p>
              {editMode ? (
                <input
                  type="text"
                  name="lastName"
                  value={patientData.lastName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{patientData.lastName}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Email:</p>
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={patientData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{patientData.email}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Address:</p>
              {editMode ? (
                <input
                  type="text"
                  name="address"
                  value={patientData.address}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{patientData.address}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Date of Birth:</p>
              {editMode ? (
                <input
                  type="date"
                  name="dateOfBirth"
                  value={patientData.dateOfBirth}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{patientData.dateOfBirth}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Gender:</p>
              {editMode ? (
                <input
                  type="text"
                  name="gender"
                  value={patientData.gender}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{patientData.gender}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Blood Group Type:</p>
              {editMode ? (
                <input
                  type="text"
                  name="bloodGroup"
                  value={patientData.bloodGroup}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{patientData.bloodGroup}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Mobile:</p>
              {editMode ? (
                <input
                  type="tel"
                  name="mobile"
                  value={patientData.mobile}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{patientData.mobile}</p>
              )}
            </div>
          </div>
          {/* Render Save and Edit buttons based on edit mode */}
          <div className="mt-6">
            {editMode ? (
              <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
                Save
              </button>
            ) : (
              <button onClick={() => setEditMode(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
                Edit
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default PatientProfile;
