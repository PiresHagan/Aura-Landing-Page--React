import Login from "../components/landing/auth/Login";
import { useLocation } from "react-router-dom";
import SeparatorTopImg from '../assets/images/landing/separator-top.svg';
import SeparatorBottomSimpleImg from '../assets/images/landing/separator-bottom-simple.svg';
const LoginPage = () => {
    const location = useLocation();
    const isLoginOrSignupPage = location.pathname === '/landings/login' || location.pathname === '/landings/signup';
    const getSeparatorImage = () => {
        // If we're on the login page
        if (location.pathname === '/landings/login' || location.pathname === '/landings/signup') {
            return SeparatorBottomSimpleImg; // Replace with your login page separator
        }
        // Default separator
        return SeparatorTopImg;
    };
    const getSeparatorClassName = () => {
        if (location.pathname === '/landings/login' || location.pathname === '/landings/signup') {
            return 'absolute left-0 bottom-[-5px] max-892:bottom-[-5px] w-full z-10';
        }
        return 'w-full';
    };
    return (
        <div className="relative bg-gradient-to-br from-[#2A9D8F] to-[#F4A261] py-16 px-4 pb-[110px]">
            {isLoginOrSignupPage && <img
                className={getSeparatorClassName()}
                src={getSeparatorImage()}
                alt=""
                role="presentation"
            />}
            <Login />
        </div>
    )

}

export default LoginPage;
