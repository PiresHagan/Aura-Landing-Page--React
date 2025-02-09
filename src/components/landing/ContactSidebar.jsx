import { motion } from 'framer-motion';

const ContactSidebar = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.2
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10
            }
        }
    };

    const contactItems = [
        {
            title: "Zadzwoń do nas",
            items: ["+444 555 666 777", "+222 222 222 333"],
            icon: (
                <svg className="w-[40px] h-[40px] text-orange-400" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M3 18V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V18"
                        stroke="#FF9F66"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M21 19C21 20.1046 20.1046 21 19 21C17.8954 21 17 20.1046 17 19V15C17 13.8954 17.8954 13 19 13C20.1046 13 21 13.8954 21 15V19Z"
                        fill="#FF9F66"
                    />
                    <path
                        d="M7 19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19V15C3 13.8954 3.89543 13 5 13C6.10457 13 7 13.8954 7 15V19Z"
                        fill="#FF9F66"
                    />
                </svg>
            )
        },
        {
            title: "Napisz do nas",
            items: ["admin@gmail.com", "example@gmail.com"],
            icon: (
                <svg className="w-[40px] h-[40px] text-orange-400" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z"
                        fill="#FF9F5A"
                    />
                </svg>
            )
        },
        {
            title: "nowAURA Sp. z o.o.",
            items: ["ul. Warszawska 40", "40-008 Katowice", "NIP 9542878235"],
            icon: (
                <svg className="w-[40px] h-[40px] text-orange-400" viewBox="0 0 40 40" fill="none">
                    <path d="M20.0007 29.2131L21.6673 25.8798V17.3098C24.5357 16.5648 26.6673 13.9765 26.6673 10.8798C26.6673 7.20313 23.6773 4.21313 20.0007 4.21313C16.324 4.21313 13.334 7.20313 13.334 10.8798C13.334 13.9765 15.4657 16.5648 18.334 17.3098V25.8798L20.0007 29.2131ZM16.6673 10.8798C16.6673 9.04147 18.1623 7.54647 20.0007 7.54647C21.839 7.54647 23.334 9.04147 23.334 10.8798C23.334 12.7181 21.839 14.2131 20.0007 14.2131C18.1623 14.2131 16.6673 12.7181 16.6673 10.8798Z" fill="#F4A261" />
                    <path d="M27.1123 18.4848L26.224 21.6982C30.5423 22.8915 33.334 25.1865 33.334 27.5465C33.334 30.6998 27.859 34.2132 20.0007 34.2132C12.1423 34.2132 6.66732 30.6998 6.66732 27.5465C6.66732 25.1865 9.45898 22.8915 13.779 21.6965L12.8907 18.4832C6.99565 20.1132 3.33398 23.5848 3.33398 27.5465C3.33398 33.1532 10.6557 37.5465 20.0007 37.5465C29.3457 37.5465 36.6673 33.1532 36.6673 27.5465C36.6673 23.5848 33.0057 20.1132 27.1123 18.4848Z" fill="#F4A261" />
                </svg>
            )
        }
    ];

    return (
        <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {contactItems.map((item, index) => (
                <motion.div
                    key={index}
                    className="bg-[#F8F9FB] p-8 rounded-2xl"
                    variants={cardVariants}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                >
                    <div className="flex items-start gap-4">

                        <div className="space-y-4">
                            <motion.div
                                variants={iconVariants}
                                className="mt-1"
                            >
                                {item.icon}
                            </motion.div>
                            <motion.h3
                                className="font-medium"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                {item.title}
                            </motion.h3>

                            <div className="space-y-1">
                                {item.items.map((subItem, subIndex) => (
                                    <motion.p
                                        key={subIndex}
                                        className="text-gray-600"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: (index * 0.2) + (subIndex * 0.1),
                                            duration: 0.3
                                        }}
                                    >
                                        {subItem}
                                    </motion.p>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ContactSidebar;