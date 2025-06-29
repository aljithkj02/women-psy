import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Mind from '../assets/Mind.jpg'
import { UrgencyButton } from './UrgencyButton';
import Thumb1 from '../assets/thumb1.jpg'
import Thumb2 from '../assets/thumb2.jpg'


const videos = [
    {
        title: "Watch This First",
        url: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1747219673/lv_0_20250513215710_ys3hp2.mp4",
    },
    {
        title: "Course Sneak Peek",
        url: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1746607328/psy_n1pirk.mp4",
    },
];

const testimonials = [
    {
        quote: '"എനിക്ക് കിട്ടേണ്ട answers എല്ലാം  ഈ കോഴ്സിൽ നിന്നും കിട്ടീട്ടുണ്ട്. ഇപ്പോൾ ഞാൻ satisfied ആണ്!"',
        url: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1746106533/a1_fzq1su.ogg",
    },
    {
        quote: '"പറഞ്ഞു തന്ന methods, കാര്യങ്ങളൊക്കെ പക്കാ ആണ്. ഇതൊന്നും നമ്മൾ ചെയ്തില്ല, അതാണ് പ്രശ്നം പറ്റിയത്!"',
        url: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1748521067/a2_wns77x-_AudioTrimmer.com_ohmwte.ogg",
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
        <div className="bg-gray-900 text-gray-100 font-sans">

            {/* Intro Image Section */}
            <section className="py-10 px-4 text-center bg-gray-800">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                    {/* ഈ കോഴ്സിൽ നിന്നെ വേണ്ടി കാത്തിരിക്കുന്നത് */}
                    {/* Woman Psychology */}

                    നീ മനസ്സിലാക്കണമെന്ന് <br />
                    <span className='text-red-500'>അവൾ ഒരിക്കലും ആഗ്രഹിക്കാത്ത സത്യം. </span>
                    <br />അതാണ് ഞങ്ങൾ പഠിപ്പിക്കുന്നത് <br />
                </h2>
                <div className="max-w-4xl mx-auto">
                    <img
                        src={Mind}
                        alt="Course Intro"
                        className="w-full rounded-xl shadow-2xl border border-gray-700"
                    />
                </div>
            </section>

            {/* Hero Section */}
            <section className="py-16 flex flex-col items-center justify-center px-6 text-center bg-gray-900">
                {/* <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-[38px] font-bold leading-tight max-w-3xl text-white"
                >
                    നീ മനസ്സിലാക്കണമെന്ന് <br />
                    <span className='text-yellow-400'>അവൾ ഒരിക്കലും ആഗ്രഹിക്കാത്ത സത്യം. </span> 
                    <br />അതാണ്‌ ഈ കോഴ്സ്<br />
                </motion.h1> */}

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-6 text-lg md:text-xl max-w-xl text-gray-300"
                >
                    {/* ഓരോ ആണുങ്ങളും  ഏറ്റവും കൂടുതൽ Enter ആയി  കൊണ്ടിരിക്കുന്ന കേരളത്തിലെ number 1 കോഴ്സ് */}
                    {/* കേരളത്തിലെ പുരുഷന്മാർ ഏറ്റവുമധികം ആകർഷിക്കപ്പെടുന്ന #1 Course */}
                    കേരളത്തിൽ ഏറ്റവും കൂടുതൽ ആണുങ്ങൾ ENTER ആയിക്കൊണ്ടിരിക്കുന്ന #1 കോഴ്സ്!
                </motion.p>
                <motion.a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="mt-8 px-6 py-3 bg-white font-bold text-slate-900 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-300 transition"
                >
                    Enroll Now
                </motion.a>
            </section>


            {/* Video Section */}
            <section className="py-20 bg-gray-800 px-4">
                <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">

                    <div >
                        {/* <h2 className="text-2xl font-semibold mb-4">{video.title}</h2> */}
                        <div className="aspect-[9/14] bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                            <video
                                className="w-full h-full object-center"
                                controls
                                // @ts-ignore
                                ref={(el) => (mediaRefs.current[2] = el)}
                                onPlay={() => handleMediaPlay(2)}
                                poster={Thumb1}
                            >
                                <source src={"https://res.cloudinary.com/dquq0mrkt/video/upload/v1746607328/psy_n1pirk.mp4"} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* <div className='flex justify-center mt-4'>
                            <motion.a
                                href="https://wa.me/your-number"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="inline-block px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-yellow-300 transition"
                            >
                                Join Now
                            </motion.a>
                        </div> */}
                        <UrgencyButton />
                    </div>

                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-4">{video.title}</h2> */}
                        <div className="aspect-[9/14] bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                            <video
                                className="w-full h-full object-center"
                                controls
                                // @ts-ignore
                                ref={(el) => (mediaRefs.current[1] = el)}
                                onPlay={() => handleMediaPlay(1)}
                                poster={Thumb2}
                            >
                                <source src={"https://res.cloudinary.com/dquq0mrkt/video/upload/v1747219673/lv_0_20250513215710_ys3hp2.mp4"} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* <div className='flex justify-center mt-4'>
                            <motion.a
                                href="https://wa.me/your-number"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
                            >
                                Join Now
                            </motion.a>
                        </div> */}
                    </div>

                </div>
            </section>

            {/* Audio Testimonials */}
            <section className="py-20 px-4 bg-gray-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-10 text-white">
                        സ്ത്രീകളെ മനസ്സിലാക്കാൻ ആണുങ്ങൾ എന്തുകൊണ്ട് ഈ കോഴ്സിൽ JOIN ചെയ്യുന്നു?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((item, index) => {
                            const globalIndex = index + videos.length; // keep unique index across video/audio
                            return (
                                <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                                    <p className="mb-4 text-gray-300 italic">{item.quote}</p>
                                    <audio
                                        controls
                                        className="w-full [&::-webkit-media-controls-panel]:bg-gray-700"
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
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-slate-900 text-white text-center px-4 border-t border-gray-800">
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
                    className="inline-block px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-yellow-300 transition"
                >
                    Enroll Now
                </motion.a>
            </section>
        </div>
    );
};

export default LandingPage;