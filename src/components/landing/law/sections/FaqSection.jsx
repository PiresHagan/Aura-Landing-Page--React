import { useState } from 'react';
import SeparatorBottomImage from '../../../../assets/images/landing/separator-bottom.svg'
import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import { useLocation } from 'react-router-dom';
const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const location = useLocation();
    const isFaqs = location.pathname === '/landings/faqs';




    const faqData = [
        {
            question: "What is ChatenAI ? How does it work?",
            answer: "ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you'd typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!"
        },
        {
            question: "What kind of questions can I ask ChatenAI?",
            answer: "You can ask various questions about..."
        },
        {
            question: "Can I get update regularly and For how long do I get updates?",
            answer: "Yes, you can receive regular updates..."
        },
        {
            question: "How can I get the customer support?",
            answer: "Our customer support team is available..."
        },
        {
            question: "HIs my data safe with ChatenAI?",
            answer: "Yes, we take data security very seriously..."
        },
        {
            question: "Is ChatenAI available in multiple languages?",
            answer: "Yes, ChatenAI supports multiple languages..."
        }
    ];
    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (

        <section className="mt-8 px-[70px] flex flex-col items-center max-1024:px-4 mb-[100px]">
            {!isFaqs && <img src={SeparatorBottomImage} className="w-full" alt="" />}

            <div className={`max-1024:hidden ${!isFaqs && 'mt-20'}`}>
                <Subtitle title="Pomoc" />
            </div>
            <SectionTitle title="Często Zadawane Pytania" className={`${!isFaqs ? 'mt-8' : 'mt-3'} text-[var(--quartz)] text-[44px] max-1024:mt-3`} />
            <div className="w-full max-w-[1024px] mt-8">

                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="mb-4 bg-[#F8F9FB] rounded-lg overflow-hidden"
                    >
                        <button
                            className="w-full px-6 py-4 text-left flex justify-between items-center"
                            onClick={() => toggleFaq(index)}
                        >
                            <span className="font-medium">{faq.question}</span>

                            <span className="text-2xl transform transition-transform duration-200" style={{
                                transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                            }}>
                                +
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="p-7 border-t border-gray-200">
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqSection;
