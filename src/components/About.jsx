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

  const techStack = [
    { name: "Figma", icon: figmaLogo },
    { name: "Canva", icon: canvaLogo },
    { name: "CapCut", icon: capcutLogo },
    { name: "Lightroom", icon: lightroomLogo },
    { name: "Excel", icon: excelLogo },
    { name: "Word", icon: wordLogo },
    { name: "OBS Studio", icon: obsLogo },
    { name: "GPT", icon: gptLogo },
    { name: "Notion", icon: notionLogo },
  ];

  const mainSkills = [
    {
      title: "Graphic Design",
      icon: <Lightbulb size={24} />,
    },
    {
      title: "Social Media Management",
      icon: <Users size={24} />,
    },
    {
      title: "Photography & Videography",
      icon: <Camera size={24} />,
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Leadership",
    "Innovation",
    "Teamwork",
    "Agility",
  ];

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
        py-20 sm:py-28 md:py-32
        px-4 sm:px-5
        relative
        overflow-hidden
      "
    >

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-blue-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-purple-200/30 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            text-4xl sm:text-5xl md:text-6xl
            font-bold
            mb-10 sm:mb-16

            bg-gradient-to-r
            from-blue-500
            via-purple-500
            to-pink-500

            bg-clip-text
            text-transparent
          "
        >
          Who's Behind?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              glass
              rounded-[32px] sm:rounded-[40px]
              p-5 sm:p-7
              space-y-6
              flex flex-col
            "
          >

            {/* INTRO */}
            <div>
              <p className="text-blue-400 font-medium mb-3 text-sm sm:text-base">
                Digital Creative
              </p>

              <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-4 sm:mb-5">
                Building meaningful digital experiences.
              </h3>

              <p className="text-black-300 leading-7 sm:leading-8 text-base sm:text-lg">
                Hi, i'm your fav Gen Z creative storyteller
                passionate about visual branding, content strategy,
                and digital growth through modern creative direction.
              </p>
            </div>

            {/* MAIN SKILLS */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4">
                Skills
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {mainSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, x: 4 }}
                    className="
                      bg-white/60
                      border border-white/40
                      rounded-2xl
                      p-3 sm:p-4
                      flex items-center gap-2 sm:gap-3
                    "
                  >
                    <div className="text-blue-500">
                      {skill.icon}
                    </div>

                    <h5 className="font-semibold text-sm sm:text-base">
                      {skill.title}
                    </h5>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SOFT SKILLS */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">
                Soft Skills
              </h4>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="
                      bg-white/60
                      border border-[#5B8DEF]
                      px-3 py-1.5
                      rounded-full
                      text-[11px] sm:text-xs
                      font-medium
                    "
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* KEY SKILLS */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">
                Key Skills
              </h4>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {keySkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="
                      bg-white/60
                      border border-[#5B8DEF]
                      px-3 py-1.5
                      rounded-full
                      text-[11px] sm:text-xs
                      font-medium
                    "
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              glass
              rounded-[32px] sm:rounded-[40px]
              p-5 sm:p-10
              flex flex-col
            "
          >

            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8 sm:mb-10">
              <h4 className="text-2xl sm:text-3xl font-bold">
                My Tools
              </h4>

              <div className="glass px-4 py-2 rounded-full text-xs sm:text-sm">
                Creative Toolkit
              </div>
            </div>

            {/* TOOLS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">

              {techStack.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -6 }}
                  className="
                    bg-white/60
                    border border-white/40
                    rounded-2xl sm:rounded-[30px]
                    p-4 sm:p-7
                    flex flex-col items-center justify-center
                    text-center
                  "
                >

                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain mb-3"
                  />

                  <p className="font-medium text-xs sm:text-sm">
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