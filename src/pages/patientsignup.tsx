import { useState } from 'react';
import Header from "../components/NavBar";

const API_URL = 'https://pims-service.onrender.com/api/patient/signup/';

export default function PatientSignUp() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");
  const [gender, setGender] = useState("");
  const [blood_group_type, setblood_group_type] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");


  const genders = ["Male", "Female", "Other"];
  const blood_group_types = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleRegistration = async () => {
    // Validate password and confirm password
    if (password !== confirm_password) {
      setPasswordError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          address,
          date_of_birth,
          gender,
          blood_group_type,
          mobile,
          password,
          confirm_password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setRegistrationMessage("Registration successful. Welcome to Medilink!");
        console.log('Registration successful:', data);
        // Reset form fields after successful registration
        setfirst_name("");
        setlast_name("");
        setEmail("");
        setAddress("");
        setdate_of_birth("");
        setGender("");
        setblood_group_type("");
        setMobile("");
        setPassword("");
        setconfirm_password("");
        setPasswordError("");
      } else {
        console.error('Registration failed:', response.status);
        setRegistrationMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setRegistrationMessage('An error occurred during registration. Please try again.');
    }
  };

  return (
    <main>
      <Header />
      <div className="flex justify-center mt-20">
        <div className="w-96">
          <h1 className="font-bold text-4xl mb-8">Patient Registration</h1>
          {registrationMessage && <div className="bg-green-200 text-green-800 px-4 py-2 rounded-md mb-4">{registrationMessage}</div>}
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => setfirst_name(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => setlast_name(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              placeholder="Date of Birth"
              value={date_of_birth}
              onChange={(e) => setdate_of_birth(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              {genders.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <select
              value={blood_group_type}
              onChange={(e) => setblood_group_type(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Blood Group</option>
              {blood_group_types.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border ${passwordError ? 'border-red-500' : 'border-gray-400'} rounded-md focus:outline-none focus:border-blue-500`}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirm_password}
              onChange={(e) => {
                setconfirm_password(e.target.value);
                setPasswordError("");
              }}
              className={`w-full px-4 py-2 border ${passwordError ? 'border-red-500' : 'border-gray-400'} rounded-md focus:outline-none focus:border-blue-500`}
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>
          <button onClick={handleRegistration} className="bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg">
            Register as Patient
          </button>
        </div>
      </div>
    </main>
  );
}
