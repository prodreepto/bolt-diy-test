import { Code, Database, Cloud, PenTool } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SkillBadge from '../components/SkillBadge';
import { SKILLS } from '../constants';

const icons = {
  Code,
  Database,
  Cloud,
  PenTool,
};

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-border">
                  <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Alex Doe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                About Me
              </h2>
              <p className="text-text-secondary text-lg mb-6">
                I'm a full-stack developer with a passion for building beautiful, functional, and user-centric web applications. With over 5 years of experience, I have a proven track record of turning complex problems into elegant software solutions.
              </p>
              <p className="text-text-secondary text-lg mb-8">
                My expertise lies in the JavaScript ecosystem, particularly with React and Node.js, but I'm always eager to learn new technologies and expand my skillset. I thrive in collaborative environments and am dedicated to writing clean, maintainable, and efficient code.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {SKILLS.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} icon={icons[skill.icon]} />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
