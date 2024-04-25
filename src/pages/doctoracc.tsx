import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/NavBard';

const DoctorProfile: React.FC = () => {
  // Sample doctor data (replace with actual data)
  const [doctorData, setDoctorData] = useState({
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    licenseNumber: '1234567890',
    speciality: 'Cardiology',
    mobile: '+1234567890',
    hospital: 'City Hospital',
    provideCovidCare: true,
  });

  // State to track whether the profile is in edit mode
  const [editMode, setEditMode] = useState(false);

  // Function to handle changes in profile data
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setDoctorData(prevData => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  // Function to handle saving changes
  const handleSave = () => {
    // Perform save action (e.g., make API call to update doctor data)
    console.log('Saving changes:', doctorData);
    // For demo purposes, we'll just toggle edit mode off
    setEditMode(false);
  };

  return (
    <main>
      <Header />
      
      {/* Doctor Profile section */}
      <section className="py-8" style={{background: "#d5c6e0"}}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Doctor Profile</h2>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 mt-5">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-4">Professional Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-semibold">First Name:</p>
              {editMode ? (
                <input
                  type="text"
                  name="firstName"
                  value={doctorData.firstName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{doctorData.firstName}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Last Name:</p>
              {editMode ? (
                <input
                  type="text"
                  name="lastName"
                  value={doctorData.lastName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{doctorData.lastName}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Email:</p>
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={doctorData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{doctorData.email}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">License Number:</p>
              {editMode ? (
                <input
                  type="text"
                  name="licenseNumber"
                  value={doctorData.licenseNumber}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{doctorData.licenseNumber}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Speciality:</p>
              {editMode ? (
                <input
                  type="text"
                  name="speciality"
                  value={doctorData.speciality}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{doctorData.speciality}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Mobile:</p>
              {editMode ? (
                <input
                  type="tel"
                  name="mobile"
                  value={doctorData.mobile}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{doctorData.mobile}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Hospital:</p>
              {editMode ? (
                <input
                  type="text"
                  name="hospital"
                  value={doctorData.hospital}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{doctorData.hospital}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Provide Covid Care:</p>
              {editMode ? (
                <input
                  type="checkbox"
                  name="provideCovidCare"
                  checked={doctorData.provideCovidCare}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{doctorData.provideCovidCare ? 'Yes' : 'No'}</p>
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

export default DoctorProfile;
