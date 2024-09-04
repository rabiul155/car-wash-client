import React from 'react';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard';

function Dashboard() {
  return (
    <div>
      <CustomerDashboard />
      <AdminDashboard />
    </div>
  );
}

export default Dashboard;
