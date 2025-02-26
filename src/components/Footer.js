// components/Footer.js
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="footer-logo mb-6 md:mb-0">
            <Image src="/images/logoh.PNG" alt="Hiror" width={90} height={30} />
          </div>
          <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="footer-section">
              <h5 className="font-bold text-lg mb-2">Working Hours</h5>
              <p>OPEN DAILY: 12:00 pm - 12:00 am</p>
            </div>
            <div className="footer-section">
              <h5 className="font-bold text-lg mb-2">Contact Us</h5>
              <p>Email: info@hiror.com</p>
              <p>Phone: +9647500171717</p>
            </div>
            <div className="footer-section">
              <h5 className="font-bold text-lg mb-2">Address</h5>
              <p>Zin City Road, Pirmam St. Erbil, Kurdistan - Iraq.</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center border-t border-gray-700 pt-4">
          <p>© 2023 Hiror. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
