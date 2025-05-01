import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 px-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo/Brand Name */}
                <div className="text-2xl font-poppins font-bold text-navy">
                    Women Psychology
                </div>
                {/* Get Started Button */}
                <a
                    href="https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Women%20Psychology%20course!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange text-white font-poppins font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition text-sm md:text-base"
                >
                    Get Started
                </a>
            </div>
        </nav>
    );
};

export default Navbar;