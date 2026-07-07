import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/condition_hero.webp";
import con1 from "../assets/lower_back.webp";
import con2 from "../assets/neck_pain.webp";
import con3 from "../assets/spine.webp";
import con4 from "../assets/shoulder.webp";
import con5 from "../assets/posture.webp";
import con6 from "../assets/sports_injury.webp";
import con7 from "../assets/sciatica.webp";
import img8 from "../assets/sport_physio.jpg";
import CTAImg from "../assets/physio_cta.webp";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Conditions = () => {
  const conditions = [
    {
      title: "Back Pain",
      image: con1,
      slug: "lower-back-pain",
      desc: "Improve core strength, posture, flexibility, and balance with physiotherapist-guided Pilates. Each program is tailored to your condition to support recovery, prevent injury, and enhance movement.",
    },
    {
      title: "Neck Pain",
      image: con2,
      slug: "neck-pain",
      desc: "Personalized rehabilitation programs designed to restore strength, mobility, and function after injury or surgery. We guide you through progressive exercises to safely return to daily activities, work, and sport.",
    },
    {
      title: "Spinal Conditions",
      image: con3,
      slug: "spinal-conditions",
      desc: "Personalized rehabilitation programs designed to restore strength, mobility, and function after injury or surgery. We guide you through progressive exercises to safely return to daily activities, work, and sport.",
    },
    {
      title: "Shoulder Pathology",
      image: con4,
      slug: "shoulder-pain",
      desc: "Personalized rehabilitation programs designed to restore strength, mobility, and function after injury or surgery. We guide you through progressive exercises to safely return to daily activities, work, and sport.",
    },
    {
      title: "Postural Issues",
      image: con5,
      slug: "postural-issues",
      desc: "Personalized rehabilitation programs designed to restore strength, mobility, and function after injury or surgery. We guide you through progressive exercises to safely return to daily activities, work, and sport.",
    },
    {
      title: "Sport Injuries",
      image: con6,
      slug: "sports-injuries",
      desc: "Personalized rehabilitation programs designed to restore strength, mobility, and function after injury or surgery. We guide you through progressive exercises to safely return to daily activities, work, and sport.",
    },
    {
      title: "Sciatica",
      image: con7,
      slug: "sciatica",
      desc: "Personalized rehabilitation programs designed to restore strength, mobility, and function after injury or surgery. We guide you through progressive exercises to safely return to daily activities, work, and sport.",
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
              Home /{" "}
              <span className="text-dark font-medium">Conditions We Treat</span>
            </p>

            {/* Label */}
            <p className="text-accent font-semibold mb-3">
              CONDITIONS WE TREAT
            </p>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-dark leading-tight md:leading-[1.3] mb-6">
              We Treat The Root Cause,
              <br />
              <span className="text-primary">Not Just The Symptoms</span>
            </h1>

            {/* Description */}
            <p className="text-gray-700 mb-8 max-w-lg">
              Personalised physiotherapy care for a wide range of conditions to
              help you move better, feel stronger and live pain-free.
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
            {/* <div className="absolute top-0 left-0 w-60 h-20 bg-secondary rounded-br-[100px] opacity-70" /> */}
            {/* BOTTOM CURVE */}
            {/* <div className="absolute bottom-0 right-0 w-90 h-16 bg-gradient-to-t from-dark to-dark/70 rounded-tl-[120px] opacity-70" /> */}
          </div>
        </div>
      </div>

      {/* WHAT WE OFFER */}
      <div className="w-full py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* HEADER */}
          <div className="text-center mb-10">
            <p className="text-accent font-semibold mb-2">
              CONDITIONS WE TREAT
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">
              Common Conditions We Help With
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed line-clamp-3">
              Our evidence-based approach targets the root cause of your pain
              and supports long-term recovery and prevention.
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <div key={index}>
                {/* CARD */}
                <div className="bg-[#f5f5f5] rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col h-full">
                  {/* IMAGE */}
                  <img
                    src={condition.image}
                    alt={condition.title}
                    className="w-full h-48 md:h-52 object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-semibold text-dark mb-2 text-[15px]">
                      {condition.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3 min-h-[72px]">
                      {condition.desc}
                    </p>

                    <Link
                      to={`/conditions/${condition.slug}`}
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

export default Conditions;
