import React, { useState, useEffect } from "react";
import Logo from "../assets/carousel/Rxseek/logo.png";
import Login from "../assets/carousel/Rxseek/login.png";
import Disclaimer from "../assets/carousel/Rxseek/disclaimer.png";
import Homescreen from "../assets/carousel/Rxseek/homescreen.png";
import Chat from "../assets/carousel/Rxseek/chat.png";
import AdminLogin from "../assets/carousel/Rxseek/adminLogin.png";
import Admin from "../assets/carousel/Rxseek/admin.png";

const slides = [
    { src: Logo.src, alt: "RxSeek Logo", description: "RxSeek." },
    { src: Login.src, alt: "Login Page", description: "Login interface for users." },
    {src: Disclaimer.src, alt: "Disclaimer", description: "Disclaimer for users." },
    {src:Homescreen.src, alt: "Homescreen", description: "Homescreen with chat history" },
    {src:Chat.src, alt:"Chat", description: "Chat Interface with OCR" },
    {src:AdminLogin.src, alt:"Admin Login", description: "Admin Login page" },
    {src:Admin.src, alt:"Admin", description: "Admin for updating datasets" },


];

const RxSeekCarousel: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const next = () => setCurrent((c) => (c + 1) % slides.length);
    const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
    const goTo = (i: number) => setCurrent(i);

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="px-4 sm:px-0">
            <div className="w-full max-w-4xl mx-auto bg-gray-900 text-white p-4 sm:p-6 pt-20 rounded-lg">
                <p className="pb-5 text-sm sm:text-base">
                    RxSeek: A Retrieval-Augmented Generation Framework for LLMs in the Pharmaceutical Domain, Featuring
                    OCR-Based Drug Identification and Sentiment Analysis of Pharmaceutical Drug Reviews.
                </p>
                <div className="relative">
                    {/* Carousel wrapper */}
                    <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-lg">
                        {slides.map((s, i) => (
                            <div
                                key={i}
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                                    i === current ? "opacity-100 z-20" : "opacity-0 z-10"
                                }`}
                            >
                                <img
                                    src={s.src}
                                    alt={s.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Indicators */}
                    <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 -translate-x-1/2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`w-3 h-3 rounded-full ${
                                    i === current ? "bg-white" : "bg-gray-500"
                                }`}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prev}
                        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 sm:px-4"
                    >
                <span
                    className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 hover:bg-white/50">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
                        <path d="M5 1 1 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </span>
                    </button>

                    <button
                        onClick={next}
                        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 sm:px-4"
                    >
                <span
                    className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 hover:bg-white/50">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
                        <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </span>
                    </button>
                </div>

                {/* Description */}
                <p className="mt-4 text-center text-gray-300 text-sm sm:text-base">{slides[current].description}</p>
            </div>
        </div>


            );

            };

            export default RxSeekCarousel;
