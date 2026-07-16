import { FaStar } from "react-icons/fa";
import { Sparkles } from "lucide-react";
import { Star } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-accent text-white overflow-hidden whitespace-nowrap h-10 flex items-center">
      <div className="animate-marquee flex items-center gap-10 font-medium text-sm">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            {/* <FaStar className="text-xs text-black" /> */}
            <Star size={16} className="fill-[#f0e13a] text-[#f0e13a]" />

            <span>
              LIMITED TIME OFFER • FREE Initial Physiotherapy Consultation for
              New Patients • BOOK YOUR APPOINTMENT TODAY
            </span>

            <Star size={16} className="fill-[#f0e13a] text-[#f0e13a]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
