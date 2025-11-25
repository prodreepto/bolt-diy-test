import { Mail, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-6">
              <Mail className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              I'm currently available for freelance work and open to discussing new projects. Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            <a
              href="mailto:hello@alexdoe.com"
              className="group inline-flex items-center justify-center bg-primary text-background font-semibold py-4 px-8 rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Say Hello <ArrowRight className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
