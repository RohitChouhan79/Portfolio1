
import { FiAlignJustify } from "react-icons/fi";
import { GoX } from "react-icons/go";
// import { motion } from 'framer-motion' 

const ToggleButton = ({ setOpen, open }) => {
    return (
        <div className="toogle">
         <button onClick={() => setOpen(prev => !prev)}>
            { open === true ? <GoX /> : <FiAlignJustify /> }
        </button>
        </div>
    );
};

export default ToggleButton;