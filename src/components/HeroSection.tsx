import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section className="bg-navy text-white py-20 px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                Unlock the Secrets of Women’s Psychology
            </h1>
            <p className="text-lg md:text-xl font-inter text-slate-200 mb-8 max-w-2xl">
                Master the art of understanding women with our exclusive course designed for men who want real insights.
            </p>
            <a
                href="https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Women%20Psychology%20course!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange text-white font-poppins font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition"
            >
                Join Now via WhatsApp
            </a>
        </section>
    );
};

export default HeroSection;