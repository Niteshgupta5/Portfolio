import { contactInfo } from '@/mocks/contact';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background-900 border-t border-background-800/50">
      <div className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href={contactInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background-800/60 text-foreground-600 hover:text-primary-400 hover:bg-background-800 transition-all"
                aria-label="GitHub"
              >
                <i className="ri-github-fill text-xl" />
              </a>
              <a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background-800/60 text-foreground-600 hover:text-primary-400 hover:bg-background-800 transition-all"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-xl" />
              </a>
              <a
                href={contactInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background-800/60 text-foreground-600 hover:text-primary-400 hover:bg-background-800 transition-all"
                aria-label="Twitter"
              >
                <i className="ri-twitter-fill text-xl" />
              </a>
              <a
                href={contactInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background-800/60 text-foreground-600 hover:text-primary-400 hover:bg-background-800 transition-all"
                aria-label="Whatsapp"
              >
                <i className="ri-whatsapp-fill text-xl" />
              </a>
            </div>

            <div className="w-16 h-px bg-background-700" />

            <h4 className="font-heading text-2xl font-bold text-foreground-950">
              {contactInfo.name}
            </h4>
            <p className="text-sm text-foreground-600">
              &copy; {year} All rights reserved. Built with passion and clean code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}