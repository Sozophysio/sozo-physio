// Services.jsx
import img1 from "../assets/clinical_pilates.webp";
import img2 from "../assets/exercise_rehabilitation.webp";
import img3 from "../assets/dry_needling.webp";
import img4 from "../assets/cup_therapy.webp";
import img5 from "../assets/medicare_care_plan.webp";
import img6 from "../assets/work_cover.jpg";
import img7 from "../assets/pre_post_surgery.webp";
import img8 from "../assets/sport_physio.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none)");

    setIsTouchDevice(mediaQuery.matches);

    const handleChange = (e) => {
      setIsTouchDevice(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const services = [
    {
      image: img1,
      title: "Clinical Pilates",
      slug: "clinical-pilates",
      desc: "Improve strength, flexibility and posture with guided sessions.",
    },
    {
      image: img2,
      title: "Exercise Rehab",
      slug: "exercise-rehab",
      desc: "Personalized rehab programs to restore movement.",
    },
    {
      image: img3,
      title: "Dry Needling",
      slug: "dry-needling",
      desc: "Relieve muscle tension and reduce pain effectively.",
    },
    {
      image: img4,
      title: "Cupping Therapy",
      slug: "cupping-therapy",
      desc: "Boost blood flow and promote healing naturally.",
    },
    {
      image: img5,
      title: "Medicare Care",
      slug: "medicare-care",
      desc: "Professional physiotherapy under healthcare plans.",
    },
    {
      image: img6,
      title: "Work Rehab",
      slug: "work-rehab",
      desc: "Recover safely and return to work faster.",
    },
    {
      image: img7,
      title: "Surgery Rehab",
      slug: "pre-post-surgery",
      desc: "Post-surgery recovery with expert guidance.",
    },
    {
      image: img8,
      title: "Sports Physio",
      slug: "sports-physio",
      desc: "Prevent and treat sports-related injuries.",
    },
  ];
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-3 md:px-4 lg:px-6">
        {/* HEADER */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-accent font-semibold mb-2 text-sm">OUR SERVICES</p>
          <h2 className="text-xl md:text-2xl font-bold text-dark">
            How Can I Help You
          </h2>
        </div>

        {/* BACKGROUND CONTAINER (IMPORTANT FIX) */}
        <div className="bg-[#EAF7F8] rounded-2xl px-4 md:px-6 lg:px-8 py-6 md:py-10 shadow-lg">
          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group perspective cursor-pointer"
                onClick={() => {
                  if (isTouchDevice) {
                    setFlippedCard(flippedCard === index ? null : index);
                  }
                }}
              >
                {/* CARD */}
                <div
                  className={`relative w-full h-65 md:h-75 transition-transform duration-500 transform-style preserve-3d ${
                    isTouchDevice
                      ? flippedCard === index
                        ? "rotate-y-180"
                        : ""
                      : "group-hover:rotate-y-180"
                  }`}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {isTouchDevice && (
                      <div className="absolute bottom-3 right-3 bg-black/40 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        Tap to flip
                      </div>
                    )}
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-sm">
                    <div className="relative w-full h-full bg-gradient-to-br from-[#1FA2A6] via-[#1FA2A6] to-[#15959B] text-white p-6 flex flex-col justify-between">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/7 rounded-bl-full"></div>

                      {/* CONTENT */}
                      <div className="space-y-3">
                        <h3 className="text-lg md:text-2xl font-semibold">
                          {service.title}
                        </h3>

                        <p className="text-xs md:text-base text-white/90 leading-relaxed max-w-[90%]">
                          {service.desc}
                        </p>
                      </div>

                      {/* CTA */}
                      <div>
                        <span
                          className="text-sm font-medium flex items-center gap-2"
                          onClick={() => navigate(`/services/${service.slug}`)}
                        >
                          Learn more
                          <span className="text-lg">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
