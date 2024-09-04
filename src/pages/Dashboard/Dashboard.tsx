import AdminDashboard from '../AdminDashboard/AdminDashboard';
import CustomerDashBoard from '../CustomerDashboard/CustomerDashboard';

function Dashboard() {
  return (
    <div>
      <CustomerDashBoard />
      <AdminDashboard />
    </div>
  );
}

export default Dashboard;
