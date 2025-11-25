import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-surface/80 z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(158,127,255,0.1),transparent_40%)] z-0"></div>
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'\%239E7FFF\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-text tracking-tighter mb-6">
          <span className="text-reveal-container">
            <span className="text-reveal-text" style={{ animationDelay: '100ms' }}>Crafting</span>
          </span>
          <span className="text-reveal-container">
            <span className="text-reveal-text" style={{ animationDelay: '300ms' }}>Digital</span>
          </span>
          <span className="text-reveal-container">
            <span className="text-reveal-text shine-effect" style={{ animationDelay: '500ms' }}>Experiences</span>
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-secondary mb-10 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          Hi, I'm Alex Doe. A passionate software developer from New York, creating modern and powerful web applications that leave a lasting impression.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center bg-primary text-background font-semibold py-3 px-8 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105"
          >
            <span className="absolute inset-0 bg-white/20 mix-blend-soft-light transition-all duration-500 group-hover:bg-white/30 scale-150 group-hover:scale-100"></span>
            View My Work
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center bg-surface text-text font-semibold py-3 px-8 rounded-full border border-border hover:bg-border hover:text-primary transition-all duration-300 transform hover:scale-105"
          >
            Contact Me <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
