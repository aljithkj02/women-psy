import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { NAMES } from "../constants";

function getRandomIndex(arrayLength: number) {
    return Math.floor(Math.random() * arrayLength);
}

export const UrgencyButton = () => {
    const [isBlinking, setIsBlinking] = useState(false);
    const [showPulse, setShowPulse] = useState(false);
    const [justDecreased, setJustDecreased] = useState(false);

    useEffect(() => {

        setIsBlinking(true);
        setJustDecreased(true);
        setTimeout(() => {
            setIsBlinking(false);
            setJustDecreased(false);
        }, 3000);

        // Pulse effect every 10 seconds for urgency
        const pulseInterval = setInterval(() => {
            setShowPulse(true);
            setTimeout(() => setShowPulse(false), 2000);
        }, 10000);

        return () => {
            clearInterval(pulseInterval);
        };
    }, []);


    return (
        <div className='flex flex-col items-center mt-4 space-y-3'>
            {/* Urgency Indicator with Enhanced Animations */}
            <motion.div
                className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden`}
                animate={showPulse ? {
                    scale: [1, 1.1, 1],
                    boxShadow: [
                        '0 0 0 0 rgba(239, 68, 68, 0.7)',
                        '0 0 0 10px rgba(239, 68, 68, 0)',
                        '0 0 0 0 rgba(239, 68, 68, 0)'
                    ]
                } : {}}
                transition={{
                    duration: isBlinking ? 0.6 : 0.8,
                    repeat: isBlinking ? 4 : showPulse ? 2 : 0,
                    ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
            >
                <motion.div
                // animate={{
                //     x: [-2, 2, -2, 0],
                // }}
                // transition={{
                //     duration: 0.5,
                //     repeat: Infinity,
                //     repeatDelay: 3
                // }}
                >
                    🚨 FINAL SEATS!
                </motion.div>

                {/* Glowing effect for critical urgency */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-full opacity-50"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            {/* Seat Decrease Notification */}
            <AnimatePresence>
                {justDecreased && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold"
                    >
                        🚨 {NAMES[getRandomIndex(NAMES.length)]} just purchased!
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Enhanced Join Now Button */}
            <motion.div
                className="relative"
                animate={{
                    y: [0, -3, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* Glowing ring effect */}
                {/* <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-green-500 opacity-30"
                /> */}

                <motion.a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.05,
                        rotate: [0, -1, 1, 0],
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="relative inline-block px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:from-green-300 hover:to-green-400 transition-all duration-300 transform overflow-hidden"
                    // animate={{
                    //     boxShadow: [
                    //         '0 10px 25px rgba(75, 251, 36, 0.5)',
                    //         '0 15px 35px rgba(75, 251, 36, 0.8)',
                    //         '0 10px 25px rgba(75, 251, 36, 0.5)'
                    //     ]
                    // }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Shimmer effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                        // animate={{
                        //     x: ['-100%', '100%']
                        // }}
                        // transition={{
                        //     duration: 2,
                        //     repeat: Infinity,
                        //     repeatDelay: 3,
                        //     ease: "easeInOut"
                        // }}
                        style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                        }}
                    />

                    <div className="relative flex items-center justify-center space-x-2 px-10">
                        <motion.span
                            animate={{
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                repeatDelay: 2
                            }}
                        >
                            Join Now
                        </motion.span>

                    </div>
                </motion.a>
            </motion.div>

            {/* Critical Urgency Messages */}
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center space-y-2"
                >
                    <motion.p
                        animate={{
                            color: ['#ef4444', '#dc2626', '#ef4444']
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="text-sm font-bold"
                    >
                        ⚠️ Almost sold out!
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="text-xs text-orange-400"
                    >
                        🕒 Don't miss out - secure your spot now!
                    </motion.p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};