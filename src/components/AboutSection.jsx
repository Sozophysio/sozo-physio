import img1 from "../assets/about1.webp";
import img2 from "../assets/about2.webp";
import { FaHeart } from "react-icons/fa";
import { FaUser, FaFileAlt, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-3 md:px-4 lg:px-6">
        {/* Card Container */}
        <div className="bg-[#EAF7F8] rounded-2xl px-8 md:px-10 py-10 md:py-14 grid md:grid-cols-2 gap-10 items-center shadow-md">
          {/* LEFT IMAGES */}
          <div className="relative w-full max-w-md mx-auto">
            {/* TOP IMAGE */}
            <img
              src={img1}
              alt="Clinic"
              className="relative z-20 w-full h-52 object-cover rounded-xl shadow-md md:w-64 md:h-72 md:bottom-20 md:left-24"
            />

            {/* BOTTOM IMAGE (overlapping) */}
            <img
              src={img2}
              alt="Physio"
              className="w-full h-44 mt-4 object-cover rounded-xl shadow-md md:absolute md:z-10 md:-bottom-20 md:-left-12 md:w-56 md:h-64 md:mt-0"
            />

            {/* FLOATING BADGE */}
            <div className="w-[70%] mt-4 bg-accent text-white px-3 py-4 rounded-xl shadow-lg shadow-black/10 text-sm font-medium text-center md:absolute md:z-30 md:bottom-2 md:right-4 md:w-44 md:mt-0">
              <div className="flex flex-col items-center gap-2">
                {/* Icon */}
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                  <FaHeart className="text-white text-sm" />
                </div>

                {/* Text */}
                <p className="text-xs leading-tight">
                  Focused on <br /> your recovery and wellbeing
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-accent font-semibold mb-2 text-sm">ABOUT US</p>

            <h2 className="text-xl md:text-2xl font-bold text-dark mb-4">
              Helping You Move Better, Live Stronger
            </h2>

            <p className="text-gray-700 mb-4">
              At our clinic, we are committed to helping you move better, feel
              stronger, and live pain-free. We provide evidence-based
              physiotherapy treatment tailored to your individual goals.
            </p>

            <p className="text-gray-700 mb-10">
              Our approach focuses on hands-on treatment, exercise
              rehabilitation, education, and long-term injury prevention.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
              {/* ITEM 1 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <FaUser />
                </div>
                <div>
                  <p className="text-sm min-h-[40px] leading-tight font-semibold text-dark">
                    Personalized Care
                  </p>
                  <p className="text-xs text-gray-600">
                    Treatment tailored to your goals
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                  <FaFileAlt />
                </div>
                <div>
                  <p className="pt-1 text-sm min-h-[40px] leading-tight font-semibold text-dark">
                    Evidence-based
                  </p>
                  <p className="text-xs text-gray-600">
                    Using latest clinical research
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                  <FaChartLine />
                </div>
                <div>
                  <p className="text-sm min-h-[40px] leading-tight font-semibold text-dark">
                    Long-term Results
                  </p>
                  <p className="text-xs text-gray-600">
                    Helping you move better for life
                  </p>
                </div>
              </div>
            </div>

            <button
              className="bg-accent text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:opacity-90 transition shadow-md"
              onClick={() => navigate("/about")}
            >
              Learn More About Us
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
