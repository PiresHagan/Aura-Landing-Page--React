import { motion } from 'framer-motion';
import { useState } from 'react';
import Subtitle from "../components/landing/Subtitle";
import SectionTitle from "../components/landing/SectionTitle";
import ContactForm from "../components/landing/ContactForm";
import ContactSidebar from "../components/landing/ContactSidebar";
const ContactUs = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    };
    return (
        <section className="my-8 px-[70px] flex flex-col items-center max-1024:px-4">

            <div className="max-1024:hidden">
                <Subtitle title="Kontakt" />
            </div>
            <div className="hidden max-1024:block">
                <Subtitle title="Kontakt" />
            </div>

            <SectionTitle title="Skontaktuj się z Nami" className="mt-8 text-[var(--quartz)] text-[52px] max-1024:mt-3" />
            <motion.div
                className="container mx-auto py-12 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <motion.div
                        // className="max-w-[600px] mx-auto p-8 bg-white rounded-2xl shadow-lg"
                        className="max-w-[800px] lg:col-span-2 rounded-2xl shadow-lg mx-auto p-8 bg-white rounded-2xl"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-2xl font-bold mb-6"
                            variants={itemVariants}
                        >
                            Formularz kontaktowy
                        </motion.h2>
                        <ContactForm />
                    </motion.div>
                    <div className="lg:col-span-1">
                        <ContactSidebar />
                    </div>
                </div>
            </motion.div>
        </section>



    )
}


export default ContactUs;
