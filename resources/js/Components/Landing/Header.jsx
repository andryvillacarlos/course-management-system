import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-indigo-600">
          Course<span className="text-blue-400">Sys</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Sign In Button */}
  
        <div className="hidden md:flex">
        <Link
            href="/login"
            className="flex justify-center items-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition text-sm md:text-base text-center"
        >
            Sign In
        </Link>
        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-2 p-4 text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
           <Link
            href={route('login')}
            className="block mt-2 px-3 py-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition text-center text-sm"
            onClick={() => setIsOpen(false)}
            >
            Sign In
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}
