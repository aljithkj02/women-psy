import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Mind from '../assets/Mind.jpg'
import Thumb1 from '../assets/thumb1.jpg'
import Thumb2 from '../assets/thumb2.jpg'

import Athira from '../assets/athira.mov'
import Nisa from '../assets/nisa.mp4'

const testimonials = [
    {
        quote: '"എനിക്ക് കിട്ടേണ്ട answers എല്ലാം ഈ കോഴ്സിൽ നിന്നും കിട്ടീട്ടുണ്ട്. ഇപ്പോൾ ഞാൻ satisfied ആണ്!"',
        url: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1746106533/a1_fzq1su.ogg",
    },
    {
        quote: '"പറഞ്ഞു തന്ന methods, കാര്യങ്ങളൊക്കെ പക്കാ ആണ്. ഇതൊന്നും നമ്മൾ ചെയ്തില്ল, അതാണ് പ്രശ്നം പറ്റിയത്!"',
        url: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1748521067/a2_wns77x-_AudioTrimmer.com_ohmwte.ogg",
    },
    {
        quote: '"ഓരോരുത്തരും കേൾക്കേണ്ട കോഴ്സ് തന്നെ ആണ് ഇത്. കാരണം ഒരാളിൽ തന്നെ അടിഞ്ഞു കൂടി ഇരിക്കുന്നവർ പ്രത്യേകിച്ചു കേൾക്കണ്ട സംഭവം തന്നെ ആണ് ഇത്!"',
        url: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1746106554/a3_de2zp2.ogg",
    },
];

const INITIAL_TIME = 11 * 60 * 60 + 23 * 60 + 45; // in seconds
const STORAGE_KEY = "urgency_timer_start_time";

