import { motion } from "framer-motion";
import FaqSection from "../components/landing/law/sections/FaqSection";
const FAQs = () => {
    return (
        <>
            <FaqSection />
            <motion.div
                className="text-center mb-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-gray-600 mb-4">Nie znalazłeś odpowiedzi na swoje pytanie?</p>
                <motion.button
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black border-2 border-emerald-500 hover:bg-emerald-50 transition-colors font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Skontaktuj się z nami
                </motion.button>
            </motion.div>
        </>
    )

}



export default FAQs;
