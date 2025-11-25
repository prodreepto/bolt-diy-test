import { Github, Linkedin, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Alex Doe. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => {
              const Icon = socialIcons[link.name.toLowerCase()];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                  aria-label={link.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
