import LandingPageLayout from "@/Layouts/LandingPageLayout";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Lightbulb, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const iconRotate = {
  hidden: { rotate: -15, scale: 0.8, opacity: 0 },
  visible: { rotate: 0, scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function About() {
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
          About Our CMS
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-lg md:text-xl mb-6 max-w-3xl mx-auto"
        >
          We’re passionate about building tools that make content management
          simple, reliable, and user-friendly — so you can focus on what matters.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Our Mission",
              desc: "To empower individuals and businesses with a modern, secure, and intuitive CMS that adapts to their needs.",
            },
            {
              icon: ShieldCheck,
              title: "Our Vision",
              desc: "To be the most trusted CMS solution worldwide, where creators and organizations thrive digitally.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <motion.div variants={iconRotate}>
                <item.icon className="mx-auto text-indigo-600 w-12 h-12 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Lightbulb,
              title: "Innovation",
              desc: "We constantly improve and bring fresh ideas to meet modern content needs.",
            },
            {
              icon: ShieldCheck,
              title: "Reliability",
              desc: "Delivering secure and dependable solutions you can trust every day.",
            },
            {
              icon: Users,
              title: "User First",
              desc: "We put users at the center of everything — simplicity and accessibility come first.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
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

      {/* Team Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Smith",
              role: "CEO & Founder",
              desc: "Leads with vision and passion for empowering creators worldwide.",
            },
            {
              name: "Maria Lopez",
              role: "Lead Developer",
              desc: "Focuses on building secure and scalable systems.",
            },
            {
              name: "John Carter",
              role: "UI/UX Designer",
              desc: "Designs clean, intuitive, and delightful experiences.",
            },
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
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{item.role}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </LandingPageLayout>
  );
}
