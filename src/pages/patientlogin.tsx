import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const API_URL = 'https://pims-service.onrender.com/api/patient/login/';

const PatientLogin: React.FC = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/api/patient/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Patient login successful:', data);
        // Add your logic to handle the successful login response
        router.push('/duo');
      } else {
        console.error('Patient login failed:', response.status);
        // Add your logic to handle the login failure
      }
    } catch (error) {
      console.error('Error during patient login:', error);
      // Add your logic to handle network or other errors
    }
  };

  return (
    <main>
      <nav className="flex justify-between bg-gray-800 h-16 w-screen align-center text-milk text-slate-100 px-8">
        <Logo />
        <div className="flex items-center mr-1">
          <Link className="font-black pr-14 text-2xl" href="/faq">FAQ</Link>
          <Link className="font-black pr-14 text-2xl" href="/about">About Us</Link>
          <Link className="font-black pr-14 text-2xl" href="/login">Register</Link>
        </div>
      </nav>
      <div className="flex justify-center mt-20">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl mt-2 text-blue-800">
            Welcome to Medilink, your trusted partner for healthcare management
          </h1>
          <div className="mt-8 max-w-md w-full">
            <div className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Patient Login</h2>
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <div className="flex justify-between mb-4">
                <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Patient Sign In
                </button>
                <Link href="/forgot-password">
                  <div className="text-sm text-gray-1200 cursor-pointer">Forgot Password?</div>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4 text-purple-800">New User?</h2>
              <Link href="/patientsignup">
                <button className="bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default PatientLogin;
