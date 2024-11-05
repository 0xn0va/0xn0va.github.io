import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "./hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

interface Tag {
  name: string
  color: string
}

interface ProjectCardProps {
  index: number
  name: string
  description: string
  tags: Tag[]
  media: string
  source_code_link: string
  live_demo_link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, name, description, tags, media, source_code_link, live_demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="flex flex-col min-h-[450px] max-w-[360px] w-full">
      <Tilt
        options={{
          max: 0,
          scale: 1,
          speed: 450,
          perspective: 0,
        }}
        className="bg-tertiary p-5 rounded-2xl h-full flex flex-col"
      >
        <div className="relative w-full h-[230px]">
          {media.endsWith(".mp4") ? (
            <video className="w-full h-full object-cover rounded-2xl" autoPlay loop muted>
              <source src={media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={media} alt="project_media" className="w-full h-full object-cover rounded-2xl" />
          )}

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <span className="text-white font-bold text-sm">🔗</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-col flex-grow">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* As tags agora estão dentro do mesmo bloco flex e ficam abaixo da descrição */}
        <div className="mt-4 flex flex-wrap gap-2 justify-start">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("up", "spring", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          These projects highlight my skills and experience with real-world examples. Each one includes a brief description, along with links to the
          code and live demos.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-between">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")
