import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
    { label: 'HTML & CSS', value: 100 },
    { label: 'JavaScript (React, Astro, Angular, Vue)', value: 75 },
    { label: 'Python & Django', value: 75 },
    { label: 'PHP (Laravel)', value: 80 },
    { label: 'C', value: 90 },
    { label: 'Java', value: 55 },
    {label: 'Docker', value: 70},
    { label: 'SQL', value: 75 },
    { label: 'Git', value: 75 },
];

const Skills = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);

    return (
        <section id="skills" className="py-16 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Skills</h2>
                    <p className="text-lg">
                        These are the skills I have gained through school, internship and personal projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
                    {skills.map(({ label, value }) => (
                        <div key={label}>
                            <div className="mb-2 flex justify-between text-sm font-medium">
                                <span>{label}</span>
                                <span>{value}%</span>
                            </div>
                            <div className="w-full h-4 bg-gray-200 rounded">
                                <div
                                    className="h-4 bg-blue-500 rounded"
                                    style={{ width: `${value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
