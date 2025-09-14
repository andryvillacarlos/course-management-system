// resources/js/Pages/Admin/UserListPage.jsx
import React, { useState } from "react";
import { Plus } from "lucide-react"; 
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button"; // adjust the path if needed

import SearchBox from "@/Components/utils/search";

// Sample users data
const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Student", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Instructor", status: "Inactive" },
  { id: 3, name: "Admin User", email: "admin@example.com", role: "Admin", status: "Active" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Student", status: "Active" },
  { id: 5, name: "Bob Johnson", email: "bob@example.com", role: "Instructor", status: "Inactive" },
];

export default function UserListPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all"); // default to "all"

  const filteredUsers = usersData.filter(user => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) &&
      (roleFilter === "all" || user.role === roleFilter)
    );
  });

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 w-full md:w-auto">
          {/* Search */}
          <SearchBox/>

          {/* Role Filter */}
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-full sm:w-auto">
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem> {/* non-empty value */}
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Instructor">Instructor</SelectItem>
              <SelectItem value="Student">Student</SelectItem>
            </SelectContent>
          </Select>

          {/* Add Teacher Button */}
         <Button
            onClick={() => alert("Redirect to add teacher page")}
            variant="blue"
            size="sm"
            className="flex items-center gap-2"
            >
            <Plus size={16} />
            Add Teacher
        </Button>

        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-400">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
