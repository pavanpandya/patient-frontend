import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/NavBar';

const InsuranceProviderSearchPage: React.FC = () => {
  // State variables to store search inputs
  const [companyName, setCompanyName] = useState('');
  const [price, setPrice] = useState('');
  const [medicalIncluded, setMedicalIncluded] = useState('');
  const [dentalIncluded, setDentalIncluded] = useState('');
  const [visionIncluded, setVisionIncluded] = useState('');

  // Function to handle search
  const handleSearch = () => {
    // Perform search based on inputs
    // You can implement the search logic here
  };

  return (
    <main>
      <Header />
      
      {/* Insurance Provider Search section */}
      <section className="bg-green-200 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Find Insurance Providers</h2>
          <div className="flex flex-col md:flex-row md:space-x-4 justify-center">
            {/* Company Name input */}
            <div className="flex flex-col flex-1">
              <label htmlFor="companyName" className="mb-2">Company Name</label>
              <input
                id="companyName"
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              />
            </div>
            {/* Price input */}
            <div className="flex flex-col flex-1">
              <label htmlFor="price" className="mb-2">Price</label>
              <input
                id="price"
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              />
            </div>
            {/* Medical Included dropdown */}
            <div className="flex flex-col flex-1">
              <label htmlFor="medicalIncluded" className="mb-2">Medical Included</label>
              <select
                id="medicalIncluded"
                value={medicalIncluded}
                onChange={(e) => setMedicalIncluded(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              >
                <option value="">Medical Included</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            {/* Dental Included dropdown */}
            <div className="flex flex-col flex-1">
              <label htmlFor="dentalIncluded" className="mb-2">Dental Included</label>
              <select
                id="dentalIncluded"
                value={dentalIncluded}
                onChange={(e) => setDentalIncluded(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              >
                <option value="">Dental Included</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            {/* Vision Included dropdown */}
            <div className="flex flex-col flex-1">
              <label htmlFor="visionIncluded" className="mb-2">Vision Included</label>
              <select
                id="visionIncluded"
                value={visionIncluded}
                onChange={(e) => setVisionIncluded(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              >
                <option value="">Vision Included</option>
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

export default InsuranceProviderSearchPage;
