import logo from "../assets/logo_crop.png";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* MAIN FOOTER */}
      <div className="bg-dark text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-4">
          {/* LOGO + TEXT */}
          <div className="md:border-r md:border-white/20 md:pr-6">
            <div className="bg-white rounded-md inline-block mb-4 p-3">
              <img src={logo} alt="Sozo Physio" className="w-26" />
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              Helping you move better, feel stronger and live pain-free.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="md:border-r md:border-white/20 md:pr-6">
            <h4 className="font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Conditions</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="md:border-r md:border-white/20 md:pr-6">
            <h4 className="font-semibold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Clinical Pilates</li>
              <li>Exercise Rehabilitation</li>
              <li>Dry Needling</li>
              <li>Cupping Therapy</li>
              <li>Medicare Care Plan</li>
              <li>WorkCover & TAC Rehabilitation</li>
              <li>Surgery Rehabilitation</li>
              <li>Sports Physiotherapy</li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="font-semibold mb-4">CONTACT INFO</h4>
            <ul className="space-y-2 text-sm text-white/90 leading-relaxed">
              <li>SOZO PHYSIOTHERAPY & REHABILITATION SERVICES</li>
              <li>13 Riverside Ave Werribee, Vic 3030</li>
              <li>3024 (03) 9123 4567</li>
              <li>info@sozophysio.com.au</li>
              <li>
                Mon - Fri: 8:00 AM - 7:00 PM <br />
                Sat - 9:00 AM - 1:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-accent text-white text-center py-3 text-sm">
        © {new Date().getFullYear()} Sozo Physiotherapy & Rehabilitation
        Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
