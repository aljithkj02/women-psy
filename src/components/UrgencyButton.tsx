import { motion, AnimatePresence } from 'framer-motion';

export const UrgencyButton = () => {


    return (
        <div className='flex flex-col items-center mt-4 space-y-3'>

            {/* Enhanced Join Now Button */}
            <motion.div
                className="mt-4"
            >
                <motion.a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="mt-8 px-6 py-3 bg-white font-bold text-slate-900 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
                >
                    Enroll Now
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

                    {/* <motion.p
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
                    </motion.p> */}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};