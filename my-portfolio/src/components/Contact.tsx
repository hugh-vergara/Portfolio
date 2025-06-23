import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ContactSection = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);

    return (
        <section id="contact" className="py-16 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4">Contact</h2>
                    <p className="text-lg">Have some questions or inquiries?</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12" data-aos="fade" data-aos-delay="100">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
                            <i className="bi bi-geo-alt text-2xl text-blue-600"></i>
                            <div>
                                <h3 className="text-lg font-semibold">Address</h3>
                                <p>Quiot Pardo, Cebu City</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
                            <i className="bi bi-telephone text-2xl text-blue-600"></i>
                            <div>
                                <h3 className="text-lg font-semibold">Call</h3>
                                <p>+63 917 656 6463</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
                            <i className="bi bi-envelope text-2xl text-blue-600"></i>
                            <div>
                                <h3 className="text-lg font-semibold">Email Us</h3>
                                <p>hughvergara001@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center flex flex-col justify-center">
                        <h4 className="text-xl font-semibold mb-4">Let's work together!</h4>
                        <p>Feel free to reach out for collaboration, project inquiries, or just a friendly hello.</p>
                    </div>
                </div>
            </div>





</section>
)
    ;
};

export default ContactSection;
