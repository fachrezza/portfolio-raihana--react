import { motion } from "framer-motion";

/* lucide icons */
import {
  Camera,
  Users,
  Lightbulb,
} from "lucide-react";

/* LOGO SVG */
import figmaLogo from "../assets/logos/figma.svg";
import canvaLogo from "../assets/logos/canva.svg";
import capcutLogo from "../assets/logos/capcut.svg";
import lightroomLogo from "../assets/logos/lightroom.svg";
import excelLogo from "../assets/logos/excel.svg";
import wordLogo from "../assets/logos/word.svg";
import obsLogo from "../assets/logos/obs.png";
import gptLogo from "../assets/logos/gpt.png";
import notionLogo from "../assets/logos/notion.svg";

export default function About() {

  /* TECH STACK */
  const techStack = [
    {
      name: "Figma",
      icon: figmaLogo,
    },

    {
      name: "Canva",
      icon: canvaLogo,
    },

    {
      name: "CapCut",
      icon: capcutLogo,
    },

    {
      name: "Lightroom",
      icon: lightroomLogo,
    },

    {
      name: "Excel",
      icon: excelLogo,
    },

    {
      name: "Word",
      icon: wordLogo,
    },

    {
      name: "OBS Studio",
      icon: obsLogo,
    },

    {
      name: "GPT",
      icon: gptLogo,
    },
    {
      name: "Notion",
      icon: notionLogo,
    },
  ];

  /* MAIN SKILLS */
  const mainSkills = [
    {
      title: "Graphic Design",
      icon: <Lightbulb size={28} />,
    },

    {
      title: "Social Media Management",
      icon: <Users size={28} />,
    },

    {
      title: "Photography & Videography",
      icon: <Camera size={28} />,
    },
  ];

  /* SOFT SKILLS */
  const softSkills = [
    "Problem Solving",
    "Leadership",
    "Innovation",
    "Teamwork",
    "Agility",
  ];

  /* KEY SKILLS */
  const keySkills = [
    "Brand Consistency",
    "Visual Storytelling",
    "Creative Strategy",
    "Cross-Team Collaboration",
    "Performance-Based Content",
    "Digital Optimization",
  ];

  return (
    <section
      id="about"
      className="
        min-h-screen
        py-32
        px-5
        relative
        overflow-hidden
      "
    >

      {/* BACKGROUND BLUR */}
      <div
        className="
          absolute
          top-0
          left-0

          w-80
          h-80

          bg-blue-200/30
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0

          w-80
          h-80

          bg-purple-200/30
          blur-3xl
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            text-5xl
            md:text-6xl
            font-bold
            mb-16

            bg-gradient-to-r
            from-blue-500
            via-purple-500
            to-pink-500

            bg-clip-text
            text-transparent
          "
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              glass
              rounded-[40px]
              p-10
              space-y-10
            "
          >

            {/* INTRO */}
            <div>

              <p className="text-blue-500 font-medium mb-3">
                Digital Creative
              </p>

              <h3 className="text-4xl font-bold leading-tight mb-5">
                Building meaningful digital experiences.
              </h3>

              <p className="text-gray-600 leading-8 text-lg">
                Hi, i'm your fav Gen Z creative storyteller
                passionate about visual branding, content strategy,
                and digital growth through modern creative direction.
              </p>

            </div>

            {/* MAIN SKILLS */}
            <div>

              <h4 className="text-2xl font-semibold mb-5">
                Skills
              </h4>

              <div className="space-y-4">

                {mainSkills.map((skill, index) => (
                  <motion.div
                    key={index}

                    whileHover={{
                      scale: 1.02,
                      x: 6,
                    }}

                    className="
                      bg-white/60
                      border
                      border-white/40

                      rounded-[28px]

                      p-5

                      flex
                      items-center
                      gap-4

                      transition-all
                      duration-300
                    "
                  >

                    <div className="text-blue-500">
                      {skill.icon}
                    </div>

                    <h5 className="font-semibold text-lg">
                      {skill.title}
                    </h5>

                  </motion.div>
                ))}

              </div>

            </div>

            {/* SOFT SKILLS */}
            <div>

              <h4 className="text-2xl font-semibold mb-5">
                Soft Skills
              </h4>

              <div className="flex flex-wrap gap-4">

                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}

                    whileHover={{
                      scale: 1.05,
                      y: -4,
                    }}

                    className="
                      bg-white/60
                      border
                      border-white/40

                      px-5
                      py-3

                      rounded-full

                      text-sm
                      font-medium

                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </motion.div>
                ))}

              </div>

            </div>

            {/* KEY SKILLS */}
            <div>

              <h4 className="text-2xl font-semibold mb-5">
                Key Skills
              </h4>

              <div className="flex flex-wrap gap-4">

                {keySkills.map((skill, index) => (
                  <motion.div
                    key={index}

                    whileHover={{
                      scale: 1.05,
                      y: -4,
                    }}

                    className="
                      glass

                      px-5
                      py-3

                      rounded-full

                      text-sm

                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </motion.div>
                ))}

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              glass
              rounded-[40px]
              p-10
            "
          >

            <div className="flex items-center justify-between mb-10">

              <h4 className="text-3xl font-bold">
                Tech Stack
              </h4>

              <div
                className="
                  glass
                  px-4
                  py-2
                  rounded-full
                  text-sm
                "
              >
                Creative Toolkit
              </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

              {techStack.map((tool, index) => (
                <motion.div
                  key={index}

                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}

                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}

                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}

                  whileHover={{
                    scale: 1.05,
                    y: -6,
                  }}

                  className="
                    bg-white/60
                    border
                    border-white/40

                    rounded-[30px]

                    p-7

                    flex
                    flex-col
                    items-center
                    justify-center

                    text-center

                    transition-all
                    duration-300
                  "
                >

                  {/* LOGO */}
                  <div className="mb-4">

                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="
                        w-10
                        h-10
                        object-contain
                      "
                    />

                  </div>

                  {/* NAME */}
                  <p className="font-medium">
                    {tool.name}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}