// resources/js/Pages/Admin/Dashboard.jsx
import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { User, Users, BookOpen } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function Dashboard({totalUsers,statusCount,roleCount}) {
  
  const stats = {
    totalUsers : totalUsers ?? 0,
    activeUsers: statusCount?.active ?? 'NA',
    roles: { Admin: roleCount?.admin ?? 0, Instructor:roleCount?.teacher ?? 0, Student: roleCount?.student ?? 0 },
    courses: { total: 20, active: 15 },
  };

  const userRolesData = {
    labels: Object.keys(stats.roles),
    datasets: [
      {
        label: 'Users by Role',
        data: Object.values(stats.roles),
        backgroundColor: ['#6366F1', '#F59E0B', '#10B981'],
        borderRadius: 5,
      },
    ],
  };

  const userStatusData = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        label: 'User Status',
        data: [stats.activeUsers, stats.totalUsers - stats.activeUsers],
        backgroundColor: ['#10B981', '#EF4444'],
      },
    ],
  };

  const coursesData = {
    labels: ['Active Courses', 'Inactive Courses'],
    datasets: [
      {
        label: 'Courses Status',
        data: [stats.courses.active, stats.courses.total - stats.courses.active],
        backgroundColor: ['#6366F1', '#9CA3AF'],
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'top', labels: { font: { size: 12 } } } },
  };

  // Modern card style
  const statCard = (title, value, icon) => (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex items-center space-x-4 hover:shadow-xl transition">
      <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">{icon}</div>
      <div>
        <h2 className="text-gray-400 text-sm">{title}</h2>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statCard('Total Users', stats.totalUsers, <Users size={24} />)}
        {statCard('Active Users', stats.activeUsers, <User size={24} />)}
        {statCard('Total Courses', stats.courses.total, <BookOpen size={24} />)}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col" style={{ minHeight: '250px' }}>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Users by Role</h2>
          <div className="flex-1">
            <Pie data={userRolesData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col" style={{ minHeight: '250px' }}>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">User Status</h2>
          <div className="flex-1">
            <Doughnut data={userStatusData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col md:col-span-2" style={{ minHeight: '300px' }}>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Courses Status</h2>
          <div className="flex-1">
            <Bar data={coursesData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
