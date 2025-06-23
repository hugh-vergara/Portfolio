import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);

    const services = [
        {
            title: 'Web Development',
            icon: 'bi-browser-chrome',
            delay: 100,
            color: 'bg-cyan-50',
            description:
                'Design and build responsive websites using HTML, CSS, JavaScript, Bootstrap, and modern frameworks.',
        },
        {
            title: 'Software Development',
            icon: 'bi-pc-display',
            delay: 200,
            color: 'bg-orange-50',
            description:
                'Designs and builds reliable, scalable software solutions. Writes clean code, solves real-world problems, and ensures smooth user experience across platforms.',
        },
        {
            title: 'Data Analysis',
            icon: 'bi-bar-chart-line-fill',
            delay: 300,
            color: 'bg-teal-50',
            description:
                'Transforms raw data into actionable insights. Cleans, analyzes, and visualizes data to support decision-making and uncover trends.',
        },
    ];

    return (
        <section id="services" className="py-16 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4">Services</h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        I offer a range of services in software development, focusing on web development, AI integration, and data analytics. From building responsive websites to deploying machine learning models, I aim to deliver efficient, scalable, and user-focused solutions.
                    </p>
                </div>

                {/* Services Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative ${service.color} p-6 rounded-lg shadow-md hover:shadow-lg transition`}
                            data-aos="fade-up"
                            data-aos-delay={service.delay}
                        >
                            <div className="flex items-center justify-center mb-4 relative">
                                <svg
                                    width="100"
                                    height="100"
                                    viewBox="0 0 600 600"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#f5f5f5"
                                        d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                                    />
                                </svg>
                                <i className={`bi ${service.icon} absolute text-3xl text-gray-600`}></i>
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-base">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
