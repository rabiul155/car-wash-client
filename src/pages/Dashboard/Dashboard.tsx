import React from 'react';
import CustomerDashBoard from '../CustomerDashBoard.tsx/CustomerDashBoard';
import AdminDashboard from '../AdminDashBoard.tsx/AdminDashboard';

function Dashboard() {
  return (
    <div>
      <CustomerDashBoard />
      <AdminDashboard />
    </div>
  );
}

export default Dashboard;
