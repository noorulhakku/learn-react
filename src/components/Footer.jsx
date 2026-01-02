//Footer
 const Footer = () => {
    return (
            <footer className="bg-gray-900 text-gray-300 mt-16">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                <div className="footer-section">
                <h3 className="text-xl font-bold text-white mb-3">Akyo Food</h3>
                <p className="text-sm leading-relaxed">
                Delicious food delivered to your doorstep.  
                Fresh, fast, and affordable meals every day.
                </p>
                </div>

                <div className="footer-section">
                <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
                <li className="hover:text-white cursor-pointer">Cart</li>
                </ul>
                </div>

                <div className="">
                <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
                <p className="text-sm">📍 Pondicherry, India</p>
                <p className="text-sm">📞 +91 98765 43210</p>
                <p className="text-sm">✉️ support@akyofood.com</p>
                </div>

                <div className="footer-section">
                <h4 className="text-lg font-semibold text-white mb-3">Opening Hours</h4>
                <p className="text-sm">Mon – Fri: 9:00 AM – 10:00 PM</p>
                <p className="text-sm">Sat – Sun: 10:00 AM – 11:00 PM</p>
                </div>
        

                </div>

                <div className="border-t border-gray-700 py-4 text-center text-sm">
                <p>© 2025 Akyo Food. All rights reserved.</p>
                </div>
            </footer>
    )
}

export default Footer;
/*
       <div className="flex gap-4 mt-3">
  <i className="cursor-pointer">🌐</i>
  <i className="cursor-pointer">📘</i>
  <i className="cursor-pointer">📸</i>
</div>*/