import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import Logo from '../../../assets/images/logo_1.png';
import FooterAnimationLineImage from '../../../assets/images/landing/footer-line-anim.svg';
import { cn } from '../../../lib/utils';


const Login = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });
    return (
        <motion.div
            ref={ref}
            className="max-w-[460px] mx-auto bg-white rounded-3xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}

        >
            {/* Logo */}
            <div className="flex justify-center mb-3">
                <img src={Logo} alt="Logo" className="w-40 h-40 rounded-2xl" />
            </div>

            <div
                className="relative h-[2px] overflow-hidden mb-8"
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
            <h2 className="text-2xl font-semibold text-center mb-3">
                Witaj ponownie
            </h2>
            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                    <FcGoogle className="text-xl" />
                    <span className="text-sm">Zaloguj z Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                    <FaFacebook className="text-xl text-blue-600" />
                    <span className="text-sm">Zaloguj z Facebook</span>
                </button>
            </div>

            {/* Separator */}
            <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-[1px] bg-gray-200"></div>
                <span className="text-sm text-gray-500">lub zaloguj się</span>
                <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* Login Form */}
            <form className="space-y-4">
                <div className='relative'>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                        <svg className="mt-1 w-6 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                            <path d="M15.666 0.333374H2.33268C1.41352 0.333374 0.666016 1.08087 0.666016 2.00004V12C0.666016 12.9192 1.41352 13.6667 2.33268 13.6667H15.666C16.5852 13.6667 17.3327 12.9192 17.3327 12V2.00004C17.3327 1.08087 16.5852 0.333374 15.666 0.333374ZM15.666 2.00004V2.42587L8.99935 7.61171L2.33268 2.42671V2.00004H15.666ZM2.33268 12V4.53671L8.48768 9.32421C8.63361 9.43883 8.81379 9.50113 8.99935 9.50113C9.18491 9.50113 9.36509 9.43883 9.51102 9.32421L15.666 4.53671L15.6677 12H2.33268Z" fill="#65676B" />
                        </svg>
                    </div>
                    <input
                        type="email"
                        placeholder="Adres e-mail"
                        className="w-full ps-12 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                        className="w-full ps-12 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                    <a href="#" className="text-sm hover:underline font-bold">
                        Odzyskaj hasło
                    </a>
                </div>


                {/* Submit Button */}
                <motion.button
                    type="submit"
                    className="w-full py-3 bg-[#2A9D8F] text-white rounded-full font-medium hover:bg-emerald-600 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Zaloguj się
                </motion.button>
            </form>

            {/* Register Link */}
            <p className="text-center mt-6 text-sm text-gray-600">
                Nie masz jeszcze konta?{' '}
                <a href="#" className="font-bold hover:underline">
                    Zarejestruj się
                </a>
            </p>
        </motion.div>
    );
};

export default Login;