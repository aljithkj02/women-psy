import React from "react";

const VideoSection: React.FC = () => {
    return (
        <section className="py-16 px-6 bg-gray-50">
            <h2 className="text-3xl font-poppins font-bold text-navy text-center mb-8">
                See What You’ll Learn
            </h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Placeholder Video 1 */}
                <div className="bg-slate h-64 flex items-center justify-center rounded-lg">
                    <p className="text-white font-inter">Video 1 Placeholder</p>
                </div>
                {/* Placeholder Video 2 */}
                <div className="bg-slate h-64 flex items-center justify-center rounded-lg">
                    <p className="text-white font-inter">Video 2 Placeholder</p>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;