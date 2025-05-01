import React, { useRef } from 'react';
import { motion } from 'framer-motion';


const videos = [
    {
        title: "Watch This First",
        url: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1746106137/wp2_rmi6mv.mp4",
    },
    {
        title: "Course Sneak Peek",
        url: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1746106128/wp_qga1nd.mp4",
    },
];

const testimonials = [
    {
        quote: '"എനിക്ക് കിട്ടേണ്ട answers എല്ലാം  ഈ കോഴ്സിൽ നിന്നും കിട്ടീട്ടുണ്ട്. ഇപ്പോൾ ഞാൻ satisfied ആണ്!"',
        url: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1746106533/a1_fzq1su.ogg",
    },
    {
        quote: '"പറഞ്ഞു തന്ന methods, കാര്യങ്ങളൊക്കെ പക്കാ ആണ്. ഇതൊന്നും നമ്മൾ ചെയ്തില്ല, അതാണ് പ്രശ്നം പറ്റിയത്!"',
        url: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1746106542/a2_wns77x.ogg",
    },
    {
        quote: '"ഓരോരുത്തരും കേൾക്കേണ്ട കോഴ്സ് തന്നെ ആണ് ഇത്. കാരണം ഒരാളിൽ തന്നെ അടിഞ്ഞു കൂടി ഇരിക്കുന്നവർ പ്രത്യേകിച്ചു കേൾക്കണ്ട സംഭവം തന്നെ ആണ് ഇത്!"',
        url: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1746106554/a3_de2zp2.ogg",
    },
];

const LandingPage: React.FC = () => {
    const mediaRefs = useRef<(HTMLMediaElement | null)[]>([]);

    const handleMediaPlay = (index: number) => {
        mediaRefs.current.forEach((media, i) => {
            if (media && i !== index && !media.paused) {
                media.pause();
            }
        });
    };

    return (
        <div className="bg-white text-slate-900 font-sans">
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-[38px] font-bold leading-tight max-w-3xl"
                >
                    Women Psychology മനസ്സിലാക്കൂ<br />
                    നിങ്ങളുടെ ബന്ധങ്ങൾ മെച്ചപ്പെടുത്തൂ
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-6 text-lg md:text-xl max-w-xl text-gray-600"
                >
                    പുരുഷന്മാർക്ക് സ്ത്രീകളുടെ മനസ്സിന്റെ രഹസ്യങ്ങൾ തുറന്നു കാണിക്കാൻ സഹായിക്കുന്ന ഒരു ആഴത്തിലുള്ള പ്രായോഗിക കോഴ്സ്
                </motion.p>
                <motion.a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="mt-8 px-6 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-xl shadow-md hover:shadow-lg transition"
                >
                    Enroll Now
                </motion.a>
            </section>


            {/* Video Section */}
            <section className="py-20 bg-gray-100 px-4">
                <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
                    {videos.map((video, index) => (
                        <div key={index}>
                            <h2 className="text-2xl font-semibold mb-4">{video.title}</h2>
                            <div className="aspect-[9/16] bg-black rounded-xl overflow-hidden">
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    // @ts-ignore
                                    ref={(el) => (mediaRefs.current[index] = el)}
                                    onPlay={() => handleMediaPlay(index)}
                                >
                                    <source src={video.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Audio Testimonials */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-10">
                        നമ്മുടെ കോഴ്സ് എടുത്ത പുരുഷന്മാർ പറയുന്നു:
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((item, index) => {
                            const globalIndex = index + videos.length; // keep unique index across video/audio
                            return (
                                <div key={index} className="p-6 bg-white rounded-xl shadow">
                                    <p className="mb-4 text-gray-700 italic">{item.quote}</p>
                                    <audio
                                        controls
                                        className="w-full"
                                        // @ts-ignore
                                        ref={(el) => (mediaRefs.current[globalIndex] = el)}
                                        onPlay={() => handleMediaPlay(globalIndex)}
                                    >
                                        <source src={item.url} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>u

            {/* Final CTA */}
            <section className="py-20 bg-slate-900 text-white text-center px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold mb-6"
                >
                    Ready to Transform Your Understanding?
                </motion.h2>
                <motion.a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-xl shadow-md hover:shadow-xl transition"
                >
                    Enroll Now
                </motion.a>
            </section>
        </div>
    );
};

export default LandingPage;
