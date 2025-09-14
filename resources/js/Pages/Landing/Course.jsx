import LandingPageLayout from "@/Layouts/LandingPageLayout";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Briefcase, Calculator, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const iconRotate = {
  hidden: { rotate: -10, scale: 0.8, opacity: 0 },
  visible: { rotate: 0, scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Courses() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Bachelor of Science in Computer Science",
      desc: "Develop skills in programming, software engineering, and data science to excel in the tech industry.",
      level: "Undergraduate Program",
    },
    {
      icon: Briefcase,
      title: "Bachelor of Science in Business Administration",
      desc: "Gain knowledge in management, finance, and entrepreneurship to lead in the corporate world.",
      level: "Undergraduate Program",
    },
    {
      icon: Calculator,
      title: "Bachelor of Science in Accountancy",
      desc: "Build expertise in financial accounting, auditing, and taxation with industry-standard practices.",
      level: "Undergraduate Program",
    },
    {
      icon: BookOpen,
      title: "Master of Education",
      desc: "Advance your career in teaching with research-driven learning and modern education strategies.",
      level: "Graduate Program",
    },
  ];

  return (
    <LandingPageLayout>
      {/* Hero Section */}
  {/* Hero Section */}
<section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-r from-indigo-800 via-blue-700 to-indigo-900 pt-24">
  {/* Decorative Blobs */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-56 h-56 bg-indigo-400/30 rounded-full blur-3xl animate-pulse"></div>

  {/* Hero Content */}
  <div className="relative z-10 px-6">
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-4xl md:text-6xl font-extrabold text-white mb-6"
    >
      Academic Programs
    </motion.h1>
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
    >
      Explore our academic offerings designed to nurture excellence,
      innovation, and leadership in every student.
    </motion.p>
  </div>
</section>

   {/* Programs Grid */}
      <section id="programs" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Offered Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center transition"
            >
              <motion.div variants={iconRotate}>
                <program.icon className="mx-auto text-indigo-600 w-14 h-14 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-3">{program.desc}</p>
              <span className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                {program.level}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our School?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Sparkles, title: "Quality Education", desc: "World-class teaching with innovative curricula." },
            { icon: GraduationCap, title: "Expert Faculty", desc: "Guidance from professionals with real-world expertise." },
            { icon: Briefcase, title: "Career Opportunities", desc: "Strong connections open doors to internships and jobs." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <item.icon className="mx-auto text-indigo-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Be Part of Our Academic Community</h2>
        <p className="mb-6">Apply now and take the first step toward your dream career.</p>
        <motion.a
          href="/register"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Apply Now
        </motion.a>
      </section>
    </LandingPageLayout>
  );
}
