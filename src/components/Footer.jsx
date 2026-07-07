import logo from "../assets/logo_crop.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* MAIN FOOTER */}
      <div className="bg-dark text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-4">
          {/* LOGO + TEXT */}
          <div className="md:border-r md:border-white/20 md:pr-6">
            <div className="bg-white rounded-md inline-block mb-4 p-3">
              <img src={logo} alt="Sozo Physio" className="w-26" />
            </div>
            <p className="text-md text-white/90 leading-relaxed">
              Helping you move better, feel stronger and live pain-free.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="md:border-r md:border-white/20 md:pr-6">
            <h4 className="font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <NavLink to="/" className="hover:text-accent transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/conditions"
                  className="hover:text-accent transition-colors"
                >
                  Conditions
                </NavLink>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="md:border-r md:border-white/20 md:pr-6">
            <h4 className="font-semibold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <NavLink
                  to="/services/clinical-pilates"
                  className="hover:text-accent transition-colors"
                >
                  Clinical Pilates
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/exercise-rehab"
                  className="hover:text-accent transition-colors"
                >
                  Exercise Rehabilitation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/dry-needling"
                  className="hover:text-accent transition-colors"
                >
                  Dry Needling
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/cupping-therapy"
                  className="hover:text-accent transition-colors"
                >
                  Cupping Therapy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/medicare-care"
                  className="hover:text-accent transition-colors"
                >
                  Medicare Care Plan
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/work-rehab"
                  className="hover:text-accent transition-colors"
                >
                  WorkCover & TAC Rehab
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/pre-post-surgery"
                  className="hover:text-accent transition-colors"
                >
                  Surgery Rehabilitation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/sports-physio"
                  className="hover:text-accent transition-colors"
                >
                  Sports Physiotherapy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="font-semibold mb-4">CONTACT INFO</h4>
            <ul className="space-y-2 text-sm text-white/90 leading-relaxed">
              <li>SOZO PHYSIOTHERAPY & REHABILITATION SERVICES</li>
              <li>13 Riverside Ave Werribee, Vic 3030</li>
              <li>3024 (03) 9123 4567</li>
              <li>info@sozophysio.com.au</li>
              <li>
                Mon - Fri: 8:00 AM - 7:00 PM <br />
                Sat - 9:00 AM - 1:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-accent text-white text-center py-3 text-sm">
        © {new Date().getFullYear()} Sozo Physiotherapy & Rehabilitation
        Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
