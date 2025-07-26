import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background section-padding"
    >
      {' '}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10"></div>{' '}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>{' '}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>{' '}
      <motion.div
        className="text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {' '}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
        >
          {' '}
          <span className="block">Construindo sonhos com</span>{' '}
          <span className="block text-gradient bg-gradient-to-r from-primary to-secondary mt-2">
            {' '}
            excelência e qualidade.{' '}
          </span>{' '}
        </motion.h1>{' '}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-dark/70 mb-10"
        >
          {' '}
          Seu parceiro de confiança em cada projeto. Transformamos sua visão em
          realidade com integridade, inovação e um compromisso inabalável com o
          resultado.{' '}
        </motion.p>{' '}
        <motion.div variants={itemVariants}>
          {' '}
          <a href="#about" className="btn btn-secondary text-lg">
            {' '}
            Descubra como{' '}
          </a>{' '}
        </motion.div>{' '}
      </motion.div>{' '}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-dark/60"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        {' '}
        <ArrowDown size={24} />{' '}
      </motion.a>{' '}
    </section>
  );
}
