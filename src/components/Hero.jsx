import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import Typed from "typed.js"

const Hero = () => {
  const textRef = useRef(null) // Referência para o texto
  const [lineHeight, setLineHeight] = useState("auto") // Estado para a altura da linha

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [" Bia!", "a Frontend Developer!"],
      typeSpeed: 80,
      backSpeed: 70,
      loop: true,
      onStringTyped: (arrayPos, self) => {
        // Atualiza a altura da linha com base no tamanho do texto
        updateLineHeight(self.strings[arrayPos])
      },
      onTypingResumed: (arrayPos, self) => {
        // Atualiza a altura quando a digitação é retomada
        updateLineHeight(self.strings[arrayPos])
      },
    })

    // Atualiza a altura na montagem inicial
    updateLineHeight(typed.strings[0])

    return () => {
      typed.destroy()
    }
  }, [])

  const updateLineHeight = (currentText) => {
    // Ajusta a altura da linha com base no texto atual
    if (textRef.current) {
      const height = textRef.current.offsetHeight // Obtém a altura do texto
      setLineHeight(`${height + 20}px`) // Define a nova altura (incluindo um pouco de espaçamento)
    }
  }

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 py-12 mt-10`}>
        {/* Div com círculo e linha embaixo */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#AFA7D7]" />
          <div
            className="w-1 lilac-gradient"
            style={{ height: lineHeight }} // Aplica a altura dinâmica
          />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span ref={textRef} className="text-[#AFA7D7] auto-type"></span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 pt-5`}>
            When my creativity meets code, <br className="sm:block hidden" /> digital solutions come to life.
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
