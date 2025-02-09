import { motion } from 'framer-motion';

const CustomCheckbox = ({ id, label, checked, onChange }) => {
    return (
        <div className="flex items-start gap-3 mb-2">
            <div className="relative flex items-center">
                <input
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-sm checked:border-[#2CCDA6] checked:bg-[#2CCDA6] transition-all cursor-pointer"
                />
            </div>
            <label htmlFor={id} className="text-sm text-gray-600 cursor-pointer">
                {label}
            </label>
        </div>
    );
};

export default CustomCheckbox;