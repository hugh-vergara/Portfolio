import { useState } from "react";
import RxSeekCarousel from "./RxSeekCarousel.tsx";
import Favicon from "../assets/carousel/Rxseek/favicon.png";

const ToggleCarousel: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <section className="py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>

            <div
                onClick={() => setShow((prev) => !prev)}
                className="cursor-pointer border-2 border-black rounded-lg max-w-md mx-auto p-6 bg-gray-50 hover:bg-gray-100 shadow-md transition mb-12"
            >
                <img src={Favicon.src} alt="RxSeek Logo" className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-2xl font-extrabold text-black">RxSeek</h3>
                <p className="text-lg font-semibold text-black">Medicine Information Chatbot</p>
            </div>

            {show && <RxSeekCarousel />}
        </section>
    );
};

export default ToggleCarousel;
