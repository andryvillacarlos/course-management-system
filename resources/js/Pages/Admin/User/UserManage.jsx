// resources/js/Pages/Admin/UserManage.jsx
import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import Dashboard from './partial/Dashboard';
import UserListPage from './partial/UserList';
import { usePage } from '@inertiajs/react';



export default function UserManage() {

  const {teacherData,filters,roleCount,statusCount,totalUsers} = usePage().props;
  
  return (
    <AdminLayout>
      <div className="space-y-12">
        {/* Dashboard Section */}
        <section>
          <Dashboard roleCount={roleCount} totalUsers={totalUsers} statusCount={statusCount}/>
        </section>

        {/* Users List Section */}
        <section>
          <UserListPage filters={filters} teacherList={teacherData}/>
        </section>
      </div>
    </AdminLayout>
  );
}
