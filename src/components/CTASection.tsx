import React from "react";

const CTASection: React.FC = () => {
    return (
        <section className="bg-orange text-white py-16 px-6 text-center">
            <h2 className="text-3xl font-poppins font-bold mb-4">
                Ready to Understand Women Like Never Before?
            </h2>
            <p className="text-lg font-inter mb-8 max-w-xl mx-auto">
                Join our course today and start mastering women’s psychology.
            </p>
            <a
                href="https://wa.me/1234567890?text=I'm%20ready%20to%20join%20the%20Women%20Psychology%20course!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white font-poppins font-semibold py-3 px-6 rounded-lg hover:bg-navy-900 transition"
            >
                Enroll Now via WhatsApp
            </a>
        </section>
    );
};

export default CTASection;