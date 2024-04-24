import React from 'react';
import Header2 from "../components/NavBari";

const InsuranceProviderDashboard = () => {
  // Static provider details
  const provider = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  // Static insurance package details
  const insurancePackage = {
    insurance_provider: 'Anthem',
    plan_name: 'Anthem-Medium',
    plan_description: 'Anyone can take this. Covers all the basic things',
    plan_cost: 700,
    includes_prescription: true,
    includes_dental: true,
    includes_vision: false
  };

  return (
    <div style={styles.container}>
      <Header2 />
      <header style={styles.header}>
        <h1>Welcome, Insurance Provider</h1>
      </header>
      <section style={styles.section}>
        <h2>Provider Details</h2>
        <div style={styles.content}>
          <p><strong>Name:</strong> {provider.name}</p>
          <p><strong>Email:</strong> {provider.email}</p>
        </div>
      </section>
      <section style={styles.section}>
        <h2>Insurance Package Details</h2>
        <div style={styles.content}>
          <p><strong>Insurance Provider:</strong> {insurancePackage.insurance_provider}</p>
          <p><strong>Plan Name:</strong> {insurancePackage.plan_name}</p>
          <p><strong>Description:</strong> {insurancePackage.plan_description}</p>
          <p><strong>Cost:</strong> ${insurancePackage.plan_cost}</p>
          <p><strong>Includes Prescription:</strong> {insurancePackage.includes_prescription ? 'Yes' : 'No'}</p>
          <p><strong>Includes Dental:</strong> {insurancePackage.includes_dental ? 'Yes' : 'No'}</p>
          <p><strong>Includes Vision:</strong> {insurancePackage.includes_vision ? 'Yes' : 'No'}</p>
        </div>
      </section>
      <section style={styles.section}>
        <h2>Advertisements</h2>
        <div style={styles.content}>
          <p>Special offer: Get 20% off on all insurance plans!</p>
          <p>Secure your future with our comprehensive insurance coverage.</p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center' as const, // Ensure textAlign is of type TextAlign
    marginBottom: '20px',
  },
  section: {
    marginBottom: '40px',
  },
  content: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default InsuranceProviderDashboard;
