import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import Logo from '../../../assets/images/logo_1.png';
import FooterAnimationLineImage from '../../../assets/images/landing/footer-line-anim.svg';
import { cn } from '../../../lib/utils';
import { useState } from 'react';
import CustomCheckbox from '../../landing/CustomCheckbox';
const SignUp = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });
    const [showMore, setShowMore] = useState(false);
    const [agreements, setAgreements] = useState({
        agreement1: false,
        agreement2: false,
        agreement3: false,
    });
    const handleAgreementChange = (agreement) => {
        if (agreement === 'agreement1') {
            // If agreement1 is being toggled, set all agreements to its new value
            const newValue = !agreements.agreement1;
            setAgreements({
                agreement1: newValue,
                agreement2: newValue,
                agreement3: newValue,
            });
        } else {
            // For other agreements, just toggle their individual values
            setAgreements((prev) => ({
                ...prev,
                [agreement]: !prev[agreement],
                // If all other agreements are checked, also check agreement1
                agreement1: agreement === 'agreement2' || agreement === 'agreement3'
                    ? (!prev[agreement] && Object.entries(prev)
                        .filter(([key]) => key !== 'agreement1' && key !== agreement)
                        .every(([_, value]) => value))
                    : prev.agreement1
            }));
        }
    };
    return (
        <motion.div


            ref={ref}
            className="max-w-[400px] mx-auto bg-white rounded-3xl shadow-lg p-4 sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}

        >
            {/* Logo */}
            <div className="flex justify-center mb-2">
                <img src={Logo} alt="Logo" className="w-32 h-32 rounded-2xl" />
            </div>

            <div
                className="relative h-[2px] overflow-hidden mb-4"
                style={{
                    background:
                        'linear-gradient(to right, #000000 0%, #FFFFFF 0%, rgba(42, 157, 143, 0.6) 50%, rgba(0, 0, 0, 0) 100%)',
                }}
                role="presentation"
            >
                <img
                    className={cn(
                        'transform transition translate-x-0 duration-100 ease-in',
                        inView && 'translate-x-[100vw] duration-[5000ms]'
                    )}
                    src={FooterAnimationLineImage}
                    alt=""
                />
            </div>
            {/* Title */}
            <h2 className="text-2xl font-semibold text-center mb-2">
                Zarejestruj się
            </h2>
            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">

                <button className="flex items-center justify-center gap-2 px-2 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                    <FcGoogle className="text-xl" />
                    <span className="text-xs">Zaloguj z Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-2 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                    <FaFacebook className="text-xl text-blue-600" />
                    <span className="text-xs">Zaloguj z Facebook</span>
                </button>
            </div>

            {/* Separator */}
            <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-[1px] bg-gray-200"></div>
                <span className="text-sm sm:text-sm text-gray-500">lub wypełnij formularz</span>
                <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* Login Form */}
            <form className="space-y-3">
                <div className='relative'>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                        <svg className="w-6 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path d="M8 0.666748C7.17591 0.666748 6.37033 0.911119 5.68512 1.36896C4.99992 1.8268 4.46587 2.47754 4.1505 3.2389C3.83514 4.00026 3.75262 4.83804 3.91339 5.64629C4.07417 6.45455 4.471 7.19697 5.05372 7.77969C5.63644 8.36241 6.37887 8.75925 7.18712 8.92002C7.99538 9.08079 8.83315 8.99828 9.59451 8.68291C10.3559 8.36755 11.0066 7.8335 11.4645 7.14829C11.9223 6.46309 12.1667 5.6575 12.1667 4.83341C12.1667 3.72835 11.7277 2.66854 10.9463 1.88714C10.1649 1.10573 9.10507 0.666748 8 0.666748ZM8 7.33341C7.50555 7.33341 7.0222 7.18679 6.61107 6.91209C6.19995 6.63738 5.87952 6.24694 5.6903 5.79012C5.50108 5.33331 5.45157 4.83064 5.54804 4.34569C5.6445 3.86074 5.8826 3.41528 6.23223 3.06565C6.58186 2.71602 7.02732 2.47791 7.51227 2.38145C7.99723 2.28499 8.49989 2.3345 8.95671 2.52372C9.41352 2.71293 9.80397 3.03337 10.0787 3.44449C10.3534 3.85561 10.5 4.33896 10.5 4.83341C10.5 5.49646 10.2366 6.13234 9.76777 6.60118C9.29893 7.07002 8.66304 7.33341 8 7.33341ZM15.5 16.5001V15.6667C15.5 14.1197 14.8854 12.6359 13.7915 11.542C12.6975 10.448 11.2138 9.83341 9.66667 9.83341H6.33333C4.78624 9.83341 3.30251 10.448 2.20854 11.542C1.11458 12.6359 0.5 14.1197 0.5 15.6667V16.5001H2.16667V15.6667C2.16667 14.5617 2.60565 13.5019 3.38705 12.7205C4.16846 11.9391 5.22826 11.5001 6.33333 11.5001H9.66667C10.7717 11.5001 11.8315 11.9391 12.6129 12.7205C13.3943 13.5019 13.8333 14.5617 13.8333 15.6667V16.5001H15.5Z" fill="#65676B" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Imię i nazwisko"
                        className="w-full ps-12 px-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />

                </div>
                <div className='relative'>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                        <svg className="mt-1 w-6 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                            <path d="M15.666 0.333374H2.33268C1.41352 0.333374 0.666016 1.08087 0.666016 2.00004V12C0.666016 12.9192 1.41352 13.6667 2.33268 13.6667H15.666C16.5852 13.6667 17.3327 12.9192 17.3327 12V2.00004C17.3327 1.08087 16.5852 0.333374 15.666 0.333374ZM15.666 2.00004V2.42587L8.99935 7.61171L2.33268 2.42671V2.00004H15.666ZM2.33268 12V4.53671L8.48768 9.32421C8.63361 9.43883 8.81379 9.50113 8.99935 9.50113C9.18491 9.50113 9.36509 9.43883 9.51102 9.32421L15.666 4.53671L15.6677 12H2.33268Z" fill="#65676B" />
                        </svg>
                    </div>
                    <input
                        type="email"
                        placeholder="Adres e-mail"
                        className="w-full ps-12 px-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                </div>
                <div className='relative'>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                        <svg className="w-6 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path d="M7.00065 0.666626C4.70315 0.666626 2.83398 2.53579 2.83398 4.83329V7.33329H2.00065C1.08148 7.33329 0.333984 8.08079 0.333984 8.99996V15.6666C0.333984 16.5858 1.08148 17.3333 2.00065 17.3333H12.0007C12.9198 17.3333 13.6673 16.5858 13.6673 15.6666V8.99996C13.6673 8.08079 12.9198 7.33329 12.0007 7.33329H11.1673V4.83329C11.1673 2.53579 9.29815 0.666626 7.00065 0.666626ZM12.0007 8.99996L12.0023 15.6666H2.00065V8.99996H12.0007ZM4.50065 7.33329V4.83329C4.50065 3.45496 5.62232 2.33329 7.00065 2.33329C8.37898 2.33329 9.50065 3.45496 9.50065 4.83329V7.33329H4.50065Z" fill="#65676B" />
                        </svg>
                    </div>
                    <input
                        type="password"
                        placeholder="Hasło"
                        className="w-full ps-12 px-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                </div>
                <div className="space-y-2 mt-6">
                    <CustomCheckbox
                        id="agreement1"
                        label="Po zapoznaniu z poniższymi oświadczeniami akceptuje ich treść."
                        checked={agreements.agreement1}
                        onChange={() => handleAgreementChange('agreement1')}
                    />
                    <CustomCheckbox
                        id="agreement2"
                        label="Akceptuję regulamin oraz politykę prywatności i tym samym wyrażam zgodę na przetwarzanie przez Administratora moich danych osobowych podanych podczas procesu rejestracji oraz w trakcie świadczenia usług. Zostałem poinformowany, że wyrażoną zgodę mogę w każdej chwili wycofać."
                        checked={agreements.agreement2}
                        onChange={() => handleAgreementChange('agreement2')}
                    />
                    <CustomCheckbox
                        id="agreement3"
                        label="Wyrażam zgodę na otrzymywanie od Administratora, telefonicznie, za pośrednictwem wiadomości SMS/NNS, push oraz e-mail, informacji handlowych w rozumieniu art. 2 pkt. 2 ustawy o świadczeniu usług drogą elektroniczną, w tym informacji o charakterze reklamowym, promocyjnym i handlowym mogących stanowić m.in. formę marketingu bezpośredniego w rozumieniu art. 172 ust. 1 ustawy prawo telekomunikacyjne. Powyższe jest jednoznaczne z udzieleniem zgody na przetwarzanie przez Administratora podanych danych osobowych w wyżej wymienionym celu."
                        checked={agreements.agreement3}
                        onChange={() => handleAgreementChange('agreement3')}
                    />
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    className="w-full py-2.5 bg-[#2A9D8F] text-white rounded-full font-medium hover:bg-emerald-600 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Zarejestruj się
                </motion.button>
            </form>


            {/* Register Link */}
            <p className="text-center mt-6 text-sm text-gray-600">
                Masz już konto?{' '}
                <a href="#" className="font-bold hover:underline">
                    Zaloguj się
                </a>
            </p>
            <div className="mt-4 text-sm text-gray-500">
                <p className="text-center">
                    <span className="font-semibold">
                        Administratorem danych osobowych jest nowAURA Sp. z o.o.
                    </span>{' '}
                    <button
                        onClick={() => setShowMore(prev => !prev)}
                        className="text-emerald-600 hover:underline font-medium"
                    >
                        Więcej
                    </button>
                </p>

                {showMore && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 text-justify px-2"
                    >
                        Administratorem Twoich danych osobowych jest nowAura Sp. z o.o. z siedzibą w Katowicach.
                        Twoje dane osobowe będą przetwarzane w szczególności w celu wykonania umowy zawartej z Tobą,
                        w tym do umożliwienia świadczenia usługi drogą elektroniczną oraz pełnego korzystania z platformy nowAURA.
                        Twoje dane osobowe mogą być przetwarzane w celach, marketingowych, statystycznych i analitycznych,
                        a także celu ewentualnego ustalenia i dochodzenia roszczeń lub obrony przed nimi. W razie wyrażenia
                        odpowiedniej zgody Twoje dane będą przetwarzane także w celu komunikacji. Gwarantujemy spełnienie
                        wszystkich Twoich praw wynikających z ogólnego rozporządzenia o ochronie danych, tj. prawo dostępu,
                        sprostowania oraz usunięcia Twoich danych, ograniczenia ich przetwarzania, prawo do ich przenoszenia
                        (więcej na temat przetwarzania Twoich danych osobowych znajdziesz w Polityce Prywatności).
                    </motion.div>
                )}
            </div>
        </motion.div>

    );
};

export default SignUp;