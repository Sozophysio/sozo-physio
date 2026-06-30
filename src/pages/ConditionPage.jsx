import { useParams } from "react-router-dom";
import { conditionsData } from "../data/conditionsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCalendarAlt, FaCheck } from "react-icons/fa";
import CTAImg from "../assets/physio_cta.webp";

const ConditionPage = () => {
  const { slug } = useParams();

  const condition = conditionsData.find((c) => c.slug === slug);

  if (!condition) return <div>Condition not found</div>;

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="w-full bg-gradient-to-b from-[#DDF4F6] to-[#EAF7F8]">
        <div className="max-w-7xl mx-auto px-8 md:px-10 lg:px-12 py-8 md:py-12 grid md:grid-cols-2 gap-10 items-center">
          <div className="absolute right-160 top-34 opacity-10">
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-dark rounded-full"></div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-12">
              Home / Conditions /{" "}
              <span className="text-dark font-medium">{condition.title}</span>
            </p>
            <p className="text-accent font-semibold mb-2">
              CONDITIONS WE TREAT
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-dark mb-6">
              {condition.title}
            </h1>

            {/* <div className="mt-1"> */}
            <div className="w-14 h-1 bg-primary rounded"></div>
            {/* </div> */}

            <p className="text-gray-700 max-w-md font-md mt-4">
              {condition.heroDesc}
            </p>
          </div>

          <div className="relative w-full">
            <img
              src={condition.image}
              alt={condition.title}
              className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover rounded-[30px]"
            />
          </div>
        </div>
      </div>

      {/* SYMPTOMS */}
      <div className="max-w-7xl mx-auto px-12 py-8 md:py-12">
        <div className="bg-[#EAF7F8] px-10 py-8 rounded-2xl grid md:grid-cols-2 gap-10 mb-10 shadow-lg">
          <div className="md:border-r md:border-gray-300/40 md:pr-6">
            <h3 className="font-semibold mb-3 text-secondaryDark">
              Symptoms may include:
            </h3>
            <div className="w-14 h-0.5 bg-primary rounded mb-3"></div>

            <ul className="space-y-3 text-sm text-gray-700">
              {condition.symptoms.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* BULLET */}
                  <span className="mt-2 w-2 h-2 rounded-full bg-secondaryDark flex-shrink-0"></span>

                  {/* TEXT */}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between h-full">
            {/* TOP TEXT */}
            <p className="text-sm text-gray-700 leading-relaxed">
              {condition.symptomsDesc}
            </p>

            {/* MID DIVIDER */}
            <div className="w-full h-[1px] bg-primary/40 my-2 rounded"></div>

            {/* HIGHLIGHT */}
            <p className="text-sm font-semibold text-secondaryDark leading-relaxed">
              {condition.symptomHighlight}
            </p>
          </div>
        </div>
      </div>

      {/* HOW WE HELP */}
      <div className="max-w-7xl mx-auto px-12 py-8 md:py-12">
        {/* TITLE */}
        <div className="text-center mb-10">
          <p className="text-accent font-semibold mb-2 text-sm">TREATMENT</p>
          <h2 className="text-xl md:text-2xl font-bold text-dark">
            How We Treat {condition.title}
          </h2>
          {/* <div className="w-16 h-0.5 bg-primary mx-auto mt-2 rounded"></div> */}
        </div>

        {/* GRID */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {condition.treatments.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[300px_40px_1fr] items-center border-b border-gray-300/40 last:border-none"
            >
              {/* LEFT TITLE */}
              <div className="bg-[#EAF7F8] px-6 py-5 h-full flex items-center">
                <p className="text-sm font-semibold text-secondaryDark">
                  {item.title}
                </p>
              </div>

              {/* CENTER DASH */}
              <div className="flex justify-center">
                <div className="w-4 h-[2px] bg-accent"></div>
              </div>

              {/* RIGHT DESCRIPTION */}
              <div className="px-6 py-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMMON CAUSES */}
      <div className="max-w-7xl mx-auto px-12 py-8 md:py-10">
        <div className="bg-[#EAF7F8] rounded-2xl px-8 py-6 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
          {/* LEFT SIDE */}
          <div className="min-w-[240px]">
            <p className="text-sm font-semibold text-accent">
              COMMON CAUSES <br /> of{" "}
              <span className="text-dark text-lg ml-0.5">
                {condition.title}
              </span>
            </p>

            <div className="w-10 h-[2px] bg-primary mt-6 rounded"></div>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:block w-[1px] h-12 bg-gray-300/50"></div>

          {/* RIGHT SIDE (PILLS) */}
          <div className="flex flex-wrap gap-3">
            {condition.causes.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-4 py-2 text-sm text-gray-700 shadow-sm"
              >
                {/* DOT */}
                {/* <span className="w-2 h-2 rounded-full bg-secondaryDark flex-shrink-0"></span> */}
                <div className="w-4 h-4 rounded-full bg-secondaryDark flex items-center justify-center mt-0.5">
                  <FaCheck className="text-white text-[10px]" />
                </div>
                {/* TEXT */}
                <span>{item}</span>
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

export default ConditionPage;
