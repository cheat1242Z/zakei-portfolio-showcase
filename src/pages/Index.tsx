import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { PersonalSection } from '@/components/PersonalSection';
import { Journey } from '@/components/Journey';
import { Services } from '@/components/Services';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <PersonalSection />
      <Journey />
      <Services />
      <Skills />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
