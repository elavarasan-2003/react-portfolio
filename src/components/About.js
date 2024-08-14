import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return <section id='about' className='' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        </motion.div>
        {/* text */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>Full Stack Developer skilled in C++, Python, React.js, and Node.js.</h3>
          <p className='mb-6'>Experienced in integrating machine learning and managing databases with MongoDB. Passionate about creating innovative software solutions.</p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={10} duration={3} />
                  :
                  null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                completed<br />
                Projects
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={6} duration={5} />
                  :
                  null
                }+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed
              </div>
            </div>
           
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>
            <a href="https://drive.google.com/file/d/1mj2KqyQoaV0DP43rNp7GGAhhsvcQvrOZ/view?usp=sharing" className='text-gradient btn-link'>Resume</a>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
