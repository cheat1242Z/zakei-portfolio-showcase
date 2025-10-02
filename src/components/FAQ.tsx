import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { question: 'Quels sont vos tarifs ?', answer: 'Mes tarifs varient selon la complexité du projet. Je propose des devis personnalisés après une première consultation gratuite.' },
  { question: 'Quel est le délai de réalisation ?', answer: "Le délai dépend de la taille et de la complexité du projet. Un site vitrine simple peut être livré en 2-3 semaines, tandis qu'une plateforme plus complexe peut prendre plusieurs mois." },
  { question: 'Proposez-vous la maintenance ?', answer: 'Oui, je propose des contrats de maintenance pour assurer le bon fonctionnement et la sécurité de votre site web.' },
  { question: 'Travaillez-vous avec des clients internationaux ?', answer: 'Absolument ! Je travaille avec des clients du monde entier grâce aux outils de communication modernes.' },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-6 bg-gradient-card">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">FAQ</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl px-6 ring-1 ring-border hover:ring-primary/50 transition-all">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
