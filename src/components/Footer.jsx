import React from 'react';
import { motion } from 'framer-motion';
export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752854511303_0.png';
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossos Valores', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];
  return (
    <motion.footer
      className="bg-secondary text-light"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {' '}
      <div className="container mx-auto px-6 py-12 lg:py-16">
        {' '}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {' '}
          <div className="flex flex-col items-center md:items-start">
            {' '}
            <a href="#home">
              {' '}
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-14 w-auto mb-4"
              />{' '}
            </a>{' '}
            <p className="max-w-xs text-light/70">
              {' '}
              Construindo o futuro com integridade, inovação e um compromisso
              inabalável com a qualidade.{' '}
            </p>{' '}
          </div>{' '}
          <div className="md:mx-auto">
            {' '}
            <h3 className="font-bold text-lg text-primary mb-4 tracking-wider">
              Navegação
            </h3>{' '}
            <ul className="space-y-3">
              {' '}
              {navLinks.map(link => (
                <li key={link.name}>
                  {' '}
                  <a
                    href={link.href}
                    className="text-light/80 hover:text-primary transition-colors duration-300"
                  >
                    {' '}
                    {link.name}{' '}
                  </a>{' '}
                </li>
              ))}{' '}
            </ul>{' '}
          </div>{' '}
          <div>
            {' '}
            <h3 className="font-bold text-lg text-primary mb-4 tracking-wider">
              Contato
            </h3>{' '}
            <ul className="space-y-3 text-light/80">
              {' '}
              <li>
                {' '}
                <a
                  href="tel:+5544991040774"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +55 44 99104-0774
                </a>{' '}
              </li>{' '}
              <li>
                {' '}
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="hover:text-primary transition-colors duration-300"
                >
                  ffbrunoff@yahoo.com.br
                </a>{' '}
              </li>{' '}
              <li>
                {' '}
                <p>Padre Lebret, 801, G05 Bloco 03</p>{' '}
              </li>{' '}
            </ul>{' '}
          </div>{' '}
        </div>{' '}
        <div className="mt-12 pt-8 border-t border-primary/20 text-center text-light/60">
          {' '}
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </motion.footer>
  );
}
