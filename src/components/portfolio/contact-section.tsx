import { ContactForm } from './contact-form';
import { SectionTitle } from './section-title';

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-8 text-lg text-muted-foreground">
          Have a question or want to work together? Feel free to reach out.
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        <ContactForm />
      </div>
    </section>
  );
}
