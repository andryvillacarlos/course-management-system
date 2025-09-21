import React, { useState } from "react";
import { Plus, Search, X, ArrowLeft } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import AddTeacher from "../AddTeacher";
import { router } from "@inertiajs/react";

export default function UserListPage({ teacherList, filters }) {
  const [isAddTeacherOpen, setIsAddTeacherOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(filters.search || "");

  const users = teacherList?.data || [];

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    router.get(
      route("admin.dashboard"),
      { ...filters, search: searchInput },
      { preserveState: true, replace: true }
    );
  };

  // Handle reset search
  const handleResetSearch = () => {
    setSearchInput("");
    router.get(
      route("admin.dashboard"),
      { ...filters, search: "" },
      { preserveState: true, replace: true }
    );
  };

  // Handle role filter
  const handleRoleChange = (value) => {
    router.get(
      route("admin.dashboard"),
      { ...filters, role: value },
      { preserveState: true, replace: true }
    );
  };

  // Handle pagination
  const handlePageChange = (url) => {
    if (!url) return;
    router.get(url, filters, { preserveState: true, replace: true });
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 w-full md:w-auto">
          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="relative flex items-center w-full sm:w-72"
          >
            {filters.search ? (
              <button
                type="button"
                onClick={handleResetSearch}
                className="absolute left-3 text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft size={18} />
              </button>
            ) : (
              <Search
                size={18}
                className="absolute left-3 text-gray-400 pointer-events-none"
              />
            )}

            <input
              type="text"
              className="w-full border rounded-lg pl-9 pr-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Search by name or email"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            {searchInput && (
              <button
                type="button"
                onClick={handleResetSearch}
                className="absolute right-3 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </form>

          {/* Role Filter */}
          <Select
            value={filters.role || "all"}
            onValueChange={handleRoleChange}
          >
            <SelectTrigger className="w-full sm:w-auto">
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="instructor">Instructor</SelectItem>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
            </SelectContent>
          </Select>

          <Button
            onClick={() => setIsAddTeacherOpen(true)}
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-4 text-center text-gray-400"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
        {/* Showing results info */}
        <p className="text-sm text-gray-500">
          Showing <span className="font-medium">{teacherList.meta.from}</span>–
          <span className="font-medium">{teacherList.meta.to}</span> of{" "}
          <span className="font-medium">{teacherList.meta.total}</span> results
        </p>

        {/* Pagination Buttons */}
        <div className="flex space-x-1">
          {teacherList.meta.links.map((link, index) => (
            <button
              key={index}
              disabled={!link.url}
              onClick={() => handlePageChange(link.url)}
              className={`px-3 py-1 rounded-md text-sm transition ${
                link.active
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } ${!link.url ? "opacity-50 cursor-not-allowed" : ""}`}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          ))}
        </div>
      </div>

      {/* Modal (Add Teacher Form) */}
      {isAddTeacherOpen && (
        <AddTeacher
          isOpen={isAddTeacherOpen}
          onClose={() => setIsAddTeacherOpen(false)}
        />
      )}
    </div>
  );
}
