import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/NavBard';



// Sample testimonials data (replace with actual data)
const testimonialsData = [
  {
    id: 1,
    patientName: 'John Doe',
    message: 'Great doctor! Very knowledgeable and caring.',
    rating: 5, // Rating out of 5
  },
  {
    id: 2,
    patientName: 'Jane Smith',
    message: 'Excellent experience. Would highly recommend.',
    rating: 4,
  },
  {
    id: 3,
    patientName: 'Alice Johnson',
    message: 'Wonderful staff and excellent service.',
    rating: 5,
  },
  {
    id: 4,
    patientName: 'Michael Brown',
    message: 'Professional and efficient. Made me feel comfortable throughout the appointment.',
    rating: 5,
  },
  {
    id: 5,
    patientName: 'Emily Davis',
    message: 'Friendly and knowledgeable doctor. Answered all my questions thoroughly.',
    rating: 4,
  },
  {
    id: 6,
    patientName: 'David Wilson',
    message: 'Prompt service and clean facilities. Would recommend to friends and family.',
    rating: 5,
  },
  {
    id: 7,
    patientName: 'Sarah Martinez',
    message: 'Very satisfied with the treatment received. Will definitely return for future appointments.',
    rating: 4,
  },
  {
    id: 8,
    patientName: 'James Taylor',
    message: 'Professional and courteous staff. The doctor was attentive and addressed all my concerns.',
    rating: 5,
  },
  {
    id: 9,
    patientName: 'Olivia Anderson',
    message: 'Exceptional care and expertise. The doctor provided personalized treatment and advice.',
    rating: 5,
  },
  {
    id: 10,
    patientName: 'William Thomas',
    message: 'Great experience overall. The staff was friendly and helpful.',
    rating: 4,
  },
  {
    id: 11,
    patientName: 'Sophia White',
    message: 'Highly recommend this doctor. Professional and knowledgeable.',
    rating: 5,
  },
  {
    id: 12,
    patientName: 'Liam Harris',
    message: 'Excellent bedside manner. Made me feel comfortable and relaxed during the appointment.',
    rating: 4,
  },
];


const DoctorTestimonials: React.FC = () => {
  // State variable to store testimonials
  const [testimonials, setTestimonials] = useState(testimonialsData);

  return (
    <main>
      <Header />
      
      {/* Testimonials section */}
      <section className="py-8" style={{ background: "#d5c6e0" }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        </div>
      </section>
      
      <div className="max-w-4xl mx-auto px-4 mt-5 max-h-[60vh] overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
              <p className="text-lg font-semibold mb-2">Patient: {testimonial.patientName}</p>
              <p className="mb-4">{testimonial.message}</p>
              <p className="text-lg font-semibold">Rating: {testimonial.rating}/5</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default DoctorTestimonials;
