import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const Hero = () => {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!typedRef.current) return;

        const typed = new Typed(typedRef.current, {
            strings: [
                'Web Developer',
                'Freelancer',
                'AI Coder',
            ],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-start overflow-hidden"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-white/70 z-0" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative z-10 text-left px-6 md:pl-60"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-800">
                    Hugh Mclude Vergara
                </h1>
                <p className="text-2xl md:text-3xl text-gray-800 font-semibold mb-4">
                    I'm a<span ref={typedRef}></span>
                </p>

                <div className="flex space-x-4 text-gray-700 text-xl">
                    <a href="https://x.com/hugh"><i className="bi bi-twitter-x"></i></a>
                    <a href="https://facebook.com/hugh.vergara.2024"><i className="bi bi-facebook"></i></a>
                    <a href="https://instagram.com/hugh_vergara/"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/vergara-hugh/"><i className="bi bi-linkedin"></i></a>
                    <a href="https://api.github.com/users/hugh-vergara"><i className="bi bi-github"></i></a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
