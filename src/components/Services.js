import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsArrowUpRight } from "react-icons/bs";
import services from '../assets/services.png';

const Services = () => {
  // Updated services array with actual links
  const services = [
    {
      name: 'Machine Learning Specialization',
      description: 'Coursera',
      link: 'https://drive.google.com/file/d/1Srej9Id3gx7uhb7AXHv04y8S6C27DGx8/view?usp=sharing',
      linkText: 'Learn more'
    },
    {
      name: 'Programming With Java',
      description: 'National Programme on Technology Enhanced Learning -IIT',
      link: 'https://drive.google.com/file/d/1L1zOnNkU_yClwemMBEmK235to67iUGkx/view?usp=drive_link',
      linkText: 'Learn more'
    },
    {
      name: 'DataBase Management System',
      description: 'National Programme on Technology Enhanced Learning -IIT',
      link: 'https://drive.google.com/file/d/15nedFed-XbR8bgLiNc-8BvxaMJzeeMkY/view?usp=drive_link',
      linkText: 'Learn more'
    },
    {
      name: 'Cyber Security and Privacy',
      description: 'National Programme on Technology Enhanced Learning -IIT',
      link: 'https://drive.google.com/file/d/1Qh373PMgLkX6I8epdOEL9Q73GM9m7fWi/view?usp=drive_link',
      linkText: 'Learn more'
    },
    {
      name: 'Smart India Hackathon-2023',
      description: 'College level Winner.',
      link: '',
      linkText: 'Learn more'
    },
    {
      name: 'Machine Learning',
      description: 'Kaggle',
      link: 'https://drive.google.com/file/d/1KsNSYzj_Yx9GIwy3gYC9pSb6wO1GHvWL/view?usp=drive_link',
      linkText: 'Learn more'
    }
  ];

  return (
    <section id='services' className='py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-no-repeat mix-blend-lighten mb-12 lg:bg-services lg:bg-bottom lg:mb-0'
          >
            <h2 className='h2 text-accent'>My Certifications:</h2>
            <button className='btn btn-sm'><a href='https://drive.google.com/drive/folders/1ahe9Uq2ZURsbD8z3hdKagy3NRg4p7PHB?usp=sharing'>my Certificates</a></button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {
                services.map((service, idx) => {
                  const { name, description, link, linkText } = service;
                  return (
                    <div key={idx} className='border-b border-white/20 h-[120px] mb-[36px] flex'>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                        <p className='font-secondary leading-tight'>{description}</p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                        <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href={link} target="_blank" rel="noopener noreferrer">
                          <BsArrowUpRight />
                        </a>
                        <a href={link} className='text-gradient text-sm' target="_blank" rel="noopener noreferrer">
                          {linkText}
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
