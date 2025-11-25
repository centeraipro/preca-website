import React from "react";

interface Footer7Props {
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
}

export const Footer7 = ({
  socialLinks = [],
  copyright,
}: Footer7Props) => {
  return (
    <footer className="relative bg-background border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
