import { useState } from "react";
import { Link } from "@inertiajs/react"; // <-- Link import
import {
  Users,
  BookOpen,
  ClipboardList,
  GraduationCap,
  BarChart3,
  DollarSign,
  Settings,
  Bell,
  Shield,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminSidebar({ mobileOpen, setMobileOpen }) {
  const [activeDropdowns, setActiveDropdowns] = useState([]);

  const toggleDropdown = (name) => {
    if (activeDropdowns.includes(name)) {
      setActiveDropdowns(activeDropdowns.filter((n) => n !== name));
    } else {
      setActiveDropdowns([...activeDropdowns, name]);
    }
  };

  const menuItems = [
    { name: "User Management", icon: Users, href: "/dashboard" },
    {
      name: "Course Management",
      icon: BookOpen,
      sub: [
        { name: "Add Course", href: "/admin/courses/add" },
        { name: "Assign Teacher", href: "/admin/courses/assign-teacher" },
        { name: "Curriculum Setup", href: "/admin/courses/curriculum" },
      ],
    },
    {
      name: "Departments & Classes",
      icon: GraduationCap,
      sub: [
        { name: "Add Department", href: "/admin/departments/add" },
        { name: "Create Section", href: "/admin/sections/create" },
        { name: "Assign Students", href: "/admin/sections/assign-students" },
      ],
    },
    { name: "Enrollment", icon: ClipboardList, href: "/admin/enrollment" },
    {
      name: "Grades & Evaluation",
      icon: ClipboardList,
      sub: [
        { name: "View Grades", href: "/admin/grades/view" },
        { name: "Approve Grades", href: "/admin/grades/approve" },
        { name: "Generate Transcript", href: "/admin/grades/transcript" },
      ],
    },
    {
      name: "Reports & Analytics",
      icon: BarChart3,
      sub: [
        { name: "Student Reports", href: "/admin/reports/students" },
        { name: "Teacher Reports", href: "/admin/reports/teachers" },
        { name: "Attendance", href: "/admin/reports/attendance" },
      ],
    },
    { name: "Finance & Billing", icon: DollarSign, href: "/admin/finance" },
    { name: "System Settings", icon: Settings, href: "/admin/settings" },
    { name: "Notifications", icon: Bell, href: "/admin/notifications" },
    { name: "Audit & Security", icon: Shield, href: "/admin/audit" },
  ];

  const SidebarContent = () => (
    <div className="w-64 bg-gradient-to-b from-indigo-600 to-blue-500 text-white min-h-screen p-4 shadow-lg">
      <h2 className="text-lg font-bold mb-8 text-center">Admin Panel</h2>

      <ul className="space-y-3">
        {menuItems.map((item, index) => {
          const isOpen = activeDropdowns.includes(item.name);
          return (
            <li key={index}>
              {item.sub ? (
                <div
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-white hover:bg-opacity-20 cursor-pointer transition"
                >
                  <div className="flex items-center space-x-3">
                    <item.icon size={20} className="text-yellow-300" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition space-x-3"
                >
                  <item.icon size={20} className="text-yellow-300" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              )}

              <AnimatePresence>
                {item.sub && isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-8 mt-2 space-y-2 text-sm text-gray-100"
                  >
                    {item.sub.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className="block p-2 rounded-md hover:bg-white hover:bg-opacity-10 transition"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <>
      <div className="hidden md:block">
        <SidebarContent />
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          ></div>

          <div className="relative w-64 bg-gradient-to-b from-indigo-600 to-blue-500 text-white shadow-lg">
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}
