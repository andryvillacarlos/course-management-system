// resources/js/Pages/Admin/UserManage.jsx
import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import Dashboard from './partial/Dashboard';
import UserListPage from './partial/UserList';
import { usePage } from '@inertiajs/react';



export default function UserManage() {

  const {teacherData} = usePage().props;
  
  return (
    <AdminLayout>
      <div className="space-y-12">
        {/* Dashboard Section */}
        <section>
          <Dashboard />
        </section>

        {/* Users List Section */}
        <section>
          <UserListPage teacherList={teacherData}/>
        </section>
      </div>
    </AdminLayout>
  );
}
