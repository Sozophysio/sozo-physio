import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaUser,
  FaBullseye,
  FaShieldAlt,
  FaUsers,
  FaCheck,
} from "react-icons/fa";

const ServicePage = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return <p className="text-center py-20">Service not found</p>;
  }

  const mid = Math.ceil(service.helpsWith.length / 2);

  const leftItems = service.helpsWith.slice(0, mid);
  const rightItems = service.helpsWith.slice(mid);

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
            <p className="text-sm text-gray-600 mb-4">
              Home / Services /{" "}
              <span className="text-dark font-medium">{service.title}</span>
            </p>
            <p className="text-accent font-semibold mb-2">OUR SERVICES</p>

            <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
              {service.title}
            </h1>

            <p className="text-primary text-lg font-medium mb-4">
              {service.subtitle}
            </p>

            <p className="text-gray-700 max-w-lg">{service.description}</p>
            <div className="flex items-center gap-12 mt-12">
              {/* ITEM 1 */}
              <div className="flex flex-col items-center text-center gap-2 md:border-r md:border-[#808080]/20 md:pr-8">
                <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center text-primary">
                  <FaUser />
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  1-on-1 Guided
                </p>
              </div>

              {/* ITEM 2 */}
              <div className="flex flex-col items-center text-center gap-2 md:border-r md:border-[#808080]/20 md:pr-8">
                <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center text-primary">
                  <FaBullseye />
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  Tailored Programs
                </p>
              </div>

              {/* ITEM 3 */}
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center text-secondary">
                  <FaShieldAlt />
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  Evidence-Based
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <img
              src={service.image1}
              alt={service.title}
              className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover rounded-[30px]"
            />
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="max-w-7xl mx-auto px-8 py-8 md:py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={service.image2}
            alt={service.title}
            className="w-full h-[250px] md:h-[320px] object-cover rounded-xl"
          />
        </div>
        <div>
          <p className="text-accent font-semibold mb-2">
            ABOUT {service.title.toUpperCase()}
          </p>

          <h2 className="text-2xl font-bold text-dark mb-4">
            What is {service.title}?
          </h2>

          <p className="text-gray-700 whitespace-pre-line">{service.about}</p>
        </div>
      </div>

      {/* WE CAN HELP WITH */}
      <div className="max-w-7xl mx-auto px-8 py-8 md:py-12">
        <div className="bg-[#F5FAFB] rounded-2xl px-10 py-12 shadow-lg">
          {/* MAIN GRID */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE */}
            <div>
              <p className="text-accent font-semibold mb-3">WHO CAN BENEFIT</p>

              <h2 className="text-3xl font-bold text-dark mb-4 leading-snug max-w-lg">
                {service.title} Can Help With
              </h2>

              <div className="w-10 h-1 bg-primary rounded mb-5"></div>

              <p className="text-gray-700 text-sm max-w-sm leading-relaxed">
                Our {service.title} program is suitable for people of all ages
                and fitness levels. It can help with:
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <div className="grid grid-cols-2 gap-x-12">
                {/* LEFT COLUMN */}
                <div className="space-y-4">
                  {leftItems.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <FaCheck className="text-white text-sm" />
                        </div>

                        <p className="text-sm text-gray-700">{item}</p>
                      </div>

                      <div className="ml-9 mt-4 h-[1px] w-[70%] bg-gray-200" />
                    </div>
                  ))}
                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-4">
                  {rightItems.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <FaCheck className="text-white text-sm" />
                        </div>

                        <p className="text-sm text-gray-700">{item}</p>
                      </div>

                      <div className="ml-9 mt-4 h-[1px] w-[70%] bg-gray-200" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 🔥 BOTTOM CARD (OUTSIDE GRID → FULL WIDTH CONTROL) */}
          <div className="mt-3 flex justify-end">
            <div className="bg-primary/15 rounded-xl px-6 py-4 flex items-center gap-4 w-full md:w-1/2">
              <div className="text-primary">
                <FaUsers className="text-3xl" />
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                Every program is tailored to your individual needs and goals,
                ensuring safe and effective results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
