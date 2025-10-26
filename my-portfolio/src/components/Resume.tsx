import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);

    return (
        <section id="resume" className="py-16 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4">Resume</h2>
                    <p className="text-lg">
                        Motivated and detail-oriented Computer Science graduate with a passion for web development, artificial intelligence, and data analytics. Skilled in building full-stack applications, solving real-world problems, and continuously learning new technologies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-[26px] font-bold my-5">Summary</h3>
                        <h3 className="text-[26px] font-bold my-5">Education</h3>

                        <div className="relative pl-6 border-l-2 border-blue-500 pb-6">
                            <span className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full left-[-9px] top-0" />
                            <h4 className="uppercase text-[18px] font-semibold text-gray-700 mb-2">Bachelor of Science in Computer Science</h4>
                            <h5 className="text-sm font-semibold bg-gray-100 px-3 py-1 inline-block mb-2">2021 - 2025</h5>
                            <p className="italic text-sm mb-2">University of San Jose - Recoletos</p>
                            <ul className="list-disc pl-5">
                                <li className="pb-2">Fourth-year Student Governor for CS</li>
                                <li className="pb-2">Alliance Bridging Program member</li>
                                <li className="pb-2">OCR system w/ TensorFlow (research)</li>
                                <li className="pb-2">Mango ripening monitor system</li>
                            </ul>
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-[26px] font-bold my-5">Professional Experience</h3>

                        <div className="relative pl-6 border-l-2 border-blue-500 pb-6">
                            <span
                                className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full left-[-9px] top-0"/>
                            <h4 className="uppercase text-[18px] font-semibold text-gray-700 mb-2">Internship</h4>
                            <h5 className="text-sm font-semibold bg-gray-100 px-3 py-1 inline-block mb-2">February -
                                June 2025</h5>
                            <p className="italic text-sm mb-2">Yoshii Software Solutions</p>
                            <ul className="list-disc pl-5">
                                <li className="pb-2">Used Git, GitLab CI/CD, Docker</li>
                                <li className="pb-2">Built responsive UIs (HTML/CSS/JS)</li>
                                <li className="pb-2">Worked with REST APIs</li>
                                <li className="pb-2">Debugged, tested, deployed apps</li>
                                <li className="pb-2">Collaborated in Agile environments</li>
                            </ul>
                        </div>

                        <div className="relative pl-6 border-l-2 border-blue-500">
                            <span
                                className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full left-[-9px] top-0"/>
                            <h4 className="uppercase text-[18px] font-semibold text-gray-700 mb-2">Data Analytics
                                Training</h4>
                            <h5 className="text-sm font-semibold bg-gray-100 px-3 py-1 inline-block mb-2">2024</h5>
                            <p className="italic text-sm mb-2">Google Data Analytics – Coursera</p>
                            <ul className="list-disc pl-5">
                                <li className="pb-2">8-course cert (Spreadsheets, SQL, R)</li>
                                <li className="pb-2">Cleaned/analyzed real datasets</li>
                                <li className="pb-2">Created dashboards, reports</li>
                                <li className="pb-2">Improved data-driven decision skills</li>
                                <li className="pb-2">
                                    <a
                                        href="https://coursera.org/share/ecdeb6fa9ce998bb8b6655d2b87333df"
                                        target="_blank"
                                        className="text-blue-600 underline"
                                    >
                                        View Certificate
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className="relative pl-6 border-l-2 border-blue-500">
                            <span
                                className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full left-[-9px] top-0"/>
                            <h4 className="uppercase text-[18px] font-semibold text-gray-700 mb-2">Junior Software
                                Developer</h4>
                            <h5 className="text-sm font-semibold bg-gray-100 px-3 py-1 inline-block mb-2">2025 –
                                Advanced World Solutions (AWS)</h5>
                            <p className="italic text-sm mb-2">Worked with Japanese clients on internal systems</p>
                            <ul className="list-disc pl-5">

                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