const UrgencyButton = () => {
    const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

    useEffect(() => {
        let startTimestamp = localStorage.getItem(STORAGE_KEY);

        const now = Math.floor(Date.now() / 1000); // current time in seconds

        if (!startTimestamp) {
            // If no timestamp, store the current time
            localStorage.setItem(STORAGE_KEY, now.toString());
            startTimestamp = now.toString();
        }

        const elapsed = now - parseInt(startTimestamp);
        let remaining = INITIAL_TIME - elapsed;

        if (remaining <= 0) {
            // If expired, reset the timer
            localStorage.setItem(STORAGE_KEY, now.toString());
            remaining = INITIAL_TIME;
        }

        setTimeLeft(remaining);

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    const newStart = Math.floor(Date.now() / 1000);
                    localStorage.setItem(STORAGE_KEY, newStart.toString());
                    return INITIAL_TIME;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="mt-8 space-y-4">
            <div className="bg-red-600 text-white text-center py-3 px-6 rounded-lg">
                <div className="text-sm font-semibold">Limited Time Offer Ends In:</div>
                <div className="text-2xl font-bold tracking-wider">
                    {String(hours).padStart(2, "0")}:
                    {String(minutes).padStart(2, "0")}:
                    {String(seconds).padStart(2, "0")}
                </div>
            </div>
            <motion.a
                href="https://superprofile.bio/course/woman-psychology"
                // target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full px-8 py-4 text-center bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-lg shadow-lg transition-colors"
            >
                ഇപ്പോൾ തന്നെ Enroll ചെയൂ
            </motion.a>
        </div>
    );
};

const PsychologyLanding = () => {
    const mediaRefs = useRef([]);

                                    // @ts-ignore
    const handleMediaPlay = (index) => {
        mediaRefs.current.forEach((media, i) => {
            // @ts-ignore
            if (media && i !== index && !media.paused) {
                // @ts-ignore
                media.pause();
            }
        });
    };

    return (
        <div className="bg-gray-900 text-gray-100 font-sans">
            
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                        നീ മനസ്സിലാക്കണമെന്ന് <br />
                        <span className='text-red-400'>അവൾ ഒരിക്കലും ആഗ്രഹിക്കാത്ത സത്യം</span>
                    </h1>
                    
                    <div className="max-w-3xl mx-auto mb-8">
                        <img
                            src={Mind}
                            alt="Female Psychology"
                            className="w-full rounded-lg shadow-xl"
                        />
                    </div>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        കേരളത്തിൽ ഏറ്റവും കൂടുതൽ ആണുങ്ങൾ ENTER ആയിക്കൊണ്ടിരിക്കുന്ന #1 കോഴ്സ്
                    </p>

                    <UrgencyButton />
                </motion.div>
            </section>

            {/* Problem Section */}
            <section className="py-20 px-6 bg-gray-800">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            ഇതാണോ നിന്റെ അവസ്ഥ?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <span className="text-red-400 text-xl">•</span>
                                    <p className="text-lg">അവൾ എന്തിനാണ് ദേഷ്യപ്പെടുന്നത് എന്ന് മനസ്സിലാകുന്നില്ല</p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="text-red-400 text-xl">•</span>
                                    <p className="text-lg">ചെറിയ കാര്യങ്ങൾക്ക് വലിയ പ്രശ്നം ഉണ്ടാക്കുന്നു</p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="text-red-400 text-xl">•</span>
                                    <p className="text-lg">എന്ത് ചെയ്താലും അവൾക്ക് സന്തോഷമില്ല</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <span className="text-red-400 text-xl">•</span>
                                    <p className="text-lg">നിന്നെ emotionally control ചെയ്യുന്നു</p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="text-red-400 text-xl">•</span>
                                    <p className="text-lg">മറ്റുള്ളവരോട് നിന്നെ കുറിച്ച് complain ചെയ്യുന്നു</p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="text-red-400 text-xl">•</span>
                                    <p className="text-lg">നിന്റെ സമയവും പണവും വെറുതെ പോകുന്നു</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-red-900 p-8 rounded-lg text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            സത്യം ഇതാണ്:
                        </h3>
                        <p className="text-xl">
                            നിനക്ക് <strong>Female Psychology</strong> അറിയില്ല.<br />
                            അതുകൊണ്ടാണ് അവൾ നിന്നെ handle ചെയ്യുന്നത്, നീ അവളെ അല്ല!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            ഇതാ Solution - Watch This!
                        </h2>
                        <p className="text-xl text-gray-300">
                            Female Psychology Expert എങ്ങനെയാണ് ഇത് work ചെയ്യുന്നത് എന്ന് explain ചെയ്യുന്നു
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="aspect-[9/14] bg-black rounded-lg overflow-hidden shadow-xl">
                                <video
                                    className="w-full h-full object-contain"
                                    controls
                                    // @ts-ignore
                                    ref={(el) => (mediaRefs.current[0] = el)}
                                    onPlay={() => handleMediaPlay(0)}
                                    poster={Thumb1}
                                >
                                    <source src={Nisa} type="video/mp4" />
                                </video>
                            </div>
                            
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="aspect-[9/14] bg-black rounded-lg overflow-hidden shadow-xl">
                                <video
                                    className="w-full h-full object-contain"
                                    controls
                                    // @ts-ignore
                                    ref={(el) => (mediaRefs.current[1] = el)}
                                    onPlay={() => handleMediaPlay(1)}
                                    poster={Thumb2}
                                >
                                    <source src={Athira} type="video/mp4" />
                                </video>
                            </div>
                            
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 max-w-md mx-auto"
                    >
                        <UrgencyButton />
                    </motion.div>
                </div>
            </section>

            {/* What You'll Learn */}
            <section className="py-20 px-6 bg-gray-800">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            ഈ കോഴ്സിൽ നിന്ന് നീ പഠിക്കാൻ പോകുന്നത്:
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-start space-x-4">
                                <span className="text-green-400 text-xl font-bold">✓</span>
                                <p className="text-lg">Female Mind എങ്ങനെ work ചെയ്യുന്നു</p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-green-400 text-xl font-bold">✓</span>
                                <p className="text-lg">അവളുടെ emotions എങ്ങനെ handle ചെയ്യാം</p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-green-400 text-xl font-bold">✓</span>
                                <p className="text-lg">എങ്ങനെയാണ് girls control ചെയ്യുന്നത്</p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-green-400 text-xl font-bold">✓</span>
                                <p className="text-lg">Relationship-ൽ power balance maintain ചെയ്യാൻ</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-start space-x-4">
                                <span className="text-green-400 text-xl font-bold">✓</span>
                                <p className="text-lg">അവളുടെ manipulation tactics identify ചെയ്യാൻ</p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-green-400 text-xl font-bold">✓</span>
                                <p className="text-lg">എങ്ങനെ respect ഉം attraction ഉം നേടാം</p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-green-400 text-xl font-bold">✓</span>
                                <p className="text-lg">Arguments വിജയകരമായി handle ചെയ്യാൻ</p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-green-400 text-xl font-bold">✓</span>
                                <p className="text-lg">Long-term relationship strategies</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-12"
                    >
                        സ്ത്രീകളെ മനസ്സിലാക്കാൻ ആണുങ്ങൾ എന്തുകൊണ്ട് ഈ കോഴ്സിൽ JOIN ചെയ്യുന്നു?
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-gray-800 p-6 rounded-lg"
                            >
                                <blockquote className="text-gray-300 mb-4 italic">
                                    {item.quote}
                                </blockquote>
                                <audio
                                    controls
                                    className="w-full"
                                    // @ts-ignore
                                    ref={(el) => (mediaRefs.current[index + 2] = el)}
                                    onPlay={() => handleMediaPlay(index + 2)}
                                >
                                    <source src={item.url} type="audio/mpeg" />
                                </audio>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6 bg-gray-800 text-center">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-8">
                            Ready to Take Control?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Female Psychology മനസ്സിലാക്കി നിന്റെ relationship-നെ transform ചെയ്യൂ
                        </p>
                        
                        <div className="bg-gray-900 p-8 rounded-lg mb-8">
                            <div className="text-3xl font-bold mb-4">
                                <span className="line-through text-gray-500">₹2,999</span>
                                <span className="text-green-400 ml-4">₹1,499</span>
                            </div>
                            <p className="text-gray-400">Limited Time - 50% Off</p>
                        </div>

                        <UrgencyButton />
                         
                        {/* <div className="mt-8 text-sm text-gray-400">
                            ✓ Lifetime Access &nbsp;&nbsp; ✓ WhatsApp Support &nbsp;&nbsp; ✓ 100% Satisfaction
                        </div> */}
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-8 px-6 text-center border-t border-gray-800">
                <p className="text-gray-500">
                    {/* © 2024 Female Psychology Course - Transform Your Relationship */}
                    Woman Psychology
                </p>
            </footer>
        </div>
    );
};

export default PsychologyLanding;