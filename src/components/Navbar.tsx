import { Home, User, Briefcase, Code, Folder, MessageCircle, Phone } from 'lucide-react';

const navItems = [
  { href: '#accueil', label: 'Accueil', icon: Home },
  { href: '#a-propos', label: 'À propos', icon: User },
  { href: '#services', label: 'Services', icon: Briefcase },
  { href: '#competences', label: 'Compétences', icon: Code },
  { href: '#projets', label: 'Projets', icon: Folder },
  { href: '#faq', label: 'FAQ', icon: MessageCircle },
  { href: '#contact', label: 'Contact', icon: Phone },
];

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-glow">
      <div className="container mx-auto px-6 py-4">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 text-sm md:text-base font-bold tracking-wide text-foreground hover:text-primary transition-colors duration-300"
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
