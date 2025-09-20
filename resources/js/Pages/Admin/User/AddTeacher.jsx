import React from "react";
import Input from "@/Components/utils/Input";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "@inertiajs/react";

const AddTeacher = ({ onClose, isOpen }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route("teacher.store"), {
      onSuccess: () => {
        reset(); // clear form after success
        onClose(); // close modal
      },
    });
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
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className={`peer w-full px-3 pt-5 pb-2 border rounded-lg 
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent 
                    ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Full Name"
                />
                <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all 
                                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                                 peer-placeholder-shown:text-base peer-focus:top-2 
                                 peer-focus:text-sm peer-focus:text-blue-600">
                  Full Name
                </label>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className={`peer w-full px-3 pt-5 pb-2 border rounded-lg 
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent 
                    ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Email Address"
                />
                <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all 
                                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                                 peer-placeholder-shown:text-base peer-focus:top-2 
                                 peer-focus:text-sm peer-focus:text-blue-600">
                  Email Address
                </label>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <Input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  className={`peer w-full px-3 pt-5 pb-2 border rounded-lg 
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent 
                    ${errors.password ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Password"
                />
                <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all 
                                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                                 peer-placeholder-shown:text-base peer-focus:top-2 
                                 peer-focus:text-sm peer-focus:text-blue-600">
                  Password
                </label>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <Input
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  onChange={handleChange}
                  className={`peer w-full px-3 pt-5 pb-2 border rounded-lg 
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent 
                    ${errors.password_confirmation ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Confirm Password"
                />
                <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all 
                                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                                 peer-placeholder-shown:text-base peer-focus:top-2 
                                 peer-focus:text-sm peer-focus:text-blue-600">
                  Confirm Password
                </label>
                {errors.password_confirmation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password_confirmation}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={processing}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white 
                           py-3 px-4 rounded-lg font-semibold shadow-md transition disabled:opacity-50"
              >
                {processing ? "Submitting..." : "Submit"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddTeacher;
