import { arrowRight } from '../assets/icons/index';
const Button = () => {
    return (
        <button className="bg-coral-red  text-white rounded-full flex justify-center items-center gap-2 px-7 py-4 text-lg">
            <span>Shop Now</span>
            <img src={arrowRight} className='w-5 h-5 rounded-full' alt="Shop now icon" />
        </button>
    )
}

export default Button