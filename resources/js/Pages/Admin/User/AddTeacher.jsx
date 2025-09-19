import React, { useState } from "react";
import Input from "@/Components/utils/Input";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AddTeacher = ({ onClose, isOpen }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md relative border border-gray-200 max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={22} />
            </button>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
              Add Teacher
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="relative">
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent"
                  placeholder="Full Name"
                />
                <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all 
                                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                                 peer-placeholder-shown:text-base peer-focus:top-2 
                                 peer-focus:text-sm peer-focus:text-blue-600">
                  Full Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent"
                  placeholder="Email Address"
                />
                <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all 
                                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                                 peer-placeholder-shown:text-base peer-focus:top-2 
                                 peer-focus:text-sm peer-focus:text-blue-600">
                  Email Address
                </label>
              </div>

              {/* Password */}
              <div className="relative">
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent"
                  placeholder="Password"
                />
                <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all 
                                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                                 peer-placeholder-shown:text-base peer-focus:top-2 
                                 peer-focus:text-sm peer-focus:text-blue-600">
                  Password
                </label>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent"
                  placeholder="Confirm Password"
                />
                <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all 
                                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                                 peer-placeholder-shown:text-base peer-focus:top-2 
                                 peer-focus:text-sm peer-focus:text-blue-600">
                  Confirm Password
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white 
                           py-3 px-4 rounded-lg font-semibold shadow-md transition"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddTeacher;
