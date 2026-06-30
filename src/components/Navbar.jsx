import { useState } from "react";
import { FaBars, FaTimes, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo_wbg.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [conditionsOpen, setConditionsOpen] = useState(false);
  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6 flex items-center justify-between h-22">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Sozo Physio" className="h-14 md:h-28" />
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          {/* Menu */}
          <div className="flex items-center gap-8 text-dark font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              Services
            </NavLink> */}
            <div className="relative group">
              {/* MAIN LINK */}
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center gap-1 ${
                    isActive ? "text-primary" : "hover:text-primary"
                  }`
                }
              >
                Services
                <span className="text-xs mt-1">▾</span>
              </NavLink>

              {/* DROPDOWN */}
              <div className="absolute left-0 top-full mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-3">
                  {[
                    { name: "Clinical Pilates", slug: "clinical-pilates" },
                    {
                      name: "Exercise Rehabilitation",
                      slug: "exercise-rehab",
                    },
                    { name: "Dry Needling", slug: "dry-needling" },
                    { name: "Cupping Therapy", slug: "cupping-therapy" },
                    { name: "Medicare Care Plan", slug: "medicare-care" },
                    { name: "WorkCover & TAC Rehab", slug: "work-rehab" },
                    {
                      name: "Surgery Rehabilitation",
                      slug: "pre-post-surgery",
                    },
                    { name: "Sports Physiotherapy", slug: "sports-physio" },
                  ].map((service, i) => (
                    <NavLink
                      key={i}
                      to={`/services/${service.slug}`}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                    >
                      {service.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* For conditions */}
            <div className="relative group">
              {/* MAIN LINK */}
              <NavLink
                to="/conditions"
                className={({ isActive }) =>
                  `flex items-center gap-1 ${
                    isActive ? "text-primary" : "hover:text-primary"
                  }`
                }
              >
                Conditions We Treat
                <span className="text-xs mt-1">▾</span>
              </NavLink>

              {/* DROPDOWN */}
              <div className="absolute left-0 top-full mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-3">
                  {[
                    { name: "Lower Back Pain", slug: "lower-back-pain" },
                    {
                      name: "Neck Pain & Cervicogenic Headaches",
                      slug: "neck-pain",
                    },
                    { name: "Spinal Conditions", slug: "spinal-conditions" },
                    { name: "Shoulder Pathology", slug: "shoulder-pain" },
                    { name: "Postural Issues", slug: "postural-issues" },
                    { name: "Sports Injuries", slug: "sports-injuries" },
                    {
                      name: "Sciatica",
                      slug: "sciatica",
                    },
                  ].map((condition, i) => (
                    <NavLink
                      key={i}
                      to={`/conditions/${condition.slug}`}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                    >
                      {condition.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              About Us
            </NavLink>
          </div>

          {/* CTA */}
          <a
            href="https://sozo-physiotherapy.au5.cliniko.com/bookings#service"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition"
          >
            Book Appointment
            <FaCalendarAlt />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-dark font-medium">
          <NavLink to="/" className="block py-2 border-b">
            Home
          </NavLink>
          {/* <NavLink to="/services" className="block py-2 border-b">
            Services
            <span className="text-xs mt-1">▾</span>
          </NavLink> */}
          <div className="border-b">
            <div className="flex items-center justify-between py-2">
              <NavLink
                to="/services"
                className="font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>

              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="p-2"
              >
                <FaChevronDown
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {servicesOpen && (
              <div className="pl-4 pb-2 space-y-2 text-sm text-gray-600">
                <NavLink to="/services/clinical-pilates" className="block">
                  Clinical Pilates
                </NavLink>

                <NavLink to="/services/exercise-rehab" className="block">
                  Exercise Rehabilitation
                </NavLink>

                <NavLink to="/services/dry-needling" className="block">
                  Dry Needling
                </NavLink>

                <NavLink to="/services/cupping-therapy" className="block">
                  Cupping Therapy
                </NavLink>

                <NavLink to="/services/medicare-care" className="block">
                  Medicare Care Plan
                </NavLink>

                <NavLink to="/services/work-rehab" className="block">
                  WorkCover & TAC Rehab
                </NavLink>

                <NavLink to="/services/pre-post-surgery" className="block">
                  Surgery Rehabilitation
                </NavLink>

                <NavLink to="/services/sports-physio" className="block">
                  Sports Physiotherapy
                </NavLink>
              </div>
            )}
          </div>
          {/* <NavLink to="/conditions" className="block py-2 border-b">
            Conditions We Treat
            <span className="text-xs mt-1">▾</span>
          </NavLink> */}
          <div className="border-b">
            <div className="flex items-center justify-between py-2">
              <NavLink
                to="/conditions"
                className="font-medium"
                onClick={() => setIsOpen(false)}
              >
                Conditions We Treat
              </NavLink>

              <button
                onClick={() => setConditionsOpen(!conditionsOpen)}
                className="p-2"
              >
                <FaChevronDown
                  className={`transition-transform ${
                    conditionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {conditionsOpen && (
              <div className="pl-4 pb-2 space-y-2 text-sm text-gray-600">
                <NavLink to="/conditions/lower-back-pain" className="block">
                  Lower Back Pain
                </NavLink>

                <NavLink to="/conditions/neck-pain" className="block">
                  Neck Pain & Cervicogenic Headaches
                </NavLink>

                <NavLink to="/conditions/spinal-conditions" className="block">
                  Spinal Conditions
                </NavLink>

                <NavLink to="/conditions/shoulder-pain" className="block">
                  Shoulder Pathology
                </NavLink>

                <NavLink to="/conditions/postural issues" className="block">
                  Postural Issues
                </NavLink>

                <NavLink to="/conditions/sports-injuries" className="block">
                  Sports Injuries
                </NavLink>

                <NavLink to="/conditions/sciatica" className="block">
                  Sciatica
                </NavLink>
              </div>
            )}
          </div>
          <NavLink to="/about" className="block py-2 border-b">
            About Us
          </NavLink>

          <button className="w-full flex justify-center items-center gap-2 bg-accent text-white py-2.5 rounded-full">
            Book Appointment
            <FaCalendarAlt />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
