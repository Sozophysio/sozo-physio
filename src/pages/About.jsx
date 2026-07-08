import heroImg from "../assets/New_About2.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaCheckCircle,
  FaUserMd,
  FaTrophy,
  FaHeart,
  FaCalendarAlt,
} from "react-icons/fa";
import physioImg from "../assets/founder1.jpeg";
import toddler from "../assets/toddler.webp";
import cook from "../assets/cook.webp";
import hiking from "../assets/hiking.webp";
import art from "../assets/art.webp";
import CTAImg from "../assets/physio_cta.webp";

const About = () => {
  return (
    <div>
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
            <p className="text-sm text-gray-500 mb-4">
              Home / <span className="text-dark font-medium">About Us</span>
            </p>

            {/* Label */}
            <p className="text-accent font-semibold mb-3">ABOUT US</p>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-dark leading-tight md:leading-[1.3] mb-6">
              Welcome to <br />
              <span className="text-primary">Sozo Physiotherapy</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 mb-8 max-w-lg">
              At Sozo Physiotherapy, we are passionate about helping people
              restore movement, reduce pain, and improve their overall quality
              of life through personalised and evidence-based physiotherapy
              care.
            </p>

            <p className="text-gray-600 mb-8 max-w-lg">
              The word “Sozo” originates from the Greek language and means to
              heal, restore, save, and make whole. This reflects our philosophy
              of holistic care focused on recovery and long-term wellbeing.
            </p>

            <p className="text-gray-600 max-w-lg">
              We believe every patient deserves compassionate care, individual
              attention, and a treatment plan tailored to their unique goals and
              lifestyle.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px]">
            <img
              src={heroImg}
              alt="Physiotherapy Services"
              className="w-full h-full object-cover rounded-[30px]"
            />
          </div>
        </div>
      </div>

      {/* MEET YOUR PHYSIO */}
      <section className="w-full py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-[#f5f5f5] shadow-md rounded-2xl grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-center p-5 sm:p-6 lg:p-8">
            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] aspect-[3/5] bg-white p-2 rounded-2xl shadow-sm">
                <img
                  src={physioImg}
                  alt="Physiotherapist"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full">
              {/* LABEL */}
              <p className="text-accent text-center font-semibold mb-2 mt-2">
                MEET YOUR PHYSIOTHERAPIST
              </p>

              {/* NAME */}
              <h2 className="text-2xl lg:text-3xl text-center font-bold text-dark mb-3">
                Uma Karnik
              </h2>

              {/* INTRO */}
              <p className="text-gray-700 text-sm sm:text-base text-center leading-relaxed mb-6">
                Our principal physiotherapist is a fully registered
                physiotherapist with extensive experience in musculoskeletal
                rehabilitation, sports injuries, chronic pain management,
                post-surgical rehabilitation, and exercise-based therapy.
              </p>

              {/* SKILLS CARD */}
              <div className="bg-primary/15 border border-gray-200 rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-dark mb-4">
                  She is committed to delivering patient-centred care using a
                  combination of:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm sm:text-base text-gray-700">
                  {[
                    "Hands-on manual therapy",
                    "Dry needling",
                    "Exercise rehabilitation",
                    "Functional movement retraining",
                    "Clinical Pilates",
                    "Education and injury prevention strategies",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary text-sm" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* INFO BLOCK 1 */}
              <div className="flex items-start gap-4 mb-4">
                <FaUserMd className="text-primary text-2xl lg:text-3xl mt-1 mr-1 flex-shrink-0" />

                <p className="text-sm text-gray-700 leading-relaxed">
                  Her approach focuses on identifying the root cause of pain and
                  dysfunction while empowering patients with the tools and
                  knowledge to achieve long-term results.
                </p>
              </div>

              {/* INFO BLOCK 2 */}
              <div className="flex items-start gap-4 mb-4">
                <FaTrophy className="text-primary text-2xl lg:text-3xl mt-1 mr-1 flex-shrink-0" />

                <p className="text-sm text-gray-700 leading-relaxed">
                  She has experience working with elite athletes across various
                  sporting disciplines and has proudly worked as a Team
                  Physiotherapist for the Indian Women’s Boxing Team, supporting
                  professional and celebrity athletes.
                </p>
              </div>

              {/* BOTTOM TEXT */}
              <p className="text-sm text-gray-600 leading-relaxed">
                Her background in sports physiotherapy has strengthened her
                expertise in injury management, rehabilitation, performance
                optimisation, and safe return-to-sport programs for athletes of
                all levels — from recreational participants to elite
                competitors.
              </p>

              <div className="flex items-start justify-center lg:justify-start gap-4 mt-6">
                {/* ICON CIRCLE */}
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FaHeart className="text-primary text-lg" />
                </div>

                {/* TEXT */}
                <p className="text-sm text-secondaryDark font-semibold leading-relaxed">
                  She is passionate about helping people regain confidence in
                  movement, improve physical function, and return to the
                  activities they enjoy most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND THE CLINIC */}
      <section className="w-full py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-b from-[#DDF4F6] to-[#EAF7F8] rounded-2xl p-6 md:p-8 shadow-md">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
              {/* LEFT CONTENT */}
              <div>
                <p className="text-accent font-semibold mb-2">
                  BEYOND THE CLINIC
                </p>

                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Outside of the clinic, she enjoys spending quality time with
                  her toddler and family and loves going on hikes and exploring
                  nature.
                </p>

                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  She also enjoys cooking and expressing creativity through arts
                  and crafts.
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Her warm and caring nature helps create a welcoming
                  environment where patients feel supported throughout their
                  recovery journey.
                </p>
              </div>

              {/* RIGHT IMAGES */}
              {/* RIGHT IMAGES */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <img
                  src={toddler}
                  alt="Family time"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
                <img
                  src={hiking}
                  alt="Hiking"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
                <img
                  src={cook}
                  alt="Cooking"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
                <img
                  src={art}
                  alt="Creative work"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <div className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
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
    </div>
  );
};

export default About;
