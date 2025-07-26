import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, Users } from 'lucide-react';
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };
  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 },
    },
  };
  const imageVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 50 },
    },
  };
  const featureVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <section id="about" className="section-padding bg-light">
      {' '}
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {' '}
        <div className="text-center mb-16">
          {' '}
          <motion.h2
            variants={featureVariants}
            className="text-3xl md:text-4xl font-extrabold text-dark mb-4"
          >
            {' '}
            Onde a sua <span className="text-gradient">
              visão ganha forma
            </span>{' '}
          </motion.h2>{' '}
          <motion.p
            variants={featureVariants}
            className="max-w-3xl mx-auto text-lg text-dark/70"
          >
            {' '}
            Na NTC Brasil, cada projeto é mais do que uma construção; é a
            materialização de um sonho. Combinamos técnica apurada, materiais de
            ponta e uma equipe dedicada para entregar resultados que superam
            expectativas.{' '}
          </motion.p>{' '}
        </div>{' '}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {' '}
          <motion.div variants={textVariants}>
            {' '}
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Nossa História
            </h3>{' '}
            <p className="text-dark/80 mb-6 leading-relaxed">
              {' '}
              Fundada sobre os pilares da integridade e da inovação, a NTC
              Brasil nasceu do desejo de redefinir o padrão de qualidade na
              construção civil. Com anos de experiência acumulada, nossa jornada
              é marcada pela busca incessante por excelência e pela satisfação
              total de nossos clientes.{' '}
            </p>{' '}
            <p className="text-dark/80 leading-relaxed">
              {' '}
              Acreditamos que a confiança é o alicerce de qualquer grande obra.
              Por isso, mantemos uma comunicação transparente e um
              relacionamento próximo em todas as etapas do projeto, garantindo
              que cada detalhe esteja alinhado com sua visão.{' '}
            </p>{' '}
          </motion.div>{' '}
          <motion.div
            variants={imageVariants}
            className="p-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl shadow-lg"
          >
            {' '}
            <div className="space-y-8">
              {' '}
              <motion.div
                variants={featureVariants}
                className="flex items-start space-x-4"
              >
                {' '}
                <div className="flex-shrink-0 bg-primary text-light p-3 rounded-full">
                  {' '}
                  <Building size={24} />{' '}
                </div>{' '}
                <div>
                  {' '}
                  <h4 className="font-bold text-lg text-secondary">
                    Excelência Estrutural
                  </h4>{' '}
                  <p className="text-dark/70">
                    Projetos robustos e seguros, executados com precisão
                    milimétrica.
                  </p>{' '}
                </div>{' '}
              </motion.div>{' '}
              <motion.div
                variants={featureVariants}
                className="flex items-start space-x-4"
              >
                {' '}
                <div className="flex-shrink-0 bg-primary text-light p-3 rounded-full">
                  {' '}
                  <Target size={24} />{' '}
                </div>{' '}
                <div>
                  {' '}
                  <h4 className="font-bold text-lg text-secondary">
                    Foco no Cliente
                  </h4>{' '}
                  <p className="text-dark/70">
                    Sua satisfação é o nosso principal objetivo e a medida do
                    nosso sucesso.
                  </p>{' '}
                </div>{' '}
              </motion.div>{' '}
              <motion.div
                variants={featureVariants}
                className="flex items-start space-x-4"
              >
                {' '}
                <div className="flex-shrink-0 bg-primary text-light p-3 rounded-full">
                  {' '}
                  <Users size={24} />{' '}
                </div>{' '}
                <div>
                  {' '}
                  <h4 className="font-bold text-lg text-secondary">
                    Equipe Qualificada
                  </h4>{' '}
                  <p className="text-dark/70">
                    Profissionais experientes e apaixonados pelo que fazem.
                  </p>{' '}
                </div>{' '}
              </motion.div>{' '}
            </div>{' '}
          </motion.div>{' '}
        </div>{' '}
      </motion.div>{' '}
    </section>
  );
}
