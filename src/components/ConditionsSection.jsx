import React from "react";
import con1 from "../assets/lower_back.webp";
import con2 from "../assets/neck_pain.webp";
import con3 from "../assets/spine.webp";
import con4 from "../assets/shoulder.webp";
import con5 from "../assets/posture.webp";
import con6 from "../assets/sports_injury.webp";
import con7 from "../assets/sciatica.webp";
import { Link } from "react-router-dom";

const ConditionsSection = () => {
  const conditions = [
    { title: "Back Pain", img: con1, slug: "lower-back-pain" },
    { title: "Neck Pain", img: con2, slug: "neck-pain" },
    { title: "Spinal Conditions", img: con3, slug: "spinal-conditions" },
    { title: "Shoulder Pathology", img: con4, slug: "shoulder-pain" },
    { title: "Postural Issues", img: con5, slug: "postural-issues" },
    { title: "Sport Injuries", img: con6, slug: "sports-injuries" },
    { title: "Sciatica", img: con7, slug: "sciatica" },
  ];

  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* CONTAINER */}
        <div className="bg-[#EAF7F8] rounded-2xl px-4 md:px-8 py-8 md:py-12 shadow-sm">
          {/* HEADING */}
          <div className="text-center mb-8 md:mb-10">
            <p className="text-accent font-semibold mb-2 text-sm">
              CONDITIONS WE TREAT
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-dark">
              Helping You Overcome Pain & Injuries
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 md:gap-6">
            {conditions.map((item, i) => (
              <Link
                key={i}
                to={`/conditions/${item.slug}`}
                className="relative rounded-xl overflow-hidden h-42 md:h-50 cursor-pointer group block"
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 via-15% to-transparent"></div>

                {/* TEXT */}
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs md:text-sm font-semibold leading-tight">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
