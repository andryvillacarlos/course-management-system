import { useState } from "react";
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
  const [activeDropdowns, setActiveDropdowns] = useState([]); // multiple dropdowns open

  const toggleDropdown = (name) => {
    if (activeDropdowns.includes(name)) {
      setActiveDropdowns(activeDropdowns.filter((n) => n !== name));
    } else {
      setActiveDropdowns([...activeDropdowns, name]);
    }
  };

  const menuItems = [
    { name: "User Management", icon: Users },
    {
      name: "Course Management",
      icon: BookOpen,
      sub: ["Add Course", "Assign Teacher", "Curriculum Setup"],
    },
    {
      name: "Departments & Classes",
      icon: GraduationCap,
      sub: ["Add Department", "Create Section", "Assign Students"],
    },
    { name: "Enrollment", icon: ClipboardList },
    {
      name: "Grades & Evaluation",
      icon: ClipboardList,
      sub: ["View Grades", "Approve Grades", "Generate Transcript"],
    },
    {
      name: "Reports & Analytics",
      icon: BarChart3,
      sub: ["Student Reports", "Teacher Reports", "Attendance"],
    },
    { name: "Finance & Billing", icon: DollarSign },
    { name: "System Settings", icon: Settings },
    { name: "Notifications", icon: Bell },
    { name: "Audit & Security", icon: Shield },
  ];

  const SidebarContent = () => (
    <div className="w-64 bg-gradient-to-b from-indigo-600 to-blue-500 text-white min-h-screen p-4 shadow-lg">
      {/* Logo */}
      <h2 className="text-lg font-bold mb-8 text-center">Admin Panel</h2>

      {/* Menu Items */}
      <ul className="space-y-3">
        {menuItems.map((item, index) => {
          const isOpen = activeDropdowns.includes(item.name);
          return (
            <li key={index}>
              {/* Parent Item */}
              <div
                onClick={() => item.sub && toggleDropdown(item.name)}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-white hover:bg-opacity-20 cursor-pointer transition"
              >
                <div className="flex items-center space-x-3">
                  <item.icon size={20} className="text-yellow-300" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>

                {item.sub && (
                  isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />
                )}
              </div>

              {/* Submenu with animation */}
              <AnimatePresence>
                {item.sub && isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-8 mt-2 space-y-2 text-sm text-gray-100"
                  >
                    {item.sub.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="p-2 rounded-md hover:bg-white hover:bg-opacity-10 cursor-pointer transition"
                      >
                        {subItem}
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
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative w-64 bg-gradient-to-b from-indigo-600 to-blue-500 text-white shadow-lg">
            {/* Close Button */}
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
