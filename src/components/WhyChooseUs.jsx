import { FaCheck, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT CARD */}
          <div className="bg-[#EAF7F8] rounded-2xl p-8 md:p-10 shadow-md">
            <p className="text-accent font-semibold mb-8">WHY CHOOSE US?</p>

            <ul className="space-y-4">
              {[
                "Individualised treatment plans",
                "Evidence-based physiotherapy care",
                "Hands-on treatment approach",
                "Experienced and caring physiotherapist",
                "Modern rehabilitation techniques",
                "Focus on long-term recovery and prevention",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* ICON */}
                  <div className="w-6 h-6 bg-accent rounded-md flex items-center justify-center text-white text-xs mt-1">
                    <FaCheck />
                  </div>

                  {/* TEXT */}
                  <p className="text-dark text-sm md:text-base font-medium">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CTA CARD */}
          <div className="bg-secondaryDark text-white rounded-2xl p-8 md:p-10 shadow-md flex flex-col justify-between">
            {/* TOP CONTENT */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                  Book Your <br />
                  <span className="text-accent">Appointment</span> Today
                </h2>

                <FaCalendarAlt className="text-white text-3xl" />
              </div>

              <p className="text-white text-sm md:text-base mb-6 leading-relaxed max-w-md">
                Whether you are recovering from injury, managing pain, or
                looking to improve your physical performance, our team is here
                to help you achieve your goals and get back to doing what you
                love.
              </p>
            </div>

            {/* BUTTON */}
            <a
              href="https://sozo-physiotherapy.au5.cliniko.com/bookings#service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Book Appointment
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
