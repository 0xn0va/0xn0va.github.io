import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from './hoc'
import { fadeIn, textVariant } from '../utils/motion'

interface ServiceCardProps {
  index: number
  title: string
  icon: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('up', 'easeInOut', index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-md"
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    >
      <div className="rounded-[20px] py-5 px-8 min-h-[280px] flex justify-center items-center flex-col">
        <motion.img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain mb-3"
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <h3 className="text-white text-[20px] font-semibold text-center">{title}</h3>
      </div>
    </motion.div>
  </div>
)

interface Service {
  title: string
  icon: string
}

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      <motion.p variants={fadeIn('up', 'easeInOut', 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a frontend developer with experience in TypeScript and JavaScript, with React, Node.js and Figma.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service: Service, index: number) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
