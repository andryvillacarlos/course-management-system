import LandingPageLayout from "@/Layouts/LandingPageLayout";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, Star, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const iconRotate = {
  hidden: { rotate: -15, scale: 0.8, opacity: 0 },
  visible: { rotate: 0, scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function LandingPage() {
  return (
    <LandingPageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Manage Courses with Ease
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
        >
          A powerful Course Management System that helps administrators, instructors, and students collaborate efficiently.
        </motion.p>
        <motion.a
          href="#features"
          whileHover={{ scale: 1.05 }}
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Get Started
        </motion.a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            { icon: BookOpen, title: "Course Management", desc: "Create, update, and organize courses with an easy-to-use dashboard." },
            { icon: Users, title: "User Roles", desc: "Manage administrators, instructors, and students with flexible role assignments." },
            { icon: Award, title: "Progress Tracking", desc: "Track student progress and generate reports for better learning outcomes." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <motion.div variants={iconRotate}>
                <item.icon className="mx-auto text-indigo-600 w-12 h-12 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[ 
            { icon: CheckCircle, title: "Sign Up", desc: "Create your account quickly and securely." },
            { icon: BookOpen, title: "Create Courses", desc: "Add courses, modules, and lessons in minutes." },
            { icon: Users, title: "Track Progress", desc: "Monitor student performance and generate reports." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <motion.div variants={iconRotate}>
                <item.icon className="mx-auto w-12 h-12 text-indigo-600 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            { name: "Jane Doe", role: "Instructor", desc: "This system has transformed how I manage my courses. Highly recommended!" },
            { name: "John Smith", role: "Administrator", desc: "Simple, intuitive, and efficient. Makes tracking students’ progress easy." },
            { name: "Alice Johnson", role: "Student", desc: "A must-have tool for any educational institution looking to modernize their courses." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <motion.div variants={iconRotate}>
                <Star className="mx-auto w-12 h-12 text-yellow-400 mb-4" />
              </motion.div>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-gray-400 text-sm">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6">Sign up now and make your course management effortless.</p>
        <motion.a
          href="/register"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Create an Account
        </motion.a>
      </section>
    </LandingPageLayout>
  );
}
