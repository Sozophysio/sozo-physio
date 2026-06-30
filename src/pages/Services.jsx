import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/services_hero.webp";
import img1 from "../assets/clinical_pilates.webp";
import img2 from "../assets/exercise_rehabilitation.webp";
import img3 from "../assets/dry_needling.webp";
import img4 from "../assets/cup_therapy.webp";
import img5 from "../assets/medicare_care_plan.webp";
import img6 from "../assets/work_cover.jpg";
import img7 from "../assets/pre_post_surgery.webp";
import img8 from "../assets/sport_physio.jpg";
import CTAImg from "../assets/physio_cta.webp";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      image: img1,
      title: "Clinical Pilates",
      slug: "clinical-pilates",
      desc: "Improve core strength, posture, flexibility, and balance with physiotherapist-guided Pilates. Each program is tailored to your condition to support recovery, prevent injury, and enhance movement.",
    },
    {
      image: img2,
      title: "Exercise Rehab",
      slug: "exercise-rehab",
      desc: "Personalized rehabilitation programs designed to restore strength, mobility, and function after injury or surgery. We guide you through progressive exercises to safely return to daily activities, work, and sport.",
    },
    {
      image: img3,
      title: "Dry Needling",
      slug: "dry-needling",
      desc: "A targeted treatment that uses fine needles to release muscle tension and reduce pain. Helps improve circulation, mobility, and recovery from injuries and chronic muscle tightness.",
    },
    {
      image: img4,
      title: "Cupping Therapy",
      slug: "cupping-therapy",
      desc: "A soft tissue therapy that uses suction to improve blood flow and relieve muscle tension. Supports pain relief, reduces stiffness, and promotes faster recovery.",
    },
    {
      image: img5,
      title: "Medicare Care",
      slug: "medicare-care",
      desc: "Physiotherapy services available under Medicare Care Plans for eligible patients with chronic conditions. We focus on improving mobility, reducing pain, and supporting long-term health outcomes.",
    },
    {
      image: img6,
      title: "Work Rehab",
      slug: "work-rehab",
      desc: "Physiotherapy support for workplace and motor vehicle injuries under WorkCover and TAC. We focus on recovery, pain management, and safe return to work and daily activities.",
    },
    {
      image: img7,
      title: "Surgery Rehab",
      slug: "pre-post-surgery",
      desc: "Pre and post-surgery rehabilitation programs to improve recovery and restore function. We help reduce pain, rebuild strength, and safely return you to normal activities.",
    },
    {
      image: img8,
      title: "Sports Physio",
      slug: "sports-physio",
      desc: "Specialized care for sports injuries, performance, and injury prevention. Tailored treatment plans help you recover faster and perform at your best.",
    },
  ];
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="w-full bg-gradient-to-b from-[#DDF4F6] to-[#EAF7F8]">
        <div className="max-w-7xl mx-auto px-8 md:px-10 lg:px-12 py-8 md:py-12 grid md:grid-cols-2 items-start gap-10">
          <div className="absolute right-160 top-34 opacity-10">
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-dark rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

          {/* LEFT CONTENT */}
          <div>
            {/* Breadcrumb */}
            <p className="text-sm text-gray-600 mb-4">
              Home / <span className="text-dark font-medium">Services</span>
            </p>

            {/* Label */}
            <p className="text-accent font-semibold mb-3">OUR SERVICES</p>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-dark leading-tight md:leading-[1.3] mb-6">
              Physiotherapy
              <br />
              <span className="text-primary">Services</span>
            </h1>

            {/* Description */}
            <p className="text-gray-700 mb-8 max-w-lg">
              Personalized treatments designed to help you move better, feel
              stronger, and live a pain-free life.
            </p>

            <div className="flex gap-16 mt-4">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold text-dark">10+</p>
                <p className="text-xs text-gray-600">Years Experience</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-xl font-bold text-dark">5k+</p>
                <p className="text-xs text-gray-600">Patients Treated</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-xl font-bold text-dark">98%</p>
                <p className="text-xs text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px]">
            <img
              src={heroImg}
              alt="Physiotherapy Services"
              className="w-full h-full object-cover rounded-[30px]"
            />

            {/* TOP CURVE */}
            <div className="absolute top-0 left-0 w-60 h-20 bg-secondary rounded-br-[100px] opacity-70" />

            {/* BOTTOM CURVE */}
            <div className="absolute bottom-0 right-0 w-90 h-16 bg-gradient-to-t from-dark to-dark/70 rounded-tl-[120px] opacity-70" />
          </div>
        </div>
      </div>

      {/* WHAT WE OFFER */}
      <div className="w-full py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* HEADER */}
          <div className="text-center mb-10">
            <p className="text-accent font-semibold mb-2">WHAT WE OFFER</p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">
              Comprehensive Care Tailored to You
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed line-clamp-3">
              Explore our range of physiotherapy services designed to address
              your unique needs and help you achieve long-term recovery and
              wellness.
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index}>
                {/* CARD */}
                <div className="bg-[#f5f5f5] rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col h-full">
                  {/* IMAGE */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 md:h-52 object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-semibold text-dark mb-2 text-[15px]">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3 min-h-[72px]">
                      {service.desc}
                    </p>

                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-auto text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-gradient-to-r from-[#165E7D] to-[#1B6E8F] rounded-2xl group p-6 md:p-10 flex flex-col md:flex-row items-center gap-14 relative overflow-hidden">
            {/* LEFT IMAGE */}
            <div className="w-full md:w-1/3 items-stretch">
              <img
                src={CTAImg}
                alt="Physiotherapy"
                className="w-full h-full h-52 md:h-64 object-cover rounded-[20px] md:rounded-[28px]"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full md:w-2/3 text-white">
              <h2 className="text-xl md:text-3xl font-bold mb-6 leading-snug leading-[1.3] md:leading-[1.4]">
                Ready to Move Better? <br />
                <span className="text-accent">We’re Here to Help.</span>
              </h2>

              <p className="text-white/90 text-sm md:text-base mb-6 max-w-lg leading-relaxed">
                Whether you're recovering from an injury, managing pain, or
                looking to improve your physical performance, our team is here
                to support you every step of the way.
              </p>

              <a
                href="https://sozo-physiotherapy.au5.cliniko.com/bookings#service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-100 hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                Book Appointment
                <FaCalendarAlt className="ml-1" />
              </a>
            </div>

            {/* DECORATIVE DOTS */}
            <div className="hidden md:block absolute right-10 top-55 -translate-y-1/2">
              <div className="grid grid-cols-5 gap-4 opacity-30">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
