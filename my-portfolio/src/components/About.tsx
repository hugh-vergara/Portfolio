import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Profile from '../assets/profile-img.jpg';

const About = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);

    return (
        <section id="about" className="py-16 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">About</h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        A BS-Computer Science graduate at the University of San Jose - Recoletos – proficient in Web Development and Artificial Intelligence. I have experience working with modern frameworks and tools, focusing on building efficient and scalable applications. Passionate about solving complex problems, I continuously explore advancements in AI and web technologies.
                    </p>
                </div>

                <div
                    className="flex flex-col lg:flex-row items-center lg:items-start gap-8"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <img
                            src={Profile.src}
                            alt="Profile"
                            className="rounded shadow-lg max-w-xs w-full"
                        />
                    </div>

                    <div className="w-full lg:w-2/3">
                        <h3 className="text-2xl font-semibold mb-6">
                            Artificial Intelligence &amp; Web Developer.
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ul className="space-y-2 text-base">
                                <li><strong>Birthday:</strong> July 1, 2025</li>
                                <li><strong>Phone:</strong> +63 917 656 6463</li>
                                <li><strong>City:</strong> Cebu City, Philippines</li>
                                <li><a href="https://drive.google.com/file/d/1Yw3ki2T-jsz-juQ4tNZ2r7l9RN96O1Fp/view"><strong>View Resume</strong></a> </li>
                            </ul>
                            <ul className="space-y-2 text-base">
                                <li><strong>Age:</strong> 23</li>
                                <li><strong>Degree:</strong> Bachelor of Science in Computer Science</li>
                                <li><strong>Email:</strong> hughvergara001@gmail.com</li>
                                <li><strong>Freelance:</strong> Available</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
