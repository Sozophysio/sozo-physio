import heroImg from "../assets/hero.webp";

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#DDF4F6] to-[#EAF7F8] mb-6">
      <div className="max-w-7xl mx-auto px-8 md:px-10 lg:px-12 py-8 md:py-12 grid md:grid-cols-2 items-start gap-10">
        <div className="absolute right-160 top-34 opacity-10">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-dark rounded-full"></div>
            ))}
          </div>
        </div>
        {/* LEFT CONTENT */}
        <div>
          <p className="text-accent font-semibold mb-3">
            Move Better. Feel Better. Live Stronger.
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-dark leading-tight md:leading-[1.3] mb-6">
            Personalized Physiotherapy.
            <br />
            <span className="text-primary">Better You.</span>
          </h1>

          <p className="text-gray-600 mb-8 max-w-md">
            One-on-one care designed to relieve pain, restore movement and help
            you get back to doing what you love.
          </p>

          <a
            href="https://sozo-physiotherapy.au5.cliniko.com/bookings#service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 gap-2 bg-accent text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg font-medium hover:opacity-90 transition"
          >
            Book Appointment
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px]">
          {/* IMAGE */}
          <img
            src={heroImg}
            alt="Physiotherapy"
            className="w-full h-full object-cover rounded-[30px]"
          />

          {/* TOP CURVE (teal overlay) */}
          {/* <div className="absolute top-0 left-0 w-60 h-20 bg-secondary rounded-br-[100px] opacity-70" /> */}

          {/* BOTTOM CURVE (dark blue shape) */}
          {/* <div className="absolute bottom-0 right-0 w-90 h-16 bg-gradient-to-t from-dark to-dark/70 rounded-tl-[120px] opacity-70" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
