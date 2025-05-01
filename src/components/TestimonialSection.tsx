import React from "react";

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        { id: 1, name: "John D.", audioSrc: "/audio/testimonial1.mp3" },
        { id: 2, name: "Mike S.", audioSrc: "/audio/testimonial2.mp3" },
    ];

    return (
        <section className="py-16 px-6 bg-white">
            <h2 className="text-3xl font-poppins font-bold text-navy text-center mb-8">
                What Our Students Say
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex flex-col items-center">
                        <p className="text-lg font-inter text-slate mb-4">{testimonial.name}</p>
                        <audio controls className="w-full max-w-md">
                            <source src={testimonial.audioSrc} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;